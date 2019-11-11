<template>
  <v-container>
    <v-row>
      <v-col offset-md="1" md="5">
        <h1>orders</h1>
        <div class="pa-2" id="info">
            <v-row>
                <v-col cols="12" md="1" class="pa-2"> 
                    <p class="font-weight-bold body-1 pl-1 darkgrey--text">
                        INFO:
                    </p>
                </v-col>

                <v-col cols="12" md="5" class="pa-2 pl-5"> 
                    <v-row align="center">
                        <div id="status_box" class="complete"> COMPLETED </div>
                        <span class="font-weight-light caption pl-1"> Done </span>
                    </v-row>
                     <v-row align="center">
                        <div id="status_box" class="orange"> IN-PROGRESS </div>
                        <span class="font-weight-light caption pl-1"> Somebody is working on it </span>
                    </v-row>
                     <v-row align="center">
                        <div id="status_box" class="incomplete"> NOT STARTED </div>
                        <span class="font-weight-light caption pl-1"> Not started yet </span>
                    </v-row>
                </v-col>

                <v-col cols="12" md="6" class="pa-2"> 
                    <v-row>
                        <p class="font-weight-light caption pl-1"> Single-click to switch stage </p>
                    </v-row>



                </v-col>
            </v-row>
        </div>



            <div class="pa-2 mt-1" id="info">
               

                
            </div>
          <v-simple-table id="menu-table">
            <thead>
              <tr>
                <th></th>
                <th class="text-left" style="width:70%">Name of time</th>
                <th class="text-left" style="width:100px">Price</th>
                <th class="text-left" style="width:100px">Add to basket</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in menuItems" :key="item.name">
                <td id="td_menuitem_img">
                  <v-img v-bind:src="item.image"></v-img>
                </td>
                <td>
                  <span id="td_name">{{ item.name }}</span>
                  <br />
                  <span id="menu_item_description">{{ item.description }}</span>
                </td>
                <td>{{ item.calories }}</td>
                <td>
                  <v-btn small text v-on:click="addToBasket(item)">
                    <v-icon color="orange">add_box</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        
      </v-col>
      <v-col offset-md="1" md="4">
        <h1>Revenue</h1>
        <div class="pa-2" id="info">
            Revenue
          
          
        </div>
        <div class="pa-2 mt-1" id="info">
            completed orders
          
          
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


import {dbMenuAdd} from '../../firebase'

export default {
  data() {
    return {
      basketDump:[],
  
    }
  },
  beforeCreate(){
    this.$store.dispatch('setMenuItems')
  },
  methods: {
    addToBasket(item) {
  /*    if (this.basket.find(itemInArray => item.name === itemInArray.name)) {
        item = this.basket.find(itemInArray => item.name === itemInArray.name);
        this.increaseQtn(item);
      } else {
        this.basket.push({
          name: item.name,
          price: item.price,
          quantity: 1
        });
      } */
      this.basketDump.push({
          name: item.name,
          price: item.price,
          quantity: 1
        });
        this.$store.commit('addBasketItems', this.basketDump);
        this.basketDump = [];
    },
    increaseQtn(item) {
      item.quantity++;
    },
    decreaseQtn(item) {
      item.quantity--;

      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1);
      }
    }
  },
  computed: {
      basket() {
       // return this.$store.state.basketItems
       return this.$store.getters.getBasketItems
      },
      menuItems(){
        return this.$store.getters.getMenuItems
      },
      subTotal () {
          var subCost = 0;
          for( var items in this.basket) {
              var individualItem = this.basket[items];
              subCost += individualItem.quantity * individualItem.price;
          }
          return subCost
      },
      total () {
          var deliveryPrice = 10;
          var totalCost = this.subTotal
          return totalCost + deliveryPrice
      }
  }
};
</script>




<style lang="scss" scoped>
#status_box{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 90px;
    font-size: 12px;
    border-radius: 2px;
    margin: 5px 0;
    color: map-get($colorz, white);
    text-shadow: 1px 1px 1px #aaa;
}
</style>