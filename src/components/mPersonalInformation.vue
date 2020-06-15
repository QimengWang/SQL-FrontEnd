<template>
  <div class="container">
    <el-card>
      <h1 style="margin-top: 10px">基本信息</h1>
      <el-form :model="mPersonalInfo" label-width="100px">
        <el-form-item label="姓名">
          {{mPersonalInfo.xm}}
        </el-form-item>
        <el-form-item label="工号">
          {{mPersonalInfo.gh}}
        </el-form-item>
        <el-form-item label="性别">
          {{mPersonalInfo.xb}}
        </el-form-item>
        <el-form-item label="手机号码">
          {{mPersonalInfo.sjhm}}
        </el-form-item>
        <el-form-item label="邮箱地址">
          {{mPersonalInfo.yxdz}}
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import {mPersonalInfo, tPersonalInfo} from "../api/api";

  export default {
    name: "mPersonalInformation",
    data() {
      return {
        labelPosition: 'right',
        mPersonalInfo: {},
      }
    },
    methods: {
      async getData() {
        this.mPersonalInfo = (await mPersonalInfo()).data;
      },
    },
    async mounted() {
      this.getData();
    }
  }
</script>

<style scoped>
  .container {
    height: 100%;
    width: calc(100% - 200px);
    background-color: whitesmoke;
  }

  >>> .el-form {
    margin-top: 30px;
    width: 40%;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  >>> .el-form-item__label {
    color: #333333;
    font-weight: bold;
  }

  >>> .el-card {
    margin: 50px 50px 180px;
    color: #333333;
  }
  </style>
