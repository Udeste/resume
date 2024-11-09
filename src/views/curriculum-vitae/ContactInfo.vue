<template>
  <div id="contactInfo" class="flex p-10">
    <div class="initials flex flex-col m-r-25">
      <span class="name">{{ contactInfo.name }}</span>
      <span class="surname">{{ contactInfo.surname }}</span>
      <span class="role">{{ contactInfo.role }}</span>
    </div>
    <div class="role flex flex-col flex-justify-end"></div>
    <div class="contacts flex flex-col m-r-25">
      <span class="m-r-5">
        <FontAwesomeIcon class="icon" icon="map-marker-alt"/>
        {{ contactInfo.location }}
      </span>
      <span class="m-r-5">
        <FontAwesomeIcon class="icon" icon="phone"/>
        {{ contactInfo.phone }}
      </span>
      <span class="m-r-5">
        <FontAwesomeIcon class="icon" icon="at"/>
        {{ contactInfo.email }}
      </span>
    </div>
    <div class="links flex flex-col">
      <span class="margin-bottom-5" v-for="link in contactInfo.links" :key="link.url">
        <FontAwesomeIcon class="icon m-r-5" :icon="link.icon"/>
        <a target="_blank" :href="link.url">{{ link.name }}</a>
      </span>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const store = useStore()

const { contactInfo } = store.state.cv;
</script>

<style lang="scss" scoped>
#contactInfo {
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
