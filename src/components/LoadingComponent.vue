<template>
  <div class="animation-keyframes-demo el"></div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
  mounted () {
    console.log('loadMounted')
    anime({
      targets: '.animation-keyframes-demo .el',
      keyframes: [
        {translateY: -40},
        {translateX: 250},
        {translateY: 40},
        {translateX: 0},
        {translateY: 0}
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
    });
  }
}
</script>

<style>
.el {
  width: 100px;
  height: 100px;
  border: 50%;
  background-color: darkgoldenrod;
}
</style>