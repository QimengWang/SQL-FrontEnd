<template>
  <div class="container">
    <div style="margin-top: 9%; margin-left: 35%">
      <el-card class="box-card">
        <div style="margin-top: 3%; font-weight: bold; font-size: 23px;">
          <span>登 录</span>
        </div>
          <el-form :model="stu" style="font-weight: bold">
            <el-form-item label="学号:" style="display: inline;">
              <el-input style="width: 300px" v-model="stu.xh"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input style="width: 300px" v-model="stu.mm"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="login" type="info" style="width: 300px; background-color: #545c64; font-weight: bold">
                确认
              </el-button>
            </el-form-item>
          </el-form>
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
    width: 100%;
    height: 100vh;
    background-color: whitesmoke;
    position: absolute;
  }

  .box-card {
    width: 350px;
    background: rgba(255,255,255,0.7);
    text-align: center;
  }
</style>
