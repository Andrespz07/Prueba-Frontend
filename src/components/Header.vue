<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <p>Podcaster</p>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

header{
    margin: auto;
    border-bottom: 1px solid $Grey;
    width: 99%;
p{
    color: $Blue;
    font-weight: bold;
    margin-bottom: 1vh;
    font-size: 1.1rem;
}}
</style>