<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../src/components/Layout/Navbar'

export default {
  name: 'App',
    components: {
    Navbar
  }
}
</script>

<style>

</style>
