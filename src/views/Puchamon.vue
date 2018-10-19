<template>
  <section>
    <h1 v-if="condicion">{{numero}}</h1>
    <mensaje
      v-for="(item, key) in lista"
      :key="key"
      :texto="item.nombre"
    />
  </section>
</template>

<script>
import Mensaje from '@/components/Mensaje.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Mensaje,
  },
  computed: {
    ...mapState(['numero']),
  },
  data() {
    return {
      condicion: true,
      lista: [{ nombre: 'trigue' }, { nombre: 'compa' }, { nombre: 'luigi' }],
    };
  },
};
</script>

