<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">学生选课成绩管理系统</el-menu-item>
      <el-menu-item index="2" style="float: right" @click="signOut">注销</el-menu-item>
      <el-menu-item index="3" style="float: right">
        <span>{{name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import {tPersonalInfo} from "../api/api";
  export default {
    name: 'tNavigation',
    data () {
      return {
        activeIndex: '',
        name: '',
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
        this.name = (await tPersonalInfo()).data.xm;
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
</style>
