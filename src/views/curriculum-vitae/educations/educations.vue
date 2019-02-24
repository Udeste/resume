<template>
  <div id="educations">
    <h1>education</h1>
    <div class="education m-b-10" v-for="education in educations" :key="education.title">
      <div class="head">
        <div class="title flex flex-column">
          <span>{{ education.title }}</span>
          <span class="institute">
            <a :href="education.institute.url" target="_blank">{{ education.institute.name }}</a>
          </span>
        </div>
        <div class="dates flex flex-column">
          <span>{{ education.dates.from }}</span>
          <span>{{ education.dates.to }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Educations',
  components: {},
  computed: {
    educations() {
      return this.$store.state.cv.educations;
    }
  }
};
</script>
<style lang="scss" scoped>
#educations {
  .education {
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
        .institute {
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
  }
}
</style>
