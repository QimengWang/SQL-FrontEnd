<template>
  <div class="home-container">
    <mNavigation class="nav-screen"></mNavigation>
    <div class="full-screen">
      <div>
        <mSidebar class="sidebar-screen"></mSidebar>
      </div>
      <div>
        <router-view class="router-view"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import mNavigation from "../components/mNavigation";
  import mSidebar from "../components/mSidebar";

  export default {
    name: "tHome",
    components: {mSidebar, mNavigation}
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
