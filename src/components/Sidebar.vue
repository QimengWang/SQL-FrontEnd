<template>
  <div class="container">
      <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
          <router-link to="/PersonalInformation">
            <el-menu-item index="1">
              <span slot="title" style="float: left;">个人信息</span>
            </el-menu-item>
          </router-link>
          <router-link to="/SelectCourse">
            <el-menu-item index="2">
              <span slot="title" style="float: left;">选课</span>
            </el-menu-item>
          </router-link>
          <router-link to="/Transcript">
            <el-menu-item index="3">
              <span slot="title" style="float: left;">成绩单</span>
            </el-menu-item>
          </router-link>
      </el-menu>
  </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data () {
          return {

          }
        },
        methods:{
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped>
  .container {
    height: 100%;
    width: 200px;

  }

  .el-menu-vertical-demo {
    height: 100%;
  }
</style>
