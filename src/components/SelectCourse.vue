<template>
    <div class="container">

      <div class="tableCon">
        <el-form ref="form" :inline="true">
          <el-form-item>
            <h3>请输入课程号：</h3>
          </el-form-item>
          <el-form-item>
            <el-input v-model="courseId"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="selectCourse">确定</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="tableCon">
        <el-form>
          <el-form-item>
            <h3>可选课程：</h3>
          </el-form-item>
          <el-form-item>
            <el-table
              :data="availableCourse"
              tooltip-effect="dark"
              style="width: 100%">
              <el-table-column
                prop="kh"
                label="课程号"
                width="100">
              </el-table-column>
              <el-table-column
                prop="km"
                label="课程名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="xf"
                label="学分"
                width="80">
              </el-table-column>
              <el-table-column
                prop="yx"
                label="所在系"
                width="120">
              </el-table-column>
              <el-table-column
                prop="rkls"
                label="任课教师"
                width="100">
              </el-table-column>
              <el-table-column
                prop="gh"
                label="工号"
                width="80">
              </el-table-column>
              <el-table-column
                prop="sksj"
                label="上课时间"
                width="100">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="selectCourse(scope.row)" type="text" size="small" style="font-weight: bold">选课</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-form>
      </div>

      <div class="tableCon">
        <el-form>
          <el-form-item>
            <h3>已选课程：</h3>
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
                width="100">
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
  import {selectCourse} from '../api/api';
    export default {
      name: "SelectCourse",
      data () {
          return {
            action: '',
            info: '',
            courseId: '',
            availableCourse: [{

            }],
            selectedCourse: [{

            }],
          }

      },
      methods: {
        async getAvailableCourses(){
          this.action = 'list_course';
          let d = (await selectCourse(this.action)).data;
          console.log(d);
          this.availableCourse = d.retcourselist;
        },
        async selectCourse(row){
          this.action = 'select_course';
          console.log(this.action);
          console.log(row);
          this.info = row;
          let d = (await selectCourse(this.action,this.info)).data;
          console.log(d);
        },
      },
      async mounted () {
        this.getAvailableCourses();
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
    width: 64%;
  }
</style>
