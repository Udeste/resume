<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@use './styles/flex';
@use './styles/margins';
@use './styles/paddings';

#app {
  font-family: 'Calibri', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  font-weight: bold;
  color: #2c3e50;
  &.router-link-exact-active {
    color: #42b983;
  }
}
h1 {
  border-bottom: 2px solid #ffb400;
}
</style>
