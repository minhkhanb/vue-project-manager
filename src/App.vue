<template>
  <div class="container">
    <app-header brand="Vue.js Project Manager"></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style lang="scss">
@import './scss/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

.slide-enter-active {
  animation: slide-in .2s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out .2s ease-out forwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
}
</style>
