<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="{ name: 'home' }" class="navbar-brand">{{ brand }}</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link :to="{ name: 'projects' }" tag="li" activeClass="active"><a>Projects</a></router-link>
      </ul>
    </div>
    <router-link :to="{ name: 'projects' }" activeClass="active">Projects</router-link>
    <router-link :to="{ name: 'project-new' }" activeClass="active">New Project</router-link>
  </nav>
</template>

<script>
export default {
  props: ['brand']
}
</script>

<style lang="scss">

</style>
