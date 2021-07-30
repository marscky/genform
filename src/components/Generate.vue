<template>
  <section>
    <a class="button button-outline" @click="$emit('toEdit')">edit again</a>
    <section v-for="(name, i) in ['application', 'nomination', 'memo', 'offer', 'annex']" :key="i">
      <h4 class="heading">{{ name }}</h4>
      <div v-if="errors[name]">
        <p>Missing fields: <code v-for="param in errors[name]" :key="param">{{param}}</code></p>
      </div>
      <template v-else-if="name === 'application' || name === 'nomination' || name === 'memo'">
        <a class="button"
          :download="docs[name] && docs[name].title + '.pdf'"
          :href="docs[name] && docs[name].uri">download</a>
        <iframe width="100%" height="300px" :src="docs[name] && docs[name].uri"></iframe>
      </template>
      <template v-else>
        <div v-for="(item, key) in docs[name]" :key="key">
          <strong>Dr. {{ item.applicant }} </strong>
          <a class="button"
            :download="item.title + '.pdf'"
            :href="item.uri">download</a>
          <iframe width="100%" height="300px" :src="item.uri"></iframe>
        </div>
      </template>
      <hr>
    </section>
  </section>
</template>

<script>
import { loadPDF, fillTemplate } from '../utils/pdf';
import allRequired from '../utils/allrequired';

export default {
  name: 'Generate',
  props: [],
  data () {
    return {
      isTemplateReady: false,
      templates: {},
      docs: {},
      errors: {}
    };
  },
  methods: {
    /* eslint-disable consistent-return */
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
            res.uri.then(uri => {
              vm.docs.application.uri = uri;
              vm.docs.application.title = res.title;
            });
          });
      }

      if (!(vm.errors.nomination = allRequired(details, ['applicants', 'meeting', 'meetingDate', 'quota', 'sponsorship', 'deadline', 'resultAnnouncementDate', 'councilMember', 'councilPost']))) {
        fillTemplate(vm.templates.nomination, 'nomination', details)
          .then(res => {
            vm.docs.nomination = {};
            res.uri.then(uri => {
              vm.docs.nomination.uri = uri;
              vm.docs.nomination.title = res.title;
            });
          });
      }

      if (!(vm.errors.memo = allRequired(details, ['applicants', 'meeting', 'meetingDate', 'resultAnnouncementDate', 'councilMember', 'councilPost', 'companyContact', 'companyName']))) {
        fillTemplate(vm.templates.memo, 'memo', details)
          .then(res => {
            vm.docs.memo = {};
            res.uri.then(uri => {
              vm.docs.memo.uri = uri;
              vm.docs.memo.title = res.title;
            });
          });
      }

      if (!(vm.errors.offer = allRequired(details, ['applicants', 'meeting', 'meetingDate', 'resultAnnouncementDate', 'councilPost', 'councilMember', 'sponsorship', 'companyName']))) {
        fillTemplate(vm.templates.offer, 'offer', details)
          .then(res => {
            vm.docs.offer = [];
            res.forEach(d => { vm.docs.offer.push(d); });
          });
      }

      if (!(vm.errors.annex = allRequired(details, ['applicants', 'meeting', 'meetingDate', 'resultAnnouncementDate', 'councilPost', 'councilMember', 'companyName']))) {
        fillTemplate(vm.templates.annex, 'annex', details).then(uris => {
          vm.docs.annex = {};
          for (let i = 0; i < details.applicants.length; i++) {
            vm.docs.annex[details.applicants[i].name] = uris[i];
          }
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

p {
  overflow-wrap: anywhere;
}

strong {
  margin-right: 1rem;
}
</style>
