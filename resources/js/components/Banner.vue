<template>
    <div id="banner" class="banner">
       <img alt="banner" :src='banner'>
    </div>
</template>

<script>

export default {
  name: "Banner",
  data() {
      return {
          banner: 'assets/bg2.png'
      }
  }
}
</script>

<style scoped>
.banner {
  background-color: #333;
  position:relative;
  max-width: 100%; /* Full width */
}

img { max-width:100%}
</style>
