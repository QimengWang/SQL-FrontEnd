<template>
  <div class="container">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#333333"
      text-color="#fff"
      active-text-color="#ffd04b">
      <router-link to="/mPersonalInformation">
        <el-menu-item index="1">
          <div>
            <img src="../assets/user.png" class="image" />
            <span style="float: left; margin-left: 2%">
                  个人信息
                </span>
          </div>
        </el-menu-item>
      </router-link>
      <router-link to="">
        <el-menu-item index="2">
          <div>
            <img src="../assets/select.png" class="image"/>
            <span style="float: left; margin-left: 2%">
                  学生信息管理
                </span>
          </div>
        </el-menu-item>
      </router-link>
      <router-link to="">
        <el-menu-item index="3">
          <div>
            <img src="../assets/select.png" class="image"/>
            <span style="float: left; margin-left: 2%">
                  教师信息管理
                </span>
          </div>
        </el-menu-item>
      </router-link>
      <router-link to="">
        <el-menu-item index="4">
          <div>
            <img src="../assets/select.png" class="image"/>
            <span style="float: left; margin-left: 2%">
                  课程管理
                </span>
          </div>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "mSidebar",
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

  .image{
    margin-top: 12%;
    height: 10%;
    width: 10%;
    float: left;
  }
</style>
