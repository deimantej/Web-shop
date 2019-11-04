<template>
  <v-app id="app">
    <navigation />
    
    <v-content>
      <v-container>
        <router-view></router-view>
   
      </v-container>
    </v-content>
    
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
  background-image: url('./assets/bagels.jpg');
  background-size: cover;
}

</style>