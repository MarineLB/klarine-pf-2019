<template>
  <div class="page page-about">
    <div
      class="about-text"
      v-html="$prismic.dom.RichText.asHtml(data.text, $prismic.linkResolver)"></div>
    <div
      class="about-contact-text"
      v-html="$prismic.dom.RichText.asHtml(data.contact_text, $prismic.linkResolver)"></div>
  </div>
</template>
<script>
export default {
  transition: {
    name: 'fade',
  },
  async asyncData({ app, error, store }) {
    let document = await app.$prismic.api.getSingle('about');
    if (document) {
      return {
        data: document.data
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
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
.page-about{
  background: #0F0;
  padding:1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 700px) {
    padding:4rem;
  }
  @media (min-width: 1000px) {
    padding:8rem;
  }

  h3{
    font-size: 2rem;
    letter-spacing: 3.6px;
    //margin:0.5rem 0 0.75rem 0;
  }
  p{
    margin-bottom: 1rem;
  }
}
.about-text{
  max-width:80%;
  margin-bottom: 6rem;
  font-size:1.15rem;
  line-height: 1.4;
  strong{
    letter-spacing: 3.6px;
  }
}
.about-contact-text{
  line-height: 1.4;
  p:last-child{
    margin-top:2rem;
  }
}
</style>
