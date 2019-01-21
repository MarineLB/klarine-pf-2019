<template>
  <component
    v-if="component"
    :is="component"
    :data="data"/>
</template>
<script>

  export default {
    props: {
      type: {
        type: String,
        default: () => null
      },
      data: {
        type: Object,
        default: () => []
      },
    },
    data() {
      return {
        component: null,
      }
    },
    computed: {
      loader() {
        if (!this.type) {
          return null
        }
        return () => import(`./${this.type}`)
      },
    },
    mounted() {
      this.loader()
        .then(() => {
          this.component = () => this.loader()
        })
    },
  }
</script>
