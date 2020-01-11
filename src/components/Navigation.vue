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
      <el-menu-item index="2" style="float: right">注销</el-menu-item>
      <el-menu-item index="3" style="float: right" @click="drawer = true">
        <span>{{stuName}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      activeIndex: '',
      stuName: '17123079Wqm'
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    height: auto;
  }
</style>
