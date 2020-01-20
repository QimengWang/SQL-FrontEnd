<template>
  <div class="container">
    <el-card>
      <h1 style="margin-top: 10px">我的信息</h1>
      <el-form :model="teaInfo" label-width="100px">
        <el-form-item label="工号:">
          {{teaInfo.gh}}
        </el-form-item>
        <el-form-item label="姓名:">
          {{teaInfo.xm}}
        </el-form-item>
        <el-form-item label="学历:">
          {{teaInfo.xl}}
        </el-form-item>
        <el-form-item label="性别:">
          {{teaInfo.xb}}
        </el-form-item>
        <el-form-item label="所在院系:">
          {{teaInfo.yx}}
        </el-form-item>
      </el-form>
    </el-card>
  </div>


</template>

<script>
  import {tPersonalInfo} from "../api/api";

  export default {
    name: "tPersonalInformation",
    data () {
      return {
        labelPosition: 'right',
        teaInfo: {},
      }
    },
    methods:{
      async getData() {
        let d = (await tPersonalInfo()).data;
        console.log(d);
        this.teaInfo = d;
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
    width: 100%;
  }

  >>>.el-card {
    margin-top: 50px;
    margin-left: 50px;
    margin-bottom: 50px;
    width: 77%;
    color: #333333;
  }

  >>>.el-form {
    margin-top: 30px;
    width: 40%;
    float: left;
    margin-left: 30%;
  }

  >>>.el-form-item__label{
    color: #333333;
    font-weight: bold;
  }
</style>
