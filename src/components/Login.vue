<template>
  <div class="container">
    <div style="margin-left: 35%; margin-top: 13%">
      <el-card class="box-card">
        <div slot="header" class="clearFix">
          <span style="font-size: 18px">登录</span>
        </div>
        <div class="text item">
          <el-form :model="stu">
            <el-form-item label="学号:" style="margin-left: 18px;">
              <el-input style="width: 220px" v-model="stu.xh"></el-input>
            </el-form-item>
            <el-form-item label="密码:"  style="margin-left: 18px;">
              <el-input style="width: 220px" v-model="stu.mm"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login">
                确认
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Login",
      data(){
          return {
            stu: {
              xh:'',
              mm:'',
            }

        }
      },
      methods: {
          async login(){
            window.open('http://localhost:8080/#/Home','_self');
          }

      },
      async mounted() {

      }
    }
</script>

<style scoped>
  .container {
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 1000px;
    z-index:-10;
    zoom: 1;
    background-repeat: no-repeat;
    background-image: url("../assets/login.jpg");
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 10px;
  }

  .clearFix:before,
  .clearFix:after {
    display: table;
    content: "";
  }
  .clearFix:after {
    clear: both
  }

  .box-card {
    width: 350px;
    background: rgba(255,250,240,0.7);
  }
</style>
