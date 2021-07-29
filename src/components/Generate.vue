<template>
  <div>
    <a class="button" @click="generate()">download all</a>
    <iframe :src="uris[0]"></iframe>
  </div>
</template>

<script>
import axios from 'axios';
import { PDFDocument } from 'pdf-lib';

export default {
  name: 'Generate',
  props: ['uris'],
  data () {
    return {
      docs: {},
      output: {}
    };
  },
  methods: {
    loadPDF (name) {
      const $vm = this;
      axios.get(`./templates/${name}.pdf`, { responseType: 'arraybuffer' })
        .then(response => PDFDocument.load(response.data))
        .then(doc => $vm.docs[name] = doc)
        .catch(error => console.error(error));
    },
    generate () {
    }
  },
  beforeMount () {
      }
};
</script>

<style lang="scss">
</style>
