<template>
  <label for="conference-name">Conference name</label>
  <input
    type="text"
    id="conference-name"
    :value="modelValue['conference-name']"
    @input="updateValue('conference-name', $event.target.value)">

  <label for="conference-date">Conference date</label>
  <input
    type="text"
    id="conference-date"
    :value="modelValue['conference-date']"
    @input="updateValue('conference-date', $event.target.value)">

  <label for="conference-cost">Conference cost</label>
  <input
    type="text"
    id="conference-cost"
    :value="modelValue['conference-cost']"
    @input="updateValue('conference-cost', $event.target.value)">

  <label for="open-application-date">Open application date</label>
  <input
    type="date"
    id="open-application-date"
    :value="modelValue['open-application-date']"
    @input="updateValue('open-application-date', $event.target.value)">

  <label for="deadline">Deadline</label>
  <input
    type="date"
    id="deadline"
    :value="modelValue['deadline']"
    @input="updateValue('deadline', $event.target.value)">

  <label for="result-announcement-date">Result announcement date</label>
  <input
    type="date"
    id="result-announcement-date"
    :value="modelValue['result-announcement-date']"
    @input="updateValue('result-announcement-date', $event.target.value)">

  <label for="council-member">Council member</label>
  <input
    type="text"
    id="council-member"
    :value="modelValue['council-member']"
    @input="updateValue('council-member', $event.target.value)">

  <label for="council-post">Council post</label>
  <input
    type="text"
    id="council-post"
    :value="modelValue['council-post']"
    @input="updateValue('council-post', $event.target.value)">


  <label for="session-year">Session year</label>
  <input
    type="text"
    id="session-year"
    :value="modelValue['session-year']"
    @input="updateValue('session-year', $event.target.value)">

  <label for="sponsoring-company">Sponsoring company</label>
  <input
    type="text"
    id="sponsoring-company"
    :value="modelValue['sponsoring-company']"
    @input="updateValue('sponsoring-company', $event.target.value)">

  <label for="sponsoring-company-contact">Session year</label>
  <input
    type="text"
    id="sponsoring-company-contact"
    :value="modelValue['sponsoring-company-contact']"
    @input="updateValue('sponsoring-company-contact', $event.target.value)">
</template>

<script>
export default {
  name: 'ParamInput',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Object,
      required: true
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
