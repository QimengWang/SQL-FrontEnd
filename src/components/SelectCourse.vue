<template>
    <div class="container">

      <div class="tableCon">
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
              :data="availableCourse"
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
              :data="selectedCourse"
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
            availableCourse: [{
              kh: '08302001',
              km: '操作系统（1）',
              xf: '4',
              department: '计算机学院',
              teacher: '方昱春'
            },{
              kh: '08302002',
              km: '操作系统（2）',
              xf: '4',
              department: '计算机学院',
              teacher: '张建'
            }],

            selectedCourse: [{
              kh: '08305001',
              km: '数据库原理（1）',
              xf: '4',
              department: '计算机学院',
              teacher: '李晓强'
            },{
              kh: '08305002',
              km: '数据库原理（2）',
              xf: '4',
              department: '计算机学院',
              teacher: '孙慧玥'
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
    width: 100%;
    height: 500px;
    overflow: auto;
  }

  .tableCon {
    margin-top: 30px;
    text-align: left;
    margin-left: 30px;
  }
</style>
