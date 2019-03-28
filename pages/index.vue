<template>
  <section class="index">
    hello
  </section>
</template>

<script>
  export default {
    async fetch({ store, params }) {
      if (!store.state.homeDocument) {
        await store.dispatch('getHomeData')
      }
      return ''
    },
  }
</script>
<style>
  .index{
    visibility: hidden;
    width: 0;
    overflow: hidden;
  }
</style>
