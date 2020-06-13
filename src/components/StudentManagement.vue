<template>
<div class="container">
  <el-card>
    <h1>学生信息管理</h1>
    <el-table
      :data="stuInfo"
      tooltip-effect="dark"
      style="width: 100%; margin-top: 30px">
      <el-table-column
        prop="xh"
        label="学号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="xm"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="nl"
        label="年龄"
        width="100">
      </el-table-column>
      <el-table-column
        prop="xb"
        label="性别"
        width="100">
      </el-table-column>
      <el-table-column
        prop="sjhm"
        label="手机号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="yx"
        label="学院"
        width="180">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="openUpdateForm(scope.row)" type="text" size="small" style="font-weight: bold">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" style="float: left; margin-top: 20px" @click="openAddForm()">添加</el-button>
  </el-card>

  <Modal
    v-model="updateFormVisible"
    title="修改学生信息"
    @on-ok="alterInfo">
    <el-form :model="updateInfo">
      <el-form-item label="学号:" label-width="45px">
        <el-input v-model="updateInfo.xh" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名:" label-width="45px">
        <el-input v-model="updateInfo.xm"></el-input>
      </el-form-item>
      <el-form-item label="性别:" label-width="45px">
        <el-input v-model="updateInfo.xb"></el-input>
      </el-form-item>
      <el-form-item label="年龄:" label-width="45px">
        <el-input v-model="updateInfo.nl"></el-input>
      </el-form-item>
      <el-form-item label="手机号码:" label-width="45px">
        <el-input v-model="updateInfo.sjhm"></el-input>
      </el-form-item>
      <el-form-item label="学院:" label-width="45px">
        <el-input v-model="updateInfo.yx"></el-input>
      </el-form-item>
    </el-form>
  </Modal>

  <Modal
    v-model="addFormVisible"
    title="增加学生"
    @on-ok="addStudents">
    <el-form :model="addInfo">
      <el-form-item label="学号:" label-width="45px">
        <el-input v-model="addInfo.xh"></el-input>
      </el-form-item>
      <el-form-item label="姓名:" label-width="45px">
        <el-input v-model="addInfo.xm"></el-input>
      </el-form-item>
      <el-form-item label="年龄:" label-width="45px">
        <el-input v-model="addInfo.nl"></el-input>
      </el-form-item>
      <el-form-item label="性别:" label-width="45px">
        <el-input v-model="addInfo.xb"></el-input>
      </el-form-item>
      <el-form-item label="手机号码:" label-width="45px">
        <el-input v-model="addInfo.sjhm"></el-input>
      </el-form-item>
      <el-form-item label="密码:" label-width="45px">
        <el-input v-model="addInfo.mm"></el-input>
      </el-form-item>
      <el-form-item label="学院:" label-width="45px">
        <el-input v-model="addInfo.yx"></el-input>
      </el-form-item>
    </el-form>
  </Modal>
</div>
</template>

<script>
  import {listStudents} from '../api/api'
    export default {
      name: "StudentManagement",
      data () {
        return {
          action: '',
          data: {
            studentId: '',
            newData: {

            }
          },
          stuInfo: [{
            xh: '',
            xm: '',
            xb: '',
            yx: '',
            nl: '',
            sjhm: ''
          }],
          updateInfo: {
            xh: '',
            xm: '',
            xb: '',
            yx: '',
            nl: '',
            sjhm: ''
          },
          addInfo: {
            xh: '',
            xm: '',
            nl: '',
            xb: '',
            sjhm: '',
            mm: '',
            yx: ''
          },
          updateFormVisible: false,
          addFormVisible: false,
          r: 0,
        }
      },
      methods: {
        async getStuInfo () {
          this.action = 'list_students';
          let d = (await listStudents(this.action)).data;
          // console.log(d);
          this.stuInfo = d.retstudentlist;
        },
        async openUpdateForm (row) {
          // this.r = row;
          this.updateInfo = JSON.parse(JSON.stringify(row));//深拷贝
          this.updateFormVisible = true;
        },
        async alterInfo () {
          this.action = 'alter_info';
          this.data.studentId = this.updateInfo.xh;
          const d = this.stuInfo[0];
          let flag = 0;//防止出现没有任何修改但是仍向后端发送请求的情况
          for (let propName in this.updateInfo) {
            // console.log(this.updateInfo[propName]);
            if (this.updateInfo[propName] !== d[propName]) {
              flag = 1;
              console.log("new:" + propName + this.updateInfo[propName]);
              this.data.newData[propName] = this.updateInfo[propName];
            }
          }
          // console.log(this.data.newData);
          // for (let p in this.data.newData) {
          //   console.log(p + ": " + this.data.newData[p]);
          // }
          let ret = -1;
          if(flag === 1) {
            ret = (await listStudents(this.action, this.data)).data.ret;
          }
          if (ret === 0) {
            // console.log("Ok!");
            this.$Notice.success({
              title: "修改成功！",
              duration: 2,
            });
            this.data.newData = null;
            this.getStuInfo();
          }
          else if (ret === -1){
            this.$Notice.warning({
              title: "未修改！",
              duration: 2,
            });
          }
          else {
            this.$Notice.error({
              title: "修改失败！",
              duration: 2,
            });
          }
        },
        async openAddForm () {
          this.addFormVisible = true;
        },
        async addStudents () {
          this.action = 'add_student';
          let r = (await listStudents(this.action, this.addInfo)).data;
          if (r.ret === 0) {
            this.$Notice.success({
              title: r.message,
              duration: 2,
            });
            // this.addInfo = null;
            this.getStuInfo();
          }
          else {
            this.$Notice.error({
              title: "添加失败！",
              duration: 2,
            });
          }
        }
      },
      async mounted () {
        this.getStuInfo();
      }
    }
</script>

<style scoped>
  .container {
    width: calc(100% - 200px);
    /*height: auto;*/
    height: calc(100vh - 60px);
    background-color: whitesmoke;
  }

  >>>.el-card {
    margin: 50px;
    color: #333333;
    padding: 30px 70px;
  }


</style>
