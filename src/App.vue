<template>
  <header>
    <div>
      <h3>📝 genform</h3>
   </div>
  </header>
  <main class="container">
    <field-edit v-show="view === 'edit'" @generate="onGenerate"></field-edit>
    <generate v-show="view === 'generate'" @toEdit="toEdit" ref="generate"></generate>
  </main>
</template>

<script>
import 'normalize.css';
import 'milligram';
import FieldEdit from './components/FieldEdit.vue';
import Generate from './components/Generate.vue';

export default {
  name: 'App',
  data () {
    return {
      details: {},
      view: 'edit',
      uris: []
    };
  },
  methods: {
    toEdit () {
      this.view = 'edit';
    },
    onGenerate (fields) {
      this.$refs.generate.genpdf(fields);
      this.view = 'generate';
    }
  },
  components: {
    FieldEdit,
    Generate
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

$content-width: 76rem;

header {
  position: fixed;
  background: #fff;
  border-bottom: 2px solid #c4c4c4;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99999;

  > div {
    padding: 1rem 2rem;
    max-width: $content-width;
    margin: 0 auto;

    > h3 {
      margin-bottom: 0;
    }
  }
}

main.container {
  max-width: $content-width;
  margin-top: 7.5rem;
  padding-bottom: 2rem;
}

hr {
  border-top-width: 0.3rem;
  border-color: #eee;
}
</style>
