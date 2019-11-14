<template>
  <div>
    <v-navigation-drawer
      temporary
      absolute
      class="hidden-md-and-up"
      light
      color="white"
      v-model="drawer"
    >
      <div v-if="currentUser">
        <v-card tile  flat>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="avatar" />
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
                <v-btn text to="/useraccount">
                  <v-icon left>mdi-settings-outline</v-icon>Settings
                </v-btn>
                <v-btn text to="/menu">
                  <v-icon left color="red">mdi-heart</v-icon>Wishlist
                </v-btn>
                <v-btn text to="/login" @click.prevent="signOut()">
                  <v-icon left>mdi-logout</v-icon>Sign out
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </div>

      <v-list >
        <v-list-tile active-class="lighten-2 white--text">
                    <v-divider></v-divider>
          <v-list-item-action>
          <router-link tag="li" to="/">
            <v-btn text>
              <v-icon color="#a25054">home</v-icon>Home
            </v-btn>
          </router-link>

          <router-link tag="li" to="/menu">
            <v-btn text>
              <v-icon color="#a25054">mdi-airplane</v-icon>Trips
            </v-btn>
          </router-link>

          <router-link tag="li" to="/login">
            <v-btn text>
              <v-icon color="#a25054">info</v-icon>Login
            </v-btn>
          </router-link>
          <div v-if="currentUser">
            <router-link tag="li" v-if="currentUser.email.includes('admin')" to="/admin">
              <v-btn text>
                <v-icon color="#a25054">lock</v-icon>Admin
              </v-btn>
            </router-link>
            <router-link
              tag="li"
              v-if="currentUser.email.includes('admin')"
              to="/orders"
              class="complete--text"
            >
              <v-btn text>
                <v-icon color="#a25054">assignment</v-icon>Orders
              </v-btn>
            </router-link>
          </div>
          </v-list-item-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title to="/" class="headline">
        <span>Prestige</span>
        <span class="font-weight-light">Travel</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="hidden-sm-and-down" to="/">Home</v-btn>
      <v-btn text class="hidden-sm-and-down" to="/menu">trips</v-btn>
      <v-btn text class="hidden-sm-and-down" to="/login">Login</v-btn>
      <div v-if="currentUser">
        <v-btn
          text
          class="hidden-sm-and-down"
          v-if="currentUser.email.includes('admin')"
          to="/admin"
        >Admin</v-btn>
        <v-btn
          text
          class="hidden-sm-and-down"
          v-if="currentUser.email.includes('admin')"
          to="/orders"
        >Orders</v-btn>
      </div>

      <div class="text-center hidden-sm-and-down" style="z-index:3" v-if="currentUser">
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="100" offset-x>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">My account</v-btn>
          </template>

          <v-card tile>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                    alt="avatar"
                  />
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
                  <v-btn text to="/useraccount">
                    <v-icon left>mdi-settings-outline</v-icon>Settings
                  </v-btn>
                  <v-btn text to="/menu">
                    <v-icon left color="red">mdi-heart</v-icon>Wishlist
                  </v-btn>
                  <v-btn text to="/login" @click.prevent="signOut()">
                    <v-icon left>mdi-logout</v-icon>Sign out
                  </v-btn>
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
    /*isAdmin(){
      return currentUser().isAdmin.then(()=>{
        this.$route.path === '/orders'
      }) 
    }*/
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logged Out");
          this.$router.replace("/");
        })
        .catch(error => {});
    },
    beforeMount() {
      if (firebase.auth().currentUser) {
        this.user = JSON.parse(localStorage.getItem("user"));
      } else {
        this.user = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-btn:before {
  background-color: white;
}

li {list-style-type: none;}
</style>
