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

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    count() {
      return this.$accessor.counter.count
    },
    countList() {
      return this.$accessor.counter.countList
    },
    average() {
      return this.$accessor.counter.average
    }
  },
  methods: {
    countUp() {
      this.$accessor.counter.countUp()
    },
    append() {
      this.$accessor.counter.addToCountList()
    }
  }
})
</script>
