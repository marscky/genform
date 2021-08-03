<template>
  <header>
    <div>
      <h3>📝 genform</h3>
      <button class="button float-right" v-show="view === 'edit'">
        <label for="load-input">load input</label>
        <input id="load-input" type="file" accept="application/json" style="display: none" @change="loadConfig">
      </button>
      <button v-show="view === 'generate'"
              @click="saveConfig"
              class="float-right">save input</button>
   </div>
  </header>
  <main class="container">
    <field-edit v-show="view === 'edit'" @generate="onGenerate" ref="fieldsEdit"></field-edit>
    <generate v-show="view === 'generate'" @toEdit="toEdit" ref="generate"></generate>
  </main>
</template>

<script>
import 'normalize.css';
import 'milligram';
import downloadjs from 'downloadjs';
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
    loadConfig (e) {
      const vm = this;
      const reader = new FileReader();
      reader.onerror = function onError (err) {
        console.error(err);
        alert('Failed to load config file!');
      };
      reader.onload = function onLoad () {
        try {
          const obj = JSON.parse(reader.result);
          vm.$refs.fieldsEdit.loadConfig(obj);
        } catch (err) {
          console.error(err);
          alert('Error parsing config file!');
        }
      };
      reader.readAsText(e.target.files[0]);
    },
    saveConfig () {
      const obj = {};
      const len = localStorage.length;
      for (let i = 0; i < len; i++) {
        const key = localStorage.key(i);
        const item = localStorage.getItem(key);
        obj[key] = item;
      }
      if (!obj.meeting) {
        alert('Please go to edit and input name of meeting first!');
        return false;
      }
      const output = JSON.stringify(obj);
      downloadjs(output, `${obj.meeting}.json`, 'application/json');
    },
    toEdit () {
      this.view = 'edit';
    },
    onGenerate (fields) {
      this.$refs.generate.genpdf(fields);
      this.view = 'generate';
      window.scrollTo(0, 0);
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
$min-width: 34rem;

header {
  position: fixed;
  background: #fff;
  border-bottom: 2px solid #c4c4c4;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  overflow-x: scroll;

  > div {
    padding: 1rem 2rem;
    max-width: $content-width;
    min-width: $min-width;
    margin: 0 auto;

    > h3 {
      display: inline-block;
      margin-bottom: 0;
    }
  }
}

.button > label {
  display: unset;
  font-size: unset;
  font-weight: unset;
  margin-bottom: unset;
  cursor: pointer;
}

main.container {
  max-width: $content-width;
  min-width: $min-width;
  margin-top: 7.5rem;
  padding-bottom: 2rem;
}

hr {
  border-top-width: 0.3rem;
  border-color: #eee;
}
</style>
