<template>
  <header>
    <div>
      <h3>📝 genform</h3>
      <nav>
        <a @click="view = 'edit'" :class="{ 'is-shown': view === 'edit' }">edit</a>
        <a @click="view = 'generate'" :class="{ 'is-shown': view === 'generate' }">generate</a>
      </nav>
    </div>
  </header>
  <main class="container">
    <params v-on:generate="generate" v-show="view === 'edit'"></params>
    <generate :uris="uris" v-show="view === 'generate'"></generate>
  </main>
</template>

<script>
import 'normalize.css';
import 'milligram';
import Params from './components/Params.vue';
import Generate from './components/Generate.vue';
import genpdf from './genpdf.js';

export default {
  name: 'App',
  data () {
    return {
      view: 'edit',
      uris: []
    };
  },
  methods: {
    generate (e) {
      const $vm = this;
      const params = { ...e['basics'], quota: e.quota, applicants: e.persons};
      genpdf(params).then(uri => {
        $vm.uris = [uri];
      });
    }
  },
  components: {
    Params,
    Generate
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

main.container {
  max-width: 76rem;
  margin-top: 14rem;
  padding-bottom: 2rem;
}

header {
  position: fixed;
  background: #fff;
  box-shadow: 0 4px 10px 4px #b5b5b530;
  height: 12rem;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99999;

  > div {
    padding: 2rem 20px;
    width: 76rem;
    margin: 0 auto;
  }

  nav > a {
    display: inline-block;
    border-bottom: 2px solid transparent;
    margin-right: 1.5rem;
    padding-bottom: 0.5rem;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      border-bottom-color: #ddd;
    }

    &.is-shown {
      font-weight: 700;
    }
  }
}

hr {
  border-top-width: 0.3rem;
  border-color: #eee;
}
</style>
