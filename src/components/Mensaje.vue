<template>
  <section>
    <h3>{{texto}}</h3>
  </section>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      default: 'default 3',
    },
  },
};
</script>
