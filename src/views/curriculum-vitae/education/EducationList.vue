<template>
  <div id="educations">
    <h1>Education</h1>
    <div class="education m-b-10" v-for="educationEntry in education" :key="educationEntry.title">
      <div class="head">
        <div class="title flex flex-column">
          <span>{{ educationEntry.title }}</span>
          <span class="institute">
            <a :href="educationEntry.institute.url" target="_blank">{{ educationEntry.institute.name }}</a>
          </span>
        </div>
        <div class="dates flex flex-column">
          <span>{{ educationEntry.dates.from }}</span>
          <span>{{ educationEntry.dates.to }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()

const { education } = store.state.cv;
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
