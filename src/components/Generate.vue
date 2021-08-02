<template>
  <section>
    <a class="button button-outline" @click="$emit('toEdit')">edit again</a>
    <section class="doc-section"
      v-for="(name, i) in ['application', 'nomination', 'memo', 'offer', 'annex']"
      :key="i">
      <h4 class="heading">{{ name }}</h4>
      <p v-if="errors[name]">
      Missing fields: <code v-for="param in errors[name]" :key="param">{{param}}</code>
      </p>
      <template v-else-if="(name === 'application' || name === 'nomination' || name === 'memo') && docs[name]">
        <a class="button"
           @click="download(docs[name].pdf, docs[name].title + '.pdf', 'application/pdf')"
           >download</a>
        <iframe width="100%" height="300px" :src="docs[name] && docs[name].uri"></iframe>
        <blockquote @click="selectText" v-if="name === 'application'">{{emails.application}}</blockquote>
      </template>
      <template v-else-if="(name === 'offer' || name === 'annex') && docs[name]">
        <div v-for="(item, key) in docs[name]" :key="key">
          <strong>Dr. {{ item.applicant }} </strong>
          <a class="button"
            @click="download(item.pdf, item.title + '.pdf', 'application/pdf')"
            >download</a>
          <iframe width="100%" height="300px" :src="item.uri"></iframe>
        </div>
      </template>
      <hr>
    </section>
  </section>
</template>

<script>
import downloadjs from 'downloadjs';
import { loadPDF, fillTemplate, pdfToUri } from '../utils/pdf';
import allRequired from '../utils/allrequired';

export default {
  name: 'Generate',
  props: [],
  data () {
    return {
      isTemplateReady: false,
      templates: {},
      docs: {},
      emails: {},
      errors: {},
      objectURL: []
    };
  },
  methods: {
    /* eslint-disable consistent-return, no-cond-assign */
    download (data, title, mimetype) {
      console.log(downloadjs);
      downloadjs(data, title, mimetype);
    },
    selectText (e) {
      const node = e.target;
      if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
      } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        console.warn('Could not select text in node: Unsupported browser.');
      }
    },
    genEmail (type, details) {
      const closing = `Dr. ${details.councilMember}\n${details.councilPost}\nRTSKHDA\nSession ${details.councilSession}`;

      switch (type) {
        case 'application':
          this.emails.application = `Dear Members,\n\n${details.companyName} would like to sponsor ${details.quota} doctor from our association to attend the ${details.meeting} on ${details.meetingDate}. Please contact our council members if interested. Thank you.\n\nYours sincerely,\n${closing}`.replace(/\\n/g, '<br>');
      }
    },
    genpdf (details) {
      const vm = this;
      if (!vm.isTemplateReady) {
        alert('Templates not yet loaded. Try again.');
        return false;
      }

      if (!(vm.errors.application = allRequired(details, ['meeting', 'meetingDate', 'sponsorship', 'quota', 'deadline', 'councilMember', 'councilPost', 'openApplicationDate']))) {
        fillTemplate(vm.templates.application, 'application', details)
          .then(res => {
            vm.docs.application = {};
            res.pdf.then(pdf => {
              vm.docs.application.uri = pdfToUri(pdf);
              vm.docs.application.pdf = pdf;
              vm.docs.application.title = res.title;
            });
          });

        vm.genEmail('application', details);
      }

      if (!(vm.errors.nomination = allRequired(details, ['applicants', 'meeting', 'meetingDate', 'quota', 'sponsorship', 'deadline', 'resultAnnouncementDate', 'councilMember', 'councilPost']))) {
        fillTemplate(vm.templates.nomination, 'nomination', details)
          .then(res => {
            vm.docs.nomination = {};
            res.pdf.then(pdf => {
              vm.docs.nomination.uri = pdfToUri(pdf);
              vm.docs.nomination.pdf = pdf;
              vm.docs.nomination.title = res.title;
            });
          });
      }

      if (!(vm.errors.memo = allRequired(details, ['applicants', 'meeting', 'meetingDate', 'resultAnnouncementDate', 'councilMember', 'councilPost', 'companyContact', 'companyName']))) {
        fillTemplate(vm.templates.memo, 'memo', details)
          .then(res => {
            vm.docs.memo = {};
            res.pdf.then(pdf => {
              vm.docs.memo.uri = pdfToUri(pdf);
              vm.docs.memo.pdf = pdf;
              vm.docs.memo.title = res.title;
            });
          });
      }

      if (!(vm.errors.offer = allRequired(details, ['applicants', 'meeting', 'meetingDate', 'resultAnnouncementDate', 'councilPost', 'councilMember', 'sponsorship', 'companyName']))) {
        fillTemplate(vm.templates.offer, 'offer', details)
          .then(res => {
            vm.docs.offer = [];
            res.forEach(d => {
              d.uri = pdfToUri(d.pdf);
              vm.docs.offer.push(d);
            });
          });
      }

      if (!(vm.errors.annex = allRequired(details, ['applicants', 'meeting', 'meetingDate', 'resultAnnouncementDate', 'councilPost', 'councilMember', 'companyName']))) {
        fillTemplate(vm.templates.annex, 'annex', details).then(res => {
          vm.docs.annex = [];
          res.forEach(d => {
            d.uri = pdfToUri(d.pdf);
            vm.docs.annex.push(d);
          });

          /* for (let i = 0; i < details.applicants.length; i++) {
            vm.docs.annex[details.applicants[i].name] = uris[i];
          }*/
        });
      }
    }
  },
  created () {
    const vm = this;
    const names = ['application', 'nomination', 'offer', 'memo', 'annex'];
    Promise.all(names.map(name => loadPDF(name)))
      .then(data => {
        data.forEach((buffer, i) => { vm.templates[names[i]] = buffer; });
        vm.isTemplateReady = true;
      })
      .catch(e => {
        console.error(e.message);
        alert('Something went wrong!');
      });
  }
};
</script>

<style lang="scss" scoped>
iframe {
  border: 3px solid #efefef;
  margin-bottom: 0.8rem;
}

.doc-section {
  word-break: break-all;
}

strong {
  margin-right: 1rem;
}

blockquote {
  white-space: break-spaces;
  word-break: break-word;
  cursor: pointer;
}
</style>
