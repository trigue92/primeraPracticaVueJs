<template>
  <div>
    <pokemon-fetch :pokeMensaje='pokemonFetch' :pokemon=0 />
    <pokemon-fetch :pokeMensaje='pokemonFetch' :pokemon=1 />
    <pokemon-fetch :pokeMensaje='pokemonFetch' :pokemon=2 />
  </div>
</template>

<script>
import pokemonFetch from '@/components/pokemonFetch.vue';
import axios from 'axios';

export default {
  components: {
    pokemonFetch,
  },
  data() {
    return {
      pokemonFetch: axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then((pedido) => {
          this.pokemonFetch = pedido.data.results;
        }),
    };
  },
};
</script>

