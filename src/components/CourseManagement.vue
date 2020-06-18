<template>
    <div class="container">
      <el-card>
        <h1>课程管理</h1>
        <el-button type="primary" @click="addFormVisible = true">开课</el-button>
        <el-button type="primary" @click="delCourse">删除课程</el-button>
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
    import {listCourses} from '../api/api'
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

        }
      },
      methods: {
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
        async delCourse () {
          this.$Notice.error({
            title: "功能尚未实现！",
            duration: 2,
          });
        }
      },
      mounted() {

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

  >>>.el-button {
    margin-top: 10px;
  }
</style>
