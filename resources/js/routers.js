
// Define route components.
// These can be imported from other files
import Vuetify from  "../js/plugins/vuetify";
import VueRouter from 'vue-router';

//import Bookables from "./components/Bookables/Bookables";
//import Basket from "./components/basket/Basket";

import About from "./components/views/About";
import Home from "./components/views/Home";


//import Admin from "./components/auth/Admin";

// Define some routes, each route should map to a component.
const routes = [
/*
  //{ path: '/', component: Home, name: "main"},
  { path: '/', component: Bookables, name: "home"},
  { path: '/basket', component: Basket, name: "basket"},
  //{ path: '/admin', component: Admin, name: "admin"},
*/
    { path: '/auth/login/:pageId', component: require("./components/auth/Login").default, name: "login"},
    { path: '/auth/login/:pageId', component: require("./components/auth/Login").default, name: "register"},
    { path: '/home', component: Home, name: "home"},
    { path: '/about', component: About, name: "about"},
];

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes,			// short for `routes: routes
  mode: 'history',
});

export default router;
