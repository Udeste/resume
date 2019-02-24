<template>
  <div class="work-experience">
    <div class="head">
      <div class="title flex flex-col">
        <span>{{ experience.title }}</span>
        <span class="company">
          <a :href="experience.company.url" target="_blank">{{ experience.company.name }}</a>
        </span>
      </div>
      <div class="dates flex flex-col">
        <span>{{ experience.dates.from }}</span>
        <span>{{ experience.dates.to }}</span>
      </div>
    </div>
    <p class="description">{{ experience.description }}</p>
    <span class="links" v-if="experience.links">
      <font-awesome-icon class="icon" icon="link"/>
      <a
        v-for="link in experience.links"
        :key="link.url"
        :href="link.url"
        target="_blank"
      >{{ link.name }}</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'WorkExperience',
  props: ['experience']
};
</script>
<style lang="scss" scoped>
.work-experience {
  margin-bottom: 10px;
  border-bottom: 1px solid #ffb400;
  padding: 10px 0;
  &:last-child {
    border-bottom: 0;
  }
  .head {
    position: relative;
    height: 50px;
    > .title {
      position: absolute;
      left: 0;
      color: black;
      font-weight: bold;
      .company {
        a {
          font-size: small;
          font-style: italic;
          color: #999;
        }
      }
    }
    > .dates {
      position: absolute;
      right: 0;
      text-align: right;
      font-size: small;
      font-style: italic;
      color: #999;
    }
  }
  .description {
    text-align: justify;
  }
  .links {
    .icon {
      color: #aaa;
      margin-right: 5px;
      font-size: 10.5px;
    }
    a {
      font-size: 10.5px;
      font-style: italic;
      color: #aaa;
      margin-right: 10px;
    }
  }
}
</style>
