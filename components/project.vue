<template>
  <div class="project">
    <div class="project-images">
      <img
        v-for="item in data.images"
        :key="item.image.url"
        class="project-image"
        :src="item.image.url"
        :alt="item.image.alt" />
    </div>

  </div>
</template>
<script>
  export default {
    props: [
      'data'
    ]
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
  flex-direction: column;
}
.project-image{
  max-width: 100%;
  max-height: 90vh;
  margin-bottom:2rem;
}
</style>
