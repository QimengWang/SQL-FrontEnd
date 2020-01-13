<template>
  <div class="container">
    <div style="margin-top: 8%; margin-left: 35%">
      <el-card class="box-card">

        <div style="margin-top: 3%; font-weight: bold; font-size: 23px;">
          <span>登 录</span>
        </div>

        <Tabs value="student" style="margin-top: 10px;" :animated="false">
          <TabPane label="学生" name="student">
            <el-form :model="stu" style="font-weight: bold;">
              <el-form-item label="学号：" style="display: inline">
                <el-input placeholder="请输入学号" style="width: 300px;" v-model="stu.id"
                          auto-complete="new-password">
                </el-input>
              </el-form-item>
              <el-form-item label="密码:">
                <el-input placeholder="请输入密码" style="width: 300px;" v-model="stu.password" show-password
                          auto-complete="new-password">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="stuLogin" type="info" class="button">
                  确认
                </el-button>
              </el-form-item>
            </el-form>
          </TabPane>
          <TabPane label="教师" name="teacher">
            <el-form :model="tea" style="font-weight: bold;">
              <el-form-item label="工号：" style="display: inline">
                <el-input placeholder="请输入工号" style="width: 300px;" v-model="tea.id"
                          auto-complete="new-password">
                </el-input>
              </el-form-item>
              <el-form-item label="密码:">
                <el-input placeholder="请输入密码" style="width: 300px;" v-model="tea.password" show-password
                          auto-complete="new-password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="teaLogin" type="info" class="button">
                  确认
                </el-button>
              </el-form-item>
            </el-form>
          </TabPane>
        </Tabs>

      </el-card>
    </div>
  </div>

</template>

<script>
  import {stuLogin} from "../api/api";

    export default {
        name: "Login",
      data(){
          return {
            stu: {
              id:'',
              password:'',
            },
            tea: {
              id:'',
              password:'',
            },

        }
      },
      methods: {
          async stuLogin(){
            let flag = (await stuLogin(this.stu)).data;
            console.log(flag);
            if (flag.ret === 0) {
              window.open('http://localhost:8080/#/Home','_self');
            }
            if(flag.ret === 1) {
              console.log(flag.msg);
              this.$Notice.error({
                title: flag.msg,
                duration: 2,
              });
            }
          },
        async teaLogin(){
          this.$Notice.error({
            title: '功能待开发!',
            duration: 2,
          });
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

  .button {
    width: 300px;
    background-color: #545c64;
    font-weight: bold;
  }

  >>>.ivu-tabs-nav-wrap {
    text-align: center;
  }

  >>>.ivu-tabs-nav-scroll {
    display: inline-block;
  }
</style>
