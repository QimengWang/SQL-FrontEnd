<template>
  <div class="container">
      <el-card>
        <h1 style="margin-top: 10px">我的信息</h1>
        <el-form :model="studInfo">
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
            this.studInfo = (await personalInfo()).data;
          }

        },
      async mounted() {
          this.getData();
      }
    }
</script>

<style scoped>
  .container {
    width: calc(100% - 200px);
    height: calc(100vh - 60px);
    background-color: whitesmoke;
  }

  >>>.el-form {
    margin-top: 30px;
    width: 40%;
    position: relative; /*不使用absolute是为了防止from被文件流删去，导致card溢出*/
    left: 50%;
    transform: translate(-50%, 0%);
  }

  >>>.el-form-item__label{
    color: #333333;
    font-weight: bold;
  }

  >>>.el-card {
    /*margin: 50px;*/
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 50px;
    color: #333333;
  }
</style>
