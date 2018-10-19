<template>
  <div>
    {{pokeMensaje}}
  </div>
</template>
<script>
export default {
  props: {
    pokeMensaje: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
