/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
//===
import Vuetify from  "vuetify";
import Vuex from "vuex";
import VueRouter from "vue-router";

import router from "./routers";
import ValidationErrors from "./shared/components/ValidationErrors";
import storeDefinition from "./store";
//===

window.Vue = require('vue');
//===
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuetify);
//===

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//===
Vue.component("v-errors", ValidationErrors);
//===

//===
const store = new Vuex.Store(storeDefinition);
//===

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    vuetify: new Vuetify(),
    el: '#app',
    router,
    store,

    components: {   //local registration
    	//'index': Index,
  	},

    async beforeCreate() {
        this.$store.dispatch('loadStoredState');
        console.log("hello----");
        this.$store.dispatch('loadUser');

        //the following code is for testing
        /*
        await axios.get('sanctum/csrf-cookie');
        await axios.post("/login", {
        	email: 'howell.reinger@example.net',
        	password: 'password'
        });
        await axios.get("/user");
        */
    },

});
