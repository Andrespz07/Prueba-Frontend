<script setup>
import { onMounted, reactive } from 'vue'
import { getPodcasts } from '../stores/APIaxios.js'
import Header from '../components/Header.vue'
import CardHome from '../components/CardHome.vue'

onMounted(async () => {
  const podcasts = reactive(await getPodcasts())
  console.log(podcasts)
})
</script>

<template>
<Header>

</Header>

<CardHome></CardHome>

</template>

<style lang="scss" scoped>
</style>