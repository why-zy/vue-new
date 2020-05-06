<template>
  <div id="app">
    <keep-alive>
          <router-view></router-view>
    </keep-alive>
    <TarFooer></TarFooer>
  </div>
</template>

<script>
import TarFooer from '@/components/comcent/TarFooer'
export default {
  name: 'App',
  components: { 
         TarFooer
  }
}
</script>

<style>

</style>
