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
              <el-select v-model="yx" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.yx"
                  :label="item.yx"
                  :value="item.yx">
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
    </div>
</template>

<script>
    import {listCourses, getDepartment} from '../api/api'
    export default {
      name: "CourseManagement",
      data() {
        return {
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

        }
      },
      methods: {
        async getDepartments () {
          this.options = (await getDepartment).data.retlist;
        },
        async getCourses () {

        },
        openAddForm () {
          this.addFormVisible = true;
        },
        async addCourse () {
          let r = (await listCourses('add_course', this.addInfo)).data;
          if (r.ret === 0) {
            this.$Notice.success({
              title: r.message,
              duration: 2,
            });
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
