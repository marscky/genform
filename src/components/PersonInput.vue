<template>
  <label :for="nameId">Name</label>
  <input
    type="text"
    :id="nameId"
    :value="modelValue['name']"
    @input="updateValue('name', $event.target.value)">

  <label :for="departmentId">Department</label>
  <input
    type="text"
    :id="departmentId"
    :value="modelValue['department']"
    @input="updateValue('department', $event.target.value)">

  <label :for="numberOfSuccessfulApplicationsId">Number of successful applications this calendar year</label>
  <input
    type="text"
    :id="numberOfSuccessfulApplicationsId"
    :value="modelValue['number-of-successful-applications']"
    @input="updateValue('number-of-successful-applications', $event.target.value)">
</template>

<script>
export default {
  name: 'PersonInput',
  emits: ['update:modelValue'],
  props: {
    index: {
      type: Number
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  computed: {
    nameId () {
      return `name-${this.index}`;
    },
    departmentId () {
      return `department-${this.index}`;
    },
    numberOfSuccessfulApplicationsId () {
      return `number-of-successful-applications-${this.index}`;
    }
  },
  methods: {
    updateValue (key, value) {
      this.$emit('update:modelValue', { ...this.modelValue, [key]: value });
    }
  }
};
</script>

<style lang="scss">
</style>
