<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#333333"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">学生选课成绩管理系统</el-menu-item>
      <el-menu-item index="2" style="float: right" @click="signOut">
        <div style="width: 60px">
          <img src="../assets/out.png" class="image1" />
          <span>退出</span>
        </div>
      </el-menu-item>
      <el-menu-item index="3" style="float: right">
        <div style="width: 120px">
          <img src="../assets/mine.png" class="image2" />
          <span>{{gh}} {{name}}</span>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import {mPersonalInfo} from "../api/api";
  export default {
    name: 'mNavigation',
    data () {
      return {
        activeIndex: '',
        name: '',
        gh: '',
      }
    },
    methods:{
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      async signOut(){
        window.open('http://localhost:8080/#/','_self');
      },
      async setName(){
        const d = (await mPersonalInfo()).data;
        this.name = d.xm;
        this.gh = d.gh;
      }
    },
    async mounted() {
      this.setName();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    height: auto;
  }

  .image1{
    height: 28%;
    width: 28%;
  }

  .image2 {
    height: 12%;
    width: 12%;
  }
</style>
