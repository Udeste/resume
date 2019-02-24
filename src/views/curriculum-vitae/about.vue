<template>
  <div>
    <h1>about</h1>
    <p>{{ about }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    about() {
      return this.$store.state.cv.information.about;
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  border-bottom: 2px solid #ffb400;
}
p {
  text-align: justify;
}
</style>
