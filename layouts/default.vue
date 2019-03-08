<template>
  <div class="app">
    <site-header />
    <div
      :class="{ 'in-page': showMiddleSquare }"
      class="app__container">
      <nuxt-link
          class="app__link app__container-square"
          to="/work"><span>Work</span></nuxt-link>
      <div
        v-show="showMiddleSquare"
        class="app__container-square">
        <nuxt class="page" />
      </div>
      <nuxt-link
          class="app__link app__container-square"
          to="/about"><span>About me</span></nuxt-link>
    </div>
  </div>
</template>
<script>
import siteHeader from '~/components/siteHeader.vue';
export default {
  components: {
    siteHeader
  },
  computed: {
    showMiddleSquare() {
      console.log(this.$nuxt.$route.path)
      return this.$nuxt.$route.path !== '/'
    }
  }
}
</script>
<style lang="scss">
html {
  font-family: 'Baskerville', serif;
  font-size: 16px;
  letter-spacing: 1.8px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: hidden;
}
html, body, .app{
  min-height: 100vh;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
h1, h2, h3, h4, h5, h6{
  font-weight: inherit;
  font-size: inherit;
}
.app{
  display: flex;
  flex-direction: column;
}
.app__container{
  height:100%;
  width:100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
}
.app__container-square{
  width: 100%;
  border:1px solid rgba(97,97,97,0.5);
  display: flex;
  justify-content:center;
  align-items:center;
  & + .app__container-square{
    border-left: none;
  }
  &.nuxt-link-exact-active{
    width:0;
    span{
      opacity: 0;
    }
  }
}
.app__link{
  text-decoration: none;
  color: inherit;
  transition: all .2s ease-out;
  &:hover{
    background: rgba(97,97,97,0.1);
  }
  .in-page &{
    max-width: 3.5rem;
    span{
      white-space:nowrap;
      transform: rotate(-90deg);
    }
  }
}
a{
  color: inherit;
  text-decoration: none;
}
.page{
  height: 100%;
  width: 100%;
}
</style>
