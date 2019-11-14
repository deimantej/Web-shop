<template>
  <span>
    <home-page></home-page>
    <home-info></home-info>
    <carousel></carousel>


  </span>
</template>

<script>
  import HomePage from '../components/HomePage';
  import HomeInfo from '../components/HomeInfo';
  import Carousel from '../components/Carousel';
  


export default {
  components: {
    HomePage,
    HomeInfo,
    Carousel
    

  },
};
</script>

<style lang="scss">

</style>
