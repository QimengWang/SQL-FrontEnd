<template>
  <div class="container">
      <el-card class="box-card">

        <div style="margin-top: 3%; font-weight: bold; font-size: 23px;">
          <span>登 录</span>
        </div>

        <Tabs value="student" style="margin-top: 10px;" :animated="false">
          <TabPane label="学生" name="student">
            <el-form :model="stu" style="font-weight: bold;">
              <el-form-item>
                <p>学号:</p>
                <el-input placeholder="请输入学号" style="width: 300px;" v-model="stu.id"
                          auto-complete="new-password">
                </el-input>
                <p>密码:</p>
                <el-input placeholder="请输入密码" style="width: 300px;" v-model="stu.password" show-password
                          auto-complete="new-password">
                </el-input>
              </el-form-item>
<!--              <el-form-item label="密码:">-->
<!--                <el-input placeholder="请输入密码" style="width: 310px;" v-model="stu.password" show-password-->
<!--                          auto-complete="new-password">-->
<!--                </el-input>-->
<!--              </el-form-item>-->
              <el-form-item>
                <el-button @click="stuLogin" type="info" class="button">
                  确认
                </el-button>
              </el-form-item>
            </el-form>
          </TabPane>
          <TabPane label="教师" name="teacher">
            <el-form :model="tea" style="font-weight: bold;">
              <el-form-item>
                <p>工号:</p>
                <el-input placeholder="请输入工号" style="width: 300px;" v-model="tea.id"
                          auto-complete="new-password">
                </el-input>
                <p>密码:</p>
                <el-input placeholder="请输入密码" style="width: 300px;" v-model="tea.password" show-password
                          auto-complete="new-password">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="teaLogin" type="info" class="button">
                  确认
                </el-button>
              </el-form-item>
            </el-form>
          </TabPane>
          <TabPane label="管理员" name="manager">
            <el-form :model="manager" style="font-weight: bold;">
              <el-form-item>
                <p>工号:</p>
                <el-input placeholder="请输入工号" style="width: 300px;" v-model="manager.id"
                          auto-complete="new-password">
                </el-input>
                <p>密码:</p>
                <el-input placeholder="请输入密码" style="width: 300px;" v-model="manager.password" show-password
                          auto-complete="new-password">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="manLogin" type="info" class="button">
                  确认
                </el-button>
              </el-form-item>
            </el-form>
          </TabPane>
        </Tabs>
      </el-card>
    </div>

</template>

<script>
  import {stuLogin, teaLogin, manLogin} from "../api/api";

    export default {
        name: "Login",
      data(){
          return {
            stu: {
              id:'',
              password:''
            },
            tea: {
              id:'',
              password:''
            },
            manager: {
              id: '',
              password: ''
            }

        }
      },
      methods: {
          async stuLogin(){
            if(this.stu.id === '' || this.stu.password === ''){
              this.$Notice.error({
                title: '学号或密码不能为空！',
                duration: 2,
              });
            }
            else{
              let flag = (await stuLogin(this.stu)).data;
              console.log(flag);
              if (flag.ret === 0) {
                window.open('http://localhost:8080/#/PersonalInformation','_self');
              }
              if(flag.ret === 1) {
                console.log(flag.msg);
                this.$Notice.error({
                  title: flag.msg,
                  duration: 2,
                });
              }
            }
          },
        async teaLogin(){
          if(this.tea.id === '' || this.tea.password === ''){
            this.$Notice.error({
              title: '工号或密码不能为空！',
              duration: 2,
            });
          }
          else{
            let d = (await teaLogin(this.tea)).data;
            console.log(d);
            if (d.ret === 0) {
              window.open('http://localhost:8080/#/tPersonalInformation','_self');
            }
            if(d.ret === 1) {
              console.log(d.msg);
              this.$Notice.error({
                title: d.msg,
                duration: 2,
              });
            }
          }
        },
        async manLogin() {
          if(this.manager.id === '' || this.manager.password === ''){
            this.$Notice.error({
              title: '工号或密码不能为空！',
              duration: 2,
            });
          }
          else{
            let d = (await manLogin(this.manager)).data;
            console.log(d);
            if (d.ret === 0) {
              window.open('http://localhost:8080/#/tHome','_self');
            }
            if(d.ret === 1) {
              console.log(d.msg);
              this.$Notice.error({
                title: d.msg,
                duration: 2,
              });
            }
          }
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /**两种居中方式**/
  .box-card {
    width: 360px;
    background: rgba(255,255,255,0.7);
    text-align: center;
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%, -50%);*/
  }

  p {
    margin-left: 10px;
    float: left;
    color: #333333;
    font-weight: bold;
  }

  .button {
    width: 300px;
    /*background-color: #545c64;*/
    font-weight: bold;
    background-color: #333333;
  }

  >>>.el-form-item__label{
    color: #333333;
    font-weight: bold;
  }

  >>>.ivu-tabs-nav-wrap {
    text-align: center;
  }

  >>>.ivu-tabs-nav-scroll {
    display: inline-block;
  }
</style>
