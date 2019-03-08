<template>
  <header
    v-if="data"
    class="site-header"
  >
    <nuxt-link to="/">
      <div
        class="site-header__title"
        v-html="$prismic.dom.RichText.asHtml(data.title, $prismic.linkResolver)"/></div>
    </nuxt-link>
    <div
      class="site-header__content"
      v-html="$prismic.dom.RichText.asHtml(data.text, $prismic.linkResolver)"/></div>
  </header>
</template>
<script>
export default {
  name: 'siteHeader',
  computed: {
    data() {
      return this.$store.state.homeDocument[0].data
    }
  }
}
</script>
<style lang="scss">
.site-header{
  text-align: center;
  width:90%;
  padding-top: 2rem;
  margin:0 auto;
}
.site-header__title{
  font-size: 1.15rem;
  letter-spacing:1.8px;
  margin-bottom: 1rem;
}
.site-header__content{
  font-size: 0.8rem;
  letter-spacing: 0.9px;
  p{
    margin-bottom: 0.5rem;
  }
}
</style>
