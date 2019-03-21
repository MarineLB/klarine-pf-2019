<template>
  <div class="app">
    <site-header />
    <div
      :class="{ 'in-page': !isIndexPage, 'in-page-work': isWorkPage }"
      class="app__container">
      <nuxt-link
        class="app__link app__container-square"
        to="/work"><span>work</span></nuxt-link>
      <div
        v-show="!isIndexPage"
        class="app__container-square">
        <nuxt class="page" />
      </div>
      <nuxt-link
        class="app__link app__container-square"
        to="/about"><span>about me</span></nuxt-link>
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
    isIndexPage() {
      //console.log(this.$nuxt.$route.path)
      return this.$nuxt.$route.path === '/'
    },
    isWorkPage() {
      return this.$nuxt.$route.path === '/work'
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
  overflow: visible;
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

  &.in-page-work{
    //padding-bottom: 0;
  }
}
.app__container-square{
  width: 100%;
  border:1px solid rgba(97,97,97,0.5);
  display: flex;
  justify-content:center;
  align-items:center;
  transition: all .3s ease-out;
  & + .app__container-square{
    border-left: none;
  }
  &.nuxt-link-exact-active{
    width:0;
    span{
      opacity: 0;
    }
  }

  .in-page-work &{
    //border-bottom: 0;
    border-left:0;
  }
}
.app__link{
  text-decoration: none;
  color: inherit;


  &:hover{
    background: rgba(97,97,97,0.1);
  }
  .in-page &{
    max-width: 3.5rem;
    span{
      white-space:nowrap;
      position: fixed;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
    }
  }
  .in-page-work &{
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
