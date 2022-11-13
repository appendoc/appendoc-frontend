<template>
  <a href={{href}}>
    {{ iconName }}
  </a>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    href: String,
    iconName: String,
  }
})
</script>

<style scoped>

</style>
