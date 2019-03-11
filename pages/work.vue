<template>
  <div class="page page-work">
    <header class="work-header">
      <h1 class="work-header__title">work</h1>
      <redline />
    </header>
    <div class="work-container">
      <project
        v-for="project in projects"
        :key="project.id"
        :data="project.data"/>
    </div>
  </div>
</template>
<script>
import redline from '~/assets/red-line.svg?inline'
import project from '~/components/project.vue'
import Prismic from 'prismic-javascript'

export default {
  components: {
    redline,
    project
  },
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
  async asyncData({ app, error, store }) {
    let projects = await app.$prismic.api.query( Prismic.Predicates.at('document.type', 'projects') );
    if (projects) {
      return {
        projects: projects.results
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
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
  //background: lightgrey;
}
.work-header{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding:1rem;
}
.work-header__title{
  position: absolute;
}
</style>
