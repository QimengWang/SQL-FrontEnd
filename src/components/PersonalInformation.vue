<template>
    <div class="container">
      <el-form :label-position="labelPosition" :model="studInfo" label-width="80px">
        <el-form-item label="学号:">
          <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{studInfo.xh}}
          </el-card>
        </el-form-item>
        <el-form-item label="姓名:">
          <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{studInfo.xm}}
          </el-card>
        </el-form-item>
        <el-form-item label="年龄:">
          <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{studInfo.nl}}
          </el-card>
        </el-form-item>
        <el-form-item label="性别:">
          <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{studInfo.xb}}
          </el-card>
        </el-form-item>
        <el-form-item label="所在院系:">
          <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{studInfo.yx}}
          </el-card>
        </el-form-item>
      </el-form>
    </div>


</template>

<script>
  import {personalInfo} from "../api/api";

    export default {
        name: "PersonalInformation",
        data () {
          return {
            labelPosition: 'right',
            studInfo: {
              xm: 'Wqm',
              xh: '17123079',
              nl: '18',
              xb: '女',
              yx: '计算机工程与科学学院',
            },

          }
        },
        methods:{
          async getData() {
            let data = (await personalInfo()).data.retlist;
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
    margin-top: 30px;
    margin-left: 30px;
  }
</style>
