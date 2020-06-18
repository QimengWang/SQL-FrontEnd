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

      <el-submenu index="3" style="float: right; width: 180px">
        <template slot="title">
            <img src="../assets/mine.png" class="image2" />
            <span>{{xh}} {{name}}</span>
        </template>
        <el-menu-item index="2-1" @click="alterFormVisible = true">修改密码</el-menu-item>
      </el-submenu>
    </el-menu>


    <Modal
      v-model="alterFormVisible"
      title="修改密码"
      @on-ok="confirm">
      <el-form :model="password">
        <el-form-item label="旧密码:" label-width="45px">
          <el-input v-model="password.oldPassword" show-password></el-input>
        </el-form-item>
        <el-form-item label="新密码:" label-width="45px">
          <el-input v-model="password.newPassword" show-password></el-input>
        </el-form-item>
      </el-form>
    </Modal>
  </div>
</template>

<script>
  import {personalInfo, changePassword} from "../api/api";
export default {
  name: 'Navigation',
  data () {
    return {
      activeIndex: '',
      name: '',
      xh: '',
      alterFormVisible: false,
      password: {
        oldPassword: '',
        newPassword: ''
      }
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    async signOut() {
      window.open('http://localhost:8080/#/','_self');
    },
    async setName() {
      this.name = (await personalInfo()).data.xm;
      this.xh = (await personalInfo()).data.xh;
    },
    async confirm() {
      const r = (await changePassword(this.password)).data;
      if(r.ret === 0) {
        this.$Notice.success({
          title: r.msg,
          duration: 2,
        });
      }
      else {
        this.$Notice.error({
          title: r.msg,
          duration: 2,
        });
      }
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
    height: 26%;
    width: 12%;
  }
</style>
