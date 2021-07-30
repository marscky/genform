<template>
  <div>
    <a class="button button-outline" @click="$emit('toEdit')">edit again</a>
    <section v-for="(name, i) in ['application', 'nomination', 'memo']" :key="i">
      <h4 class="heading">{{ name }}</h4>
      <iframe width="100%" height="300px" :src="docs[name]"></iframe>
      <hr>
    </section>
  </div>
</template>

<script>
import { loadPDF, fillTemplate } from '../utils/pdf';

export default {
  name: 'Generate',
  props: [],
  data () {
    return {
      isTemplateReady: false,
      templates: {},
      docs: {}
    };
  },
  methods: {
    genpdf (details) {
      const vm = this;
      if (!vm.isTemplateReady) {
        alert('Templates not yet loaded. Try again.');
        return false;
      }

      fillTemplate(vm.templates.application, 'application', details).then(uri => { vm.docs.application = uri; });
      fillTemplate(vm.templates.nomination, 'nomination', details).then(uri => { vm.docs.nomination = uri; });
      fillTemplate(vm.templates.memo, 'memo', details).then(uri => { vm.docs.memo = uri; });
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

<style lang="scss">
iframe {
  border: 3px solid #efefef;
}
</style>
