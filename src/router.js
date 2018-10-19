import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Puchamon from './views/Puchamon.vue';
import pokemonFetch from './views/pkmFetch.vue';

Vue.use(Router, VueAxios, axios);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* FuncionDePokemon: "about" */ './views/About.vue'),
    },
    {
      path: '/puchamon',
      component: Puchamon,
    },
    {
      path: '/pokemonFetch',
      component: pokemonFetch,
    },
  ],
});
