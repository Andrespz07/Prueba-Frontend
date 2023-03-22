<script setup>
import { onMounted, reactive } from 'vue'
import { getPodcasts } from '../stores/APIaxios.js'

const data = reactive({
  podcasts: []
})

onMounted(async () => {
  data.podcasts = await getPodcasts()
})
</script>

<template>
  <div>
    <div class="card" v-for="podcast in data.podcasts" :key="podcast.id.attributes['im:id']">
      <figure>
        <img :src="podcast.image" alt="Podcast image">
        <figcaption>{{ podcast.title.label }}</figcaption>
      </figure>
      <p>{{ podcast.summary.label }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
    
</style>