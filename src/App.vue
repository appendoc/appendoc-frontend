<template>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
  mounted() {
    if (process.env.NODE_ENV == 'development') {
      const currentPhase: string = process.env.VUE_APP_PHASE
      console.log(`[주의] 이 애플리케이션은 현재 ${currentPhase} 빌드에요.`)
    }
  }
});
</script>

<style>
</style>
