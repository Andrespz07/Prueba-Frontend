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
  <div class="cards">
    <div class="card" v-for="podcast in data.podcasts" :key="podcast.id.attributes['im:id']">
      <figure>
        <img :src="podcast.image" alt="Podcast image">
        <figcaption>{{ podcast["im:name"].label }}</figcaption>
      </figure>
      <p>Author: {{ podcast["im:artist"].label}}</p>
    </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    figure {
      margin: 0;
      text-align: center;
      
      img {
        width: 10vw;
        height: auto;
      }
    }
    
    p {
      margin: 10px 0;
      text-align: center;
    }
  }
}

    
</style>