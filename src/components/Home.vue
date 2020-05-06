<template>
  <div class="home-container">
    <Navigation class="nav-screen"></Navigation>
    <Sidebar class="sidebar-screen"></Sidebar>
    <router-view class="router-view"></router-view>
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
  .home-container {
    width: 100%;
    height: 100%;
  }

  .nav-screen {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    z-index: 99;
  }

  .sidebar-screen{
    position: fixed;
    top: 60px;
    z-index: 88;
    float: left;
  }

  .router-view{
    position: relative;
    float: left;
    top: 60px;
    left: 200px;
  }

</style>
