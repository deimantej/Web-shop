import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import Admin from './views/Admin.vue'
import Orders from './views/Orders.vue'
import UserAccount from './views/UserAccount.vue'
import AddNewItems from './components/admin/AddNewItems.vue'
import Login from './components/admin/Login.vue'
import Register from "./components/Register";
import CardForm from './components/CardForm.vue'


import firebase from 'firebase'
import 'firebase/firestore'


Vue.use(Router)
Vue.use(BootstrapVue)


const router = new Router({
  mode: 'history',
  /*scrollBehavior (to, from, savedPosition) {
    return { selector: 'btn' }
  },*/
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
        
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      
    },
    {
      path: '/cardform',
      name: 'cardform',
      component: CardForm,
      
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,

    },
    {
      path: '/useraccount',
      name: 'useraccount',
      component: UserAccount,

    },
    {
      path: '/addNew',
      name: 'addNew',
      component: AddNewItems,
  
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      
    }, 
    {
      path: '/register',
      name: 'register',
      component: Register,
      
    }, 
      
  
    {
      path: '*',
      redirect: '/'
    },
  ]
});



/*router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const { authorize } = to.meta;
  const currentUser = authenticationService.currentUserValue;

  if (authorize) {
      if (!currentUser) {
          // not logged in so redirect to login page with the return url
          return next({ path: '/login', query: { returnUrl: to.path } });
      }

      // check if route is restricted by role
      if (authorize.length && !authorize.includes(currentUser.role)) {
          // role not authorised so redirect to home page
          return next({ path: '/' });
      }
  }

  next();
}) */
 router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser.isAdmin) next('login');
  else next();

});  


/*
// Nav Guards
router.beforeEach((to, from, next) => {
  //Check for requiredAuth guard
  if(to.matched.some(record => record.meta.requiredAuth)) {
    // Check if NOT logged in
    if (!firebase.auth().currentUser){
      // Go to login
      next({
        path: 'login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to the route
      next();
    }
  } else if(to.matched.some(record => record.meta.requiredGuest)) {
      // Check if logged in
    if (firebase.auth().currentUser){
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to the route
      next();
    }
  } else {
    // Proceed to the route
    next();
  }
})
*/
export default router;
