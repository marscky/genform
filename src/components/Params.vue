<template>
  <div>
    <p>Fill in the details below and generate the forms!</p>
    <param-input v-model="basics"></param-input>
    <hr>
    <div class="quota">
      <strong>Quota</strong>
      <button class="button button-clear" type="button" @click="updateQuota(-1)">
        <i data-feather="minus-circle"></i>
      </button>
      <span>{{ quota }}</span>
      <button class="button button-clear" type="button" @click="updateQuota(1)">
        <i data-feather="plus-circle"></i>
      </button>
    </div>
    <div v-for="(person, i) in persons" :key="i">
      <hr>
      <person-input :index="i" v-model="persons[i]"></person-input>
    </div>
    <hr>
    <a class="button" @click="generate">generate</a>
  </div>
</template>

<script>
/* reference: https://www.drewtown.dev/post/using-vues-v-model-with-objects */
import feather from 'feather-icons';
import ParamInput from './ParamInput.vue';
import PersonInput from './PersonInput.vue';

export default {
  name: 'Params',
  mounted () {
    feather.replace();
  },
  emits: ['generate'],
  data () {
    return {
      basics: {},
      quota: 1,
      persons: [{}]
    };
  },
  methods: {
    updateQuota (delta) {
      if (delta === 1) {
        this.persons.push({});
      } else {
        const newQuota = this.quota + delta;
        const persons = this.persons;

        if (newQuota === 0) {
          return false;
        }

        for (let i = persons.length - 1; i >= newQuota; i--) {
          for (const item in persons[i]) {
            if (item !== undefined) {
              alert('Existing data\nClear out the fields first.');
              return false;
            }
          }
        }

        this.persons.splice(newQuota, -delta);
      }

      this.quota = this.persons.length;
      return true;
    },
    generate () {
      this.$emit('generate', {
        basics: this.basics,
        quota: this.quota,
        persons: this.persons
      });
    }
  },
  components: {
    ParamInput,
    PersonInput
  }
};
</script>

<style lang="scss">
.quota {
  > * {
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
    vertical-align: bottom;
  }

  .button {
    margin-bottom: 0;
  }

  .feather {
    height: 2rem;
  }
}
</style>
