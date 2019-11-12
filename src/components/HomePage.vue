<template>
<v-content fluid>
    <v-container pa-0 fluid fill-height text-xs-center id="header-carousel">  
        <v-carousel :show-arrows="false" hide-delimiters cycle>
            <v-carousel-item
                v-for="(item, i) in items"
                :src="item.img"
                :key="i"
                reverse-transition="fade"
                transition="fade"
            >
                <v-container fill-height>
                    <v-layout row wrap align-center>
                        <v-flex xs12 d-block>
                        <h3 class="white--text title1" style="font-size:34px;">
                            Pick out the best trip ever
                            <br>perfect destinations
                        </h3>
                        <v-btn light color="white" to="/menu" class="black--text mainbtn">Start shopping</v-btn>
                        <v-btn light color="white" to="/about" class="black--text mainbtn">Read more</v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-carousel-item>
        </v-carousel>
  </v-container>
    </v-content>
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