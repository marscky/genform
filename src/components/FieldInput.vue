<template>
  <label :for="fieldName">{{ fieldDisplayName }}</label>
  <select v-if="fieldType === 'select'"
    :id="fieldName"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs">
    <option v-for="(option, i) in fieldOptions" :key="i">{{ option }}</option>
  </select>
  <input v-else
    :type="fieldType"
    :id="fieldName"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs">
</template>

<script>
export default {
  name: 'FieldInput',
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: ['modelValue', 'fieldType', 'fieldName', 'fieldDisplayName', 'fieldOptions'],
  data () {
    return {
    };
  }
};
</script>

<style lang="scss">
</style>
