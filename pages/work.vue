<template>
  <div class="page page-work">
    work page content
  </div>
</template>
<script>
export default {
  transition: {
    name: 'work',
    css: false
  },
  async fetch({ store, params }) {
    if (!store.state.homeDocument) {
      await store.dispatch('getHomeData')
    }
    return ''
  },
  computed: {
    works() {
      return false
    }
  }
}
</script>
<style lang="scss">
.page-work{
  background: lightgrey;
}
</style>
