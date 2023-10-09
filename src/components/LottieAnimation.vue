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
    height: 100vh; /* 100% da altura da viewport */
  }
  
  .lottie-container {
    width: 100vh;  /* ou qualquer valor desejado */
    height: 100vh; /* ou qualquer valor desejado */
    overflow: hidden;
  }
  </style>
  