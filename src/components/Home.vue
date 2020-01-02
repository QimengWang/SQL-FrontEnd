<template>
  <div class="home-container">
    <Navigation class="nav-screen"></Navigation>
    <div class="full-screen">
          <div>
            <Sidebar class="sidebar-screen"></Sidebar>
          </div>
          <div>
            <router-view class="router-view"></router-view>
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
    height: auto;
  }

  .sidebar-screen{
    top: 60px;
    position: fixed;
  }

  .router-view{
    position: fixed;
    top: 60px;
    left: 200px;
  }

</style>
