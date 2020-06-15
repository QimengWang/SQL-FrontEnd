<template>
  <div class="container">
    <el-card>
      <h1>教师信息管理</h1>
      <el-table
        :data="teaInfo"
        tooltip-effect="dark"
        style="width: 100%; margin-top: 30px">
        <el-table-column
          prop="gh"
          label="工号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="xm"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="xl"
          label="职位"
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
            <el-button @click="deleteTea(scope.row)" type="text" size="small" style="font-weight: bold">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary" style="float: left; margin-top: 30px" @click="openAddForm">添加</el-button>
    </el-card>

    <Modal
      v-model="updateFormVisible"
      title="修改教师信息"
      @on-ok="alterInfo">
      <el-form :model="updateInfo">
        <el-form-item label="工号:" label-width="45px">
          <el-input v-model="updateInfo.gh" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名:" label-width="45px">
          <el-input v-model="updateInfo.xm"></el-input>
        </el-form-item>
        <el-form-item label="性别:" label-width="45px">
          <el-input v-model="updateInfo.xb"></el-input>
        </el-form-item>
        <el-form-item label="职位:" label-width="45px">
          <el-input v-model="updateInfo.xl"></el-input>
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
      title="增加教师"
      @on-ok="addTeachers">
      <el-form :model="addInfo">
        <el-form-item label="工号:" label-width="45px">
          <el-input v-model="addInfo.gh"></el-input>
        </el-form-item>
        <el-form-item label="姓名:" label-width="45px">
          <el-input v-model="addInfo.xm"></el-input>
        </el-form-item>
        <el-form-item label="职位:" label-width="45px">
          <el-input v-model="addInfo.xl"></el-input>
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
  import {listTeachers} from '../api/api'
  export default {
    name: "TeacherManagement",
    data () {
      return {
        action: '',
        data: {
          teacherId: '',
          newData: {

          }
        },
        teaInfo: [{
          gh: '',
          xm: '',
          xb: '',
          yx: '',
          xl: '',
          sjhm: ''
        }],
        updateInfo: {
          gh: '',
          xm: '',
          xb: '',
          yx: '',
          xl: '',
          sjhm: ''
        },
        addInfo: {
          gh: '',
          xm: '',
          xl: '',
          xb: '',
          sjhm: '',
          mm: '',
          yx: ''
        },
        copy: {

        },
        updateFormVisible: false,
        addFormVisible: false,
        r: 0,
      }
    },
    methods: {
      async getTeaInfo () {
        this.action = 'list_teachers';
        let d = (await listTeachers(this.action)).data;
        this.teaInfo = d.retteacherlist;
      },
      async openUpdateForm (row) {
        // this.r = row;
        this.updateInfo = JSON.parse(JSON.stringify(row));//深拷贝
        this.copy = row;
        this.updateFormVisible = true;
      },
      async alterInfo () {
        this.action = 'alter_info';
        this.data.teacherId = this.updateInfo.gh;
        let flag = 0;//防止出现没有任何修改但是仍向后端发送请求的情况
        for (let propName in this.updateInfo) {
          // console.log(this.updateInfo[propName]);
          if (this.updateInfo[propName] !== this.copy[propName]) {
            flag = 1;
            console.log("new:" + propName + this.updateInfo[propName]);
            this.data.newData[propName] = this.updateInfo[propName];
          }
        }
        let ret = -1;
        if(flag === 1) {
          ret = (await listTeachers(this.action, this.data)).data.ret;
        }
        if (ret === 0) {
          // console.log("Ok!");
          this.$Notice.success({
            title: "修改成功！",
            duration: 2,
          });
          // 遍历data.newData,删除其可枚举属性，防止干扰后续修改
          for (let p in this.data.newData) {
            delete this.data.newData[p];
          }
          this.getTeaInfo();
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
      async addTeachers () {
        this.action = 'add_teacher';
        let r = (await listTeachers(this.action, this.addInfo)).data;
        if (r.ret === 0) {
          this.$Notice.success({
            title: r.message,
            duration: 2,
          });
          this.getTeaInfo();
        }
        else {
          this.$Notice.error({
            title: "添加失败！",
            duration: 2,
          });
        }
      },
      async deleteTea (row) {
        this.$confirm('此操作将删除该教师, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          this.action = 'del_teacher';
          this.data.teacherId = row.gh;
          const r = (await listTeachers(this.action, this.data)).data;
          if(r.ret === 0) {
            this.$message({
              type: 'success',
              message: r.msg + "!"
            });
            this.getTeaInfo();
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

      },
    },
    async mounted () {
      this.getTeaInfo();
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
