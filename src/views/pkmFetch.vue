<template>
  <div>
    <button @click='getData()'>
      fetch
    </button>
    <pokemon-fetch :pokeMensaje='pokemonFetch'/>
    <pokemon-fetch :pokeMensaje='pokemonFetch'/>
    <pokemon-fetch :pokeMensaje='pokemonFetch'/>
  </div>
</template>

<script>
import pokemonFetch from '@/components/pokemonFetch.vue';
import axios from 'axios';

export default {
  methods: {
    getData() {
      axios.get('https://pokeapi.co/api/v2/pokemon/').then((pedido) => {
        this.pokemonFetch = pedido.data.reluts;
      });
    },
  },
  components: {
    pokemonFetch,
  },
  data() {
    return {
      pokemonFetch: [],
      pokeName: '',
      pokeImage: [],
    };
  },
};
</script>

