<template>
<!--  <h>这里是个人信息界面</h>-->
  <div>
    <div class="container">
      <el-form :label-position="labelPosition" :model="studInfo" label-width="80px">
        <el-form-item label="学号:">
          <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{studInfo.studId}}
          </el-card>
        </el-form-item>
        <el-form-item label="姓名:">
          <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{studInfo.studName}}
          </el-card>
        </el-form-item>
        <el-form-item label="年龄:">
          <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{studInfo.age}}
          </el-card>
        </el-form-item>
        <el-form-item label="性别:">
          <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{studInfo.sex}}
          </el-card>
        </el-form-item>
        <el-form-item label="所在院系:">
          <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{studInfo.department}}
          </el-card>
        </el-form-item>
      </el-form>
    </div>
  </div>


</template>

<script>
  import {getStudInfo} from "../api/api";

    export default {
        name: "PersonalInformation",
        data () {
          return {
            labelPosition: 'right',
            studInfo: {
              studName: 'Wqm',
              studId: '17123079',
              age: '18',
              sex: '女',
              department: '计算机工程与科学学院',
            },

          }
        },
        methods:{

        },
      async mounted() {
          this.studInfo = (await getStudInfo());
      }
    }
</script>

<style scoped>
  .container {
    margin-top: 30px;
  }
</style>
