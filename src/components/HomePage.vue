<template>
<v-parallax
      src="https://wallpaperaccess.com/full/889209.png"
      lazy-src="https://wallpaperaccess.com/full/889209.png"
      aspect-ratio="1"
      class="grey lighten-2"
    >
    <div class="text-center bannertxt">
      <h1 class=" white--text display-2 font-weight-medium" > <v-icon large color="white">mdi-airplane</v-icon> Cheap travel to the whole world</h1>
    </div>
    
      </v-parallax>
</template>

<script>

export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          img: require("@/assets/pictures/nature.jpg")
        },
        {
          img: require("@/assets/pictures/nature2.jpg")
        },
        {
          img: require("@/assets/pictures/nature3.jpg")
        },
      ],
      
    };
    
  },
  
};
</script>


<style>


</style>