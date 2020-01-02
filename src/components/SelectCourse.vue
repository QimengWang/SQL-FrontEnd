<template>
  <div class="container">
    <div>
      <el-form ref="form" :inline="true">
        <el-form-item label="请输入课程号：">
          <el-input v-model="courseId"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="selectConfirm">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tableCon">
      <el-form>
        <el-form-item label="可选课程：">
        </el-form-item>
        <el-form-item>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="kh"
              label="课程号"
              width="150">
            </el-table-column>
            <el-table-column
              prop="km"
              label="课程名"
              width="150">
            </el-table-column>
            <el-table-column
              prop="xf"
              label="学分"
              width="150">
            </el-table-column>
            <el-table-column
              prop="department"
              label="所在系"
              width="150">
            </el-table-column>
            <el-table-column
              prop="teacher"
              label="任课教师"
              width="150">
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
    </div>
    <div class="tableCon">
      <el-form>
        <el-form-item label="已选课程：">
        </el-form-item>
        <el-form-item>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="kh"
              label="课程号"
              width="150">
            </el-table-column>
            <el-table-column
              prop="km"
              label="课程名"
              width="150">
            </el-table-column>
            <el-table-column
              prop="xf"
              label="学分"
              width="150">
            </el-table-column>
            <el-table-column
              prop="department"
              label="所在系"
              width="150">
            </el-table-column>
            <el-table-column
              prop="teacher"
              label="任课教师"
              width="150">
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
    </div>
  </div>



</template>

<script>
    export default {
      name: "SelectCourse",
      data () {
          return {
            courseId: '',
            tableData: [{
              kh: '08302002',
              km: '操作系统（1）',
              xf: '4',
              department: '计算机学院',
              teacher: '方昱春'
            },{
              kh: '08302001',
              km: '操作系统（2）',
              xf: '4',
              department: '计算机学院',
              teacher: '张建'
            }]
          }

      },
      methods: {
        async selectConfirm(){

        },

      },
      async mounted () {

      }
    }
</script>

<style scoped>
  .container {
    margin-top: 30px;
    text-align: left;
    margin-left: 30px;
  }
  .tableCon {
    margin-top: 50px;
  }
</style>
