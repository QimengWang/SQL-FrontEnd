<template>
  <div class="container">
    <el-card>
      <h1 style="margin-top: 10px">学生成绩单</h1>
        <el-table
          :data="tableData"
          style="margin-top: 10px; margin-bottom: 20px">
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
    height: calc(100vh - 60px);
    width: calc(100% - 200px);
    background-color: whitesmoke;
  }

  >>>.el-card {
    display: flex;
    justify-content: center;
    margin: 50px;
    color: #333333;
  }

</style>
