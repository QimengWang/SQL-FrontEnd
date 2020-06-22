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

    <el-dialog title="修改密码" :visible.sync="alterFormVisible" :append-to-body="true">
      <el-form :model="password" ref="password" label-width="100px" status-icon :rules="rules">
        <el-form-item label="旧密码:">
          <el-input type="password" v-model="oldPassword" @blur="verifyPwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码:" prop="newPwd">
          <el-input type="password" v-model="password.newPwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码:" prop="checkNewPwd">
          <el-input type="password" v-model="password.checkNewPwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="confirm('password')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import {personalInfo, changePassword, verifyOldPwd} from "../api/api";
export default {
  name: 'Navigation',
  data () {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.password.checkNewPwd !== '') {
          this.$refs.password.validateField('checkNewPwd');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.password.newPwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      activeIndex: '',
      name: '',
      xh: '',
      alterFormVisible: false,
      oldPassword: '',
      password: {
        newPwd: '',
        checkNewPwd: ''
      },
      rules: {
        newPwd: [{validator: validatePass, trigger: 'blur'}],
        checkNewPwd: [{validator: validatePass2, trigger: 'blur'}]
      },
    };
  },
  methods:{
    async verifyPwd () {
      const f = (await verifyOldPwd(this.oldPassword)).data.ret;
      if(f === 1) {
        alert("旧密码输入错误，请重新输入！");
      }
    },
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
    async confirm(password) {
      this.$refs[password].validate(async (valid) => {
        if (valid) {
          const r = (await changePassword(this.password)).data;
          this.alterFormVisible = false;
          if(r.ret === 0) {
            this.$Notice.success({
              title: r.msg,
              duration: 2,
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
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
