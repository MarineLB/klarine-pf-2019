<template>
  <section class="container">
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
