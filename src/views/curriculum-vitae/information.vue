<template>
  <div id="information" class="flex p-10">
    <div class="initials flex flex-col m-r-25">
      <span class="name">{{ information.name }}</span>
      <span class="surname">{{ information.surname }}</span>
      <span class="role">{{ information.role }}</span>
    </div>
    <div class="role flex flex-col flex-justify-end"></div>
    <div class="contacts flex flex-col m-r-25">
      <span class="m-r-5">
        <font-awesome-icon class="icon" icon="map-marker-alt"/>
        {{ information.location }}
      </span>
      <span class="m-r-5">
        <font-awesome-icon class="icon" icon="phone"/>
        {{ information.phone }}
      </span>
      <span class="m-r-5">
        <font-awesome-icon class="icon" icon="at"/>
        {{ information.email }}
      </span>
    </div>
    <div class="links flex flex-col">
      <span class="margin-bottom-5" v-for="link in information.links" :key="link.url">
        <font-awesome-icon class="icon m-r-5" :icon="link.icon"/>
        <a target="_blank" :href="link.url">{{ link.name }}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'information',
  computed: {
    information() {
      return this.$store.state.cv.information;
    }
  }
};
</script>
<style lang="scss" scoped>
#information {
  border-bottom: 1px solid #d5d5d5;
  justify-content: space-between;
  .initials {
    font-size: xx-large;
    font-weight: bold;
    .role {
      color: #ffb400;
      font-style: italic;
      font-size: large;
    }
  }
  .icon {
    width: 16px;
  }
}
</style>
