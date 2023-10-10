<template>
    <div class="lottie-wrapper">
      <div ref="lottie" class="lottie-container"></div>
    </div>
  </template>
  
  <script>
  import lottie from 'lottie-web';
  
  export default {
    props: {
      animationData: {
        type: Object,
        required: true
      }
    },
    mounted() {
      lottie.loadAnimation({
        container: this.$refs.lottie,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: this.animationData
      });
    }
  }
  </script>
  
  <style scoped>
  .lottie-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  
  .lottie-container {
    width: 100vh;
    height: 100vh;
    overflow: hidden;
  }
  </style>
  