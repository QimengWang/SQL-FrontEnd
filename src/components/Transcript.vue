<template>
  <div class="container">
    <el-card>
      <h2>学生成绩单</h2>
      <div class="tableCon">
<!--        <h1>ttt</h1>-->
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
    </el-card>
  </div>


</template>

<script>
  import {} from "../api/api";

  export default {
        name: "Transcript",
    data () {
          return {
            tableData: [{
              kh: '08300000',
              km: 'TEST',
              zpcj: '100',
              xf: '4',
              rkls: 'Teddy',
            }],

          }
        },
        methods:{
          async getData(){

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

  h2 {
    margin-top: 20px;
  }

  >>>.el-card {
    margin-top: 50px;
    margin-left: 50px;
    margin-bottom: 50px;
    width: 77%;
  }

  .tableCon {
    margin-left: 9%;
  }

</style>
