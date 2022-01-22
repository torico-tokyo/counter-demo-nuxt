<template>
  <div class="relative flex items-center justify-center min-h-screen bg-gray-100">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-sm w-full mx-auto shadow-md bg-white text-center ">
      <div class="my-8">
        <div class="text-8xl">
          {{ count }}
        </div>
        <div>
          <button class="bg-blue-500 text-white rounded-full px-5 py-2 inline-flex items-center"
                  @click.prevent="countUp()">
            CountUp
          </button>
        </div>
      </div>
      <div class="my-8">
        <div class="mb-2">
          {{ countList }}
        </div>
        <div>
          <button class="bg-blue-500 text-white rounded-full px-5 py-2 inline-flex items-center"
                  @click.prevent="append()">
            Append
          </button>
        </div>
      </div>
      <div class="my-8">
        avg: {{ average }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { counterStore } from '~/store'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    count() {
      return counterStore.count
    },
    countList() {
      return counterStore.countList
    },
    average() {
      return counterStore.average
    }
  },
  methods: {
    countUp() {
      counterStore.countUp()
    },
    append() {
      counterStore.addToCountList()
    }
  }
})
</script>
