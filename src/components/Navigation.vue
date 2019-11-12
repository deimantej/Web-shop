<template>
  
  <div>
    <v-navigation-drawer temporary absolute class="hidden-md-and-up" color="primary" v-model="drawer" >

      <!--This is a comment. Comments are not displayed in the browser
      <div v-if="currentUser">
        <v-card class="mx-auto" max-width="200" tile>
          <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar class="profile" color="grey" size="65" tile>
                  <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">{{ currentUser.email }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </div>-->

     <v-list>
       <v-list-tile active-class="pink lighten-2 white--text">
         <router-link tag="li" to="/">
          <v-icon color="orange">home</v-icon>Home
        </router-link>
        <router-link tag="li" to="/menu">
          <v-icon color="orange">restaurant_menu</v-icon>Menu
        </router-link>

        <router-link tag="li" to="/about">
          <v-icon color="inprogress">info</v-icon>About
        </router-link>
        <router-link tag="li" to="/login">
          <v-icon color="inprogress">info</v-icon>Login
        </router-link>
        <router-link tag="li" to="/admin">
          <v-icon color="inprogress">lock</v-icon>Admin
        </router-link>
        <router-link tag="li" v-if="currentUser" to="/orders" class="complete--text">
          <v-icon color="complete">assignment</v-icon>Orders
        </router-link>
       </v-list-tile>
     </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title to="/" class="headline">

        <span>Bagels BY</span>
        <span class="font-weight-light">Jerry McBagel</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="hidden-sm-and-down"  to="/">Home</v-btn>
      <v-btn text class="hidden-sm-and-down" to="/about">About</v-btn>
      <v-btn text class="hidden-sm-and-down" to="/menu">Menu</v-btn>
      <v-btn text class="hidden-sm-and-down" to="/login">Login</v-btn>
      <v-btn text class="hidden-sm-and-down" v-if="currentUser" to="/admin">Admin</v-btn>
      <v-btn text class="hidden-sm-and-down" v-if="currentUser" to="/orders">Orders</v-btn>
      

      <div class="text-center hidden-sm-and-down " v-if="currentUser">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="100"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
        >
          My account
        </v-btn>
      </template>

      <v-card tile>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="avatar">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ currentUser.email }}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>

                    <v-btn  text to="/menu">
                    <v-icon left >mdi-settings-outline</v-icon>Settings</v-btn>
                    <v-btn text to="/menu">
                    <v-icon left color="red" >mdi-heart</v-icon>Wishlist</v-btn>
                    <v-btn text to="/login" @click.prevent="signOut()">
                    <v-icon left >mdi-logout</v-icon>Sign out</v-btn>

           </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>


        

    </v-toolbar>
  </div>
  
</template>

<script>
import { db } from "../../firebase";

import firebase from "firebase";
import "firebase/firestore";
import store from "../store.js";
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch("setUser", user);
  } else {
    store.dispatch("setUser", null);
  }
});
export default {
  data: () => ({
    
    drawer: null
  }),
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    signOut() {
        firebase.auth().signOut().then(() => {
          alert('Logged Out');
          this.$router.replace('/')
        }).catch(error => {
          
        })
      }
  }
  
};

</script>

<style lang="scss" scoped>


.v-btn:before{
background-color: white;
}
</style>