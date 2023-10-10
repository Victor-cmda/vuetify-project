<template>
    <v-container>
      <div>
        <LottieAnimation :animationData="myAnimationData" />
      </div>
    </v-container>
</template>

<script setup>
</script>

<script>
import LottieAnimation from '@/components/LottieAnimation';
import myAnimationData from '@/assets/animation1.json';

export default {
  components: {
    LottieAnimation
  },
  data() {
    return {
      myAnimationData
    };
  }
}
</script>