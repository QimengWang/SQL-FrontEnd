<template>
  <div class="home-container">
    <tNavigation class="nav-screen"></tNavigation>
    <div class="full-screen">
      <div>
        <tSidebar class="sidebar-screen"></tSidebar>
      </div>
      <div>
        <router-view class="router-view"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import tNavigation from "../components/tNavigation";
  import tSidebar from "../components/tSidebar";

  export default {
    name: "tHome",
    components: {tSidebar, tNavigation}
  }
</script>

<style scoped>
  .home-container {
    height: 100%;
  }

  .nav-screen {
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 99;
  }

  .full-screen {
    width: 100%;
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

