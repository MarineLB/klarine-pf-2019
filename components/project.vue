<template>
  <figure class="project">
    <div
      :ref="slug"
      class="project-images">
      <img
        v-for="item in data.images"
        :key="item.image.url"
        class="project-image"
        :src="item.image.url"
        :alt="item.image.alt" />
    </div>
    <figcaption
      :style="{width}"
      class="project__caption">
      <div class="project__caption--primary">
        <h3
          class="project__description"
          v-html="$prismic.dom.RichText.asHtml(data.description, $prismic.linkResolver)" />
      </div>
      <div class="project__caption--secondary">
        <div
          class="project__type"
          v-html="$prismic.dom.RichText.asHtml(data.project_type, $prismic.linkResolver)"></div>
        <div class="project__year">{{ data.year }}</div>
      </div>
    </figcaption>
  </figure>
</template>
<script>
  export default {
    props: [
      'data',
      'slug'
    ],
    data() {
      return {
        width: '100%'
      }
    },
    methods: {
      getWidth() {
        if (process.browser) {
          const images = this.$refs[this.slug].querySelectorAll('.project-image');
          const last = images[images.length -1];
          this.width = last.offsetWidth+'px';
        }
      }
    },
    mounted() {
      window.addEventListener('resize', this.getWidth)
      this.getWidth();
    },
    destroyed() {
      window.removeEventListener('resize', this.getWidth);
    }
  }
</script>
<style lang="scss">
  .project{
    margin:8rem 2rem;
  }
  .project-images{
    display: flex;
    justify-content:center;
    align-items:center;
    //flex-direction: column;
    flex-wrap: wrap;
  }
  .project-image{
    max-width: 100%;
    max-height: 90vh;
    margin-bottom:2rem;
  }
  .project__caption{
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    @media (max-width: 1000px) {
      flex-wrap: wrap;
    }
    pre{
      font-size: 0.8rem;
      font-family:inherit;
      letter-spacing: 2px;
    }
    p{
      margin-bottom: 0.35rem;
    }
  }
  .project__caption--secondary{
    text-align: right;
    @media (max-width: 1000px) {
      text-align: left;
      margin-top: 1rem;
    }
  }
</style>
