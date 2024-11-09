<template>
  <div id="certifications">
    <h1>Certifications</h1>
    <div class="certification m-b-10"
      v-for="certification in certifications"
      :key="certification.title">
      <div class="head">
        <div class="title flex flex-col">
          <span>{{ certification.title }}</span>
          <span class="institute">
            <a :href="certification.institute.url" target="_blank">
              {{ certification.institute.name }}
            </a>
          </span>
          <span class="certification-id">
            id:
            <a :href="certification.certificateId.url" target="_blank">
              {{ certification.certificateId.name }}
            </a>
          </span>
        </div>
        <div class="dates flex flex-col">
          <span>{{ certification.dates.from }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()

const { certifications } = store.state.cv;
</script>

<style lang="scss" scoped>
#certifications {
  .certification {
    border-bottom: 1px solid #ffb400;
    padding: 10px 0;
    &:last-child {
      border-bottom: 0;
    }
    .head {
      position: relative;
      height: 50px;
      > .title {
        max-width: 80%;
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
