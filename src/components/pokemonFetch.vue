<template>
  <div>
    {{pokeMensaje[pokemon].name}}
    <!-- <img :src='imgUrl' /> -->
  </div>
</template>
<script>
import axios from 'axios';

export default {
  props: {
    pokeMensaje: {
      type: Array,
      default: () => [],
    },
    pokemon: {
      default: 0,
    },
  },
  /* computed: {
    imgUrl: {
      default: axios.get(pokeMensaje[1]).then((pedido) => {
        this.imgUrl = pedido.sprites.front_default;
      }),
    },
  }, */
};
</script>
