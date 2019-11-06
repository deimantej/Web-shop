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
.col h1 {
  @include infobox_mixin(
    5px,
    map-get($colorz, white),
    10px,
    5px,
    map-get($colorz, white)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: right;
}
.col:last-child h1 {
  text-align: left;
}
#info {
  background-color: white;
}
</style>