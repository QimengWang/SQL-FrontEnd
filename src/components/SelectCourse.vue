<template>
    <div class="container">

      <el-card>

        <div class="tableCon">
          <el-form ref="form" :inline="true">
            <el-form-item>
              <h3>请输入课程号：</h3>
            </el-form-item>
            <el-form-item>
              <el-input v-model="courseId"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="selectCourseById">确定</el-button>
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
                width="100">
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
                  <el-button @click="deleteCourse(scope.row)" type="text" size="small" style="font-weight: bold">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-form>
      </div>

      </el-card>

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
        async getAvailableCourses() {
          this.action = 'list_course';
          let d = (await selectCourse(this.action)).data;
          // console.log(d);
          this.availableCourse = d.retcourselist;
        },
        async getSelectedCourses() {
          this.action = 'list_selected_course';
          let d = (await selectCourse(this.action)).data;
          // console.log(d);
          this.selectedCourse = d.retlist;
        },
        async selectCourse(row) {
          this.action = 'select_course';
          console.log(row);
          this.info = row.kh;
          let d = (await selectCourse(this.action,this.info)).data;
          console.log(d);
          if(d.ret === 0){
            this.getSelectedCourses();   //再次列出所选课程
            this.$Notice.success({
              title: d.msg,
              duration: 2,
            });
          }
          else if(d.ret === 1){
            this.$Notice.error({
              title: d.msg,
              duration: 2,
            });
          }
        },
        async selectCourseById(){
          this.action = 'select_course';
          this.info = this.courseId
          let d = (await selectCourse(this.action,this.info)).data;
          console.log(d);
          if(this.courseId === '') {
            this.$Notice.error({
              title: '课程号不能为空！',
              duration: 2,
            });
          }
          else {
            if(d.ret === 0){
              this.getSelectedCourses();   //再次列出所选课程
              this.$Notice.success({
                title: d.msg,
                duration: 2,
              });
            }
            else if(d.ret === 1){
              this.$Notice.error({
                title: d.msg,
                duration: 2,
              });
            }
          }
        },
        async deleteCourse(row) {
          this.action = 'del_course';
          this.info = row.kh;
          let d = (await selectCourse(this.action,this.info)).data;
          console.log(d);
          if(d.ret === 0){
            this.getSelectedCourses();   //再次列出所选课程
            this.$Notice.success({
              title: d.msg,
              duration: 2,
            });
          }
          else if(d.ret === 1){
            this.$Notice.error({
              title: d.msg,
              duration: 2,
            });
          }
        },
      },
      async mounted () {
        this.getAvailableCourses();
        this.getSelectedCourses();
      }
    }
</script>

<style scoped>
  .container {
    width: calc(100% - 200px);
  }

  >>>.el-card {
    margin: 50px;
    color: #333333;
  }

  .tableCon {
    margin-top: 20px;
    text-align: left;
    margin-left: 20px;
    width: 90%;
  }

  h3 {
    color: #333333;
  }
</style>
