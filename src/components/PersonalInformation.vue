<template>
<!--  <h>这里是个人信息界面</h>-->
  <div class="container">
    <el-form :label-position="labelPosition" label-width="80px">
      <el-form-item label="学号">
        <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{studentId}}
        </el-card>
      </el-form-item>
      <el-form-item label="姓名">
        <el-card shadow="hover" style="width: 300px; height: 50px;">
            {{name}}
        </el-card>
      </el-form-item>
      <el-form-item label="年龄">
        <el-card shadow="hover" style="width: 300px; height: 50px;">
          {{age}}
        </el-card>
      </el-form-item>
      <el-form-item label="性别">
        <el-card shadow="hover" style="width: 300px; height: 50px;">
          {{sex}}
        </el-card>
      </el-form-item>
      <el-form-item label="所在院系">
        <el-card shadow="hover" style="width: 300px; height: 50px;">
          {{department}}
        </el-card>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
    export default {
        name: "PersonalInformation",
        data () {
          return {
            labelPosition: 'right',
            name: 'Wqm',
            studentId: '17123079',
            age: '18',
            sex: '女',
            department: '计算机学院',
          }
        },
        methods:{

        }
    }
</script>

<style scoped>
  .container {
    margin-top: 30px;
  }
</style>
