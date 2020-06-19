<template>
    <div class="container">
      <el-card>
        <h1>课程管理</h1>
        <div style="margin-top: 30px; text-align: left;">
          <el-form ref="form" :inline="true" style="width: 100%">
            <el-form-item>
              <h3>请选择院系名：</h3>
            </el-form-item>
            <el-form-item>
              <el-select v-model="yxm" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.yxm"
                  :label="item.yxm"
                  :value="item.yxm">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="getCourses">确定</el-button>
            </el-form-item>
          </el-form>
        </div>

        <el-table
          :data="courseInfo"
          style="width: 100%; margin-top: 10px;">
          <el-table-column
            prop="kh"
            label="课号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="km"
            label="课名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="xf"
            label="学分"
            width="80">
          </el-table-column>
          <el-table-column
            prop="gh"
            label="工号"
            width="80">
          </el-table-column>
          <el-table-column
            prop="yx"
            label="院系"
            width="120">
          </el-table-column>
          <el-table-column
            prop="rkls"
            label="任课老师"
            width="100">
          </el-table-column>
          <el-table-column
            prop="sksj"
            label="上课时间"
            width="100">
          </el-table-column>
          <el-table-column
            prop="xkrs"
            label="选课人数"
            width="80">
          </el-table-column>
          <el-table-column
            prop="xzrs"
            label="限制人数"
            width="80">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="openUpdateForm(scope.row)" type="text" size="small" style="font-weight: bold">修改</el-button>
              <el-button @click="delCourse(scope.row)" type="text" size="small" style="font-weight: bold">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div style="float: left">
          <el-button style="margin-top: 30px" type="primary" @click="addFormVisible = true">开课</el-button>
        </div>

      </el-card>

      <Modal
        v-model="addFormVisible"
        title="开设课程"
        @on-ok="addCourse">
        <el-form :model="addInfo">
          <el-form-item label="课号:" label-width="45px">
            <el-input v-model="addInfo.kh"></el-input>
          </el-form-item>
          <el-form-item label="课名:" label-width="45px">
            <el-input v-model="addInfo.km"></el-input>
          </el-form-item>
          <el-form-item label="学分:" label-width="45px">
            <el-input v-model="addInfo.xf"></el-input>
          </el-form-item>
          <el-form-item label="工号:" label-width="45px">
            <el-input v-model="addInfo.gh"></el-input>
          </el-form-item>
          <el-form-item label="上课时间:" label-width="45px">
            <el-input v-model="addInfo.sksj"></el-input>
          </el-form-item>
          <el-form-item label="限制人数:" label-width="45px">
            <el-input v-model="addInfo.xzrs"></el-input>
          </el-form-item>
        </el-form>
      </Modal>

      <Modal
        v-model="updateFormVisible"
        title="修改课程信息"
        @on-ok="alterCourse">
        <el-form :model="updateInfo">
          <el-form-item label="课号:" label-width="45px">
            <el-input v-model="updateInfo.kh"></el-input>
          </el-form-item>
          <el-form-item label="课名:" label-width="45px">
            <el-input v-model="updateInfo.km"></el-input>
          </el-form-item>
          <el-form-item label="学分:" label-width="45px">
            <el-input v-model="updateInfo.xf"></el-input>
          </el-form-item>
          <el-form-item label="工号:" label-width="45px">
            <el-input v-model="updateInfo.gh"></el-input>
          </el-form-item>
          <el-form-item label="上课时间:" label-width="45px">
            <el-input v-model="updateInfo.sksj"></el-input>
          </el-form-item>
          <el-form-item label="限制人数:" label-width="45px">
            <el-input v-model="updateInfo.xzrs"></el-input>
          </el-form-item>
        </el-form>
      </Modal>
    </div>
</template>

<script>
    import {listCourses, getDepartment} from '../api/api'
    export default {
      name: "CourseManagement",
      data() {
        return {
          yxm: '',
          addFormVisible: false,
          addInfo: {
            kh: '',
            km: '',
            xf: '',
            gh: '',
            sksj: '',
            xzrs: ''
          },
          courseInfo: [{

          }],
          options: [{

          }],
          updateFormVisible: false,
          updateInfo: {

          },

        }
      },
      methods: {
        async getDepartments () {
          this.options = (await getDepartment('list_yx')).data.retyxlist;
        },
        async getCourses () {
          this.courseInfo = (await listCourses('list_course', this.yxm)).data.retlist;
        },
        openUpdateForm (row) {
          this.updateInfo = JSON.parse(JSON.stringify(row));//深拷贝
          this.updateFormVisible = true;
        },
        async alterCourse () {
          this.$Notice.error({
            title: '功能尚未实现!',
            duration: 2,
          });
        },
        async addCourse () {
          let r = (await listCourses('add_course', this.addInfo)).data;
          if (r.ret === 0) {
            this.$Notice.success({
              title: r.message,
              duration: 2,
            });
            this.getCourses();
          }
          else {
            this.$Notice.error({
              title: r.message,
              duration: 2,
            });
          }
        },
        async delCourse (row) {
          const r = (await listCourses('del_course', row.kh)).data;
          if(r.ret === 0) {
            this.$Notice.success({
              title: r.msg,
              duration: 2,
            });
            this.getCourses();
          }
        }
      },
      mounted() {
        this.getDepartments();
      }
    }
</script>

<style scoped>
  .container {
    width: calc(100% - 200px);
    background-color: whitesmoke;
  }

  >>>.el-card {
    margin: 50px;
    color: #333333;
    padding: 30px 70px;
  }

</style>
