<template>
  <div class="container">
      <el-card>
        <h1 style="margin-top: 10px">我的信息</h1>
        <el-form :model="studInfo" label-width="100px">
          <el-form-item label="学号:">
              {{studInfo.xh}}
          </el-form-item>
          <el-form-item label="姓名:">
              {{studInfo.xm}}
          </el-form-item>
          <el-form-item label="年龄:">
              {{studInfo.nl}}
          </el-form-item>
          <el-form-item label="性别:">
              {{studInfo.xb}}
          </el-form-item>
          <el-form-item label="所在院系:">
              {{studInfo.yx}}
          </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script>
  import {personalInfo} from "../api/api";

    export default {
        name: "PersonalInformation",
        data () {
          return {
            studInfo: {},
          }
        },
        methods:{
          async getData() {
            let data = (await personalInfo()).data;
            this.studInfo=data;
          }

        },
      async mounted() {
          this.getData();
      }
    }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%
  }

  >>>.el-form {
    margin-top: 30px;
    width: 40%;
    float: left;
    margin-left: 30%;
  }

  >>>.el-form-item__label{
    color: #333333;
    font-weight: bold;
  }

  >>>.el-card {
    margin-top: 50px;
    margin-left: 50px;
    margin-bottom: 50px;
    width: 77%;
    color: #333333;
  }
</style>
