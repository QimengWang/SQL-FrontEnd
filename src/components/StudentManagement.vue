<template>
<div class="container">
  <el-card>
    <h1>学生信息管理</h1>
    <el-table
      :data="stuInfo"
      tooltip-effect="dark"
      style="width: 100%; margin-top: 30px">
      <el-table-column
        prop="xh"
        label="学号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="xm"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="nl"
        label="年龄"
        width="120">
      </el-table-column>
      <el-table-column
        prop="xb"
        label="性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="yx"
        label="学院">
      </el-table-column>
    </el-table>
  </el-card>
</div>
</template>

<script>
  import {listStudents} from '../api/api'
    export default {
      name: "StudentManagement",
      data () {
        return {
          action: '',
          stuInfo:[{

          }],
        }
      },
      methods: {
        async getStuInfo () {
          this.action = 'list_students';
          let d = (await listStudents(this.action)).data;
          console.log(d);
          this.stuInfo = d.retstudentlist;
        }
      },
      async mounted () {
        this.getStuInfo();
      }
    }
</script>

<style scoped>
  .container {
    width: calc(100% - 200px);
    height: calc(100vh - 60px);
    background-color: whitesmoke;
  }

  >>>.el-card {
    margin: 50px;
    color: #333333;
    padding: 30px 70px;
  }


</style>
