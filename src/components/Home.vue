<template>
  <div class="home-container">
    <Navigation></Navigation>
    <div>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    import Navigation from "../components/Navigation";
    import Sidebar from "../components/Sidebar";

    export default {
      name: "Home",
      components: {Sidebar, Navigation}
    }
</script>

<style scoped>
  .home-container{
    height: 100%;
    width: 100%;
  }
</style>
