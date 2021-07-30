<template>
  <section>
    <a class="button button-outline" @click="$emit('toEdit')">edit again</a>
    <section v-for="(name, i) in ['application', 'nomination', 'memo', 'offer', 'annex']" :key="i">
      <h4 class="heading">{{ name }}</h4>
      <div v-if="errors[name]">
        <p>Missing fields: <code v-for="param in errors[name]" :key="param">{{param}}</code></p>
      </div>
      <iframe
        v-else-if="name === 'application' || name === 'nomination' || name === 'memo'"
        width="100%" height="300px" :src="docs[name]"></iframe>
      <template v-else>
        <div v-for="(uri, key) in docs[name]" :key="key">
          <strong>Dr. {{ key }} </strong>
          <iframe width="100%" height="300px" :src="uri"></iframe>
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

      if (!(vm.errors.application = allRequired(details, ['meeting', 'meetingDate', 'quota', 'deadline', 'councilMember', 'councilPost', 'openApplicationDate']))) {
        fillTemplate(vm.templates.application, 'application', details).then(uri => { vm.docs.application = uri; });
      }

      if (!(vm.errors.nomination = allRequired(details, ['applicants', 'meeting', 'meetingDate', 'quota', 'deadline', 'resultAnnouncementDate', 'councilMember', 'councilPost']))) {
        fillTemplate(vm.templates.nomination, 'nomination', details).then(uri => { vm.docs.nomination = uri; });
      }

      if (!(vm.errors.memo = allRequired(details, ['applicants', 'meeting', 'meetingDate', 'resultAnnouncementDate', 'councilMember', 'councilPost', 'companyContact', 'companyName']))) {
        fillTemplate(vm.templates.memo, 'memo', details).then(uri => { vm.docs.memo = uri; });
      }

      if (!(vm.errors.offer = allRequired(details, ['applicants', 'meeting', 'meetingDate', 'resultAnnouncementDate', 'councilPost', 'councilMember', 'sponsorship', 'companyName']))) {
        fillTemplate(vm.templates.offer, 'offer', details).then(uris => {
          vm.docs.offer = {};
          for (let i = 0; i < details.applicants.length; i++) {
            vm.docs.offer[details.applicants[i].name] = uris[i];
          }
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
}

p {
  overflow-wrap: anywhere;
}
</style>
