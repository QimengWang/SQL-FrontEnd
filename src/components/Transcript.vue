<template>
  <div class="container">
    <el-card>
      <h1 style="margin-top: 10px">学生成绩单</h1>
      <div class="tableCon">
        <el-table
          :data="tableData"
          style="width: 90%; margin-top: 10px; margin-bottom: 20px">
          <el-table-column
            prop="kh"
            label="课程号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="km"
            label="课程名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="zpcj"
            label="成绩"
            width="150">
          </el-table-column>
          <el-table-column
            prop="xf"
            label="学分"
            width="150">
          </el-table-column>
          <el-table-column
            prop="rkls"
            label="教师">
          </el-table-column>
        </el-table>
      </div>
      <h2 style="margin-bottom: 10px;">平均成绩：{{avgGrade}}</h2>
    </el-card>
  </div>


</template>

<script>
  import {getGrades} from "../api/api";

  export default {
        name: "Transcript",
    data () {
          return {
            tableData: [{

            }],
            avgGrade: '',
          }
        },
        methods:{
          async getData(){
            const d = (await getGrades()).data;
            this.tableData = d.retlist;
            this.avgGrade = d.avgGrade;
          }
        },
    async mounted(){
          this.getData();
    }
  }
</script>

<style scoped>
  .container {
    height: 100%;
    width: 100%;
  }

  >>>.el-card {
    margin-top: 50px;
    margin-left: 50px;
    margin-bottom: 50px;
    width: 77%;
    color: #333333;
  }

  .tableCon {
    margin-left: 9%;
  }

</style>
