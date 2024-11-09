<template>
  <div>
    <h1>Summary</h1>
    <p>{{ summary }}</p>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const { summary } = store.state.cv;
</script>

<style lang="scss" scoped>
h1 {
  border-bottom: 2px solid #ffb400;
}
p {
  text-align: justify;
}
</style>
