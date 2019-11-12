<template>
  <v-app id="app">
    <navigation />
    


        <router-view></router-view>
   


    
  </v-app>
</template>

<script>

import Navigation from './components/Navigation.vue';

  export default {
     components: {
     Navigation,
  },
    name: 'App',
    props: {
      source: String,
    },
    
  }
</script>

<style lang="scss">
main{
  background-color: map-get($colorz, white );
  background-size: cover;

}

</style>