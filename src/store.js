import Vue from 'vue'
import Vuex from 'vuex'
import { dbMenuAdd, dbOrders} from '../firebase'
import 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketItems: [],
    menuItems:[],
    orderItems: [],
/*    wishlistItems: [], */
    currentUser: null
  },
  mutations: {
    addCheckoutItem: (state, basketItems) => {
      dbOrders.add({
        orderNumber:2,
        status: "not started",
        orderLines: state.basketItems
      })
    },
    addBasketItems: (state, basketItems) => {
      if (basketItems instanceof Array) {

      
        basketItems.forEach(item => {
          if (state.basketItems.find(itemInArray => item.name === itemInArray.name)) {
            item = state.basketItems.find(itemInArray => item.name === itemInArray.name);
            item.quantity++;
          } else {
            state.basketItems.push({
              name: item.name,
              price: item.price,
              quantity: 1
            })
          }
        })
      }
    },
/*    addWishlistItems: (state, wishlistItems) => {
      if (wishlistItems instanceof Array) {

      
        wishlistItems.forEach(item => {
          if (state.wishlistItems.find(itemInArray => item.name === itemInArray.name)) {
            item = state.wishlistItems.find(itemInArray => item.name === itemInArray.name);
            item.quantity++;
          } else {
            state.wishlistItems.push({
              name: item.name,
              price: item.price,
              quantity: 1
            })
          }
        })
      }
    }, */
    userStatus (state, user) {
      if (user) {
        state.currentUser = user
      }
      else{
        state.currentUser = null
      }
    },
    setMenuItems: state => {
      let menuItems =[]

      dbMenuAdd.onSnapshot((snapshotItems) => {
        menuItems = []
        snapshotItems.forEach((doc) => {
          var menuItemData = doc.data();
          menuItems.push({
            ...menuItemData,
            id: doc.id
          })
        })
        state.menuItems = menuItems
      }
    )},
    setOrderItems: state => {
      let orderItems =[]

      dbOrders.onSnapshot((snapshotItems) => {
        orderItems = []
        snapshotItems.forEach((doc) => {
          var orderItemData = doc.data();
          orderItems.push({
            ...orderItemData,
            id: doc.id
          })
        })
        state.orderItems = orderItems
      }
    )}
  },
    

  actions: {
    setCheckoutItem(context) {
      context.commit('addCheckoutItem')
    },
    setUser(context, user) {
      context.commit('userStatus', user)
    },
    setMenuItems: context => {
      context.commit('setMenuItems')
    },
    setOrderItems: context => {
      context.commit('setOrderItems')
    }
  },
  getters: {
    getBasketItems: state => state.basketItems,
    currentUser: state => state.currentUser,
    getMenuItems: state => state.menuItems,
    getOrderItems: state => state.orderItems,
  /*  getWishlistItems: state => state.wishlistItems */
  },
})
