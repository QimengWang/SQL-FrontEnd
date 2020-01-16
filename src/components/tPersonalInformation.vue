<template>
  <div class="container">
    <el-form :label-position="labelPosition" :model="teaInfo" label-width="80px">
      <el-form-item label="工号:">
        <el-card shadow="hover" style="width: 300px; height: 50px;">
          {{teaInfo.gh}}
        </el-card>
      </el-form-item>
      <el-form-item label="姓名:">
        <el-card shadow="hover" style="width: 300px; height: 50px;">
          {{teaInfo.xm}}
        </el-card>
      </el-form-item>
      <el-form-item label="性别:">
        <el-card shadow="hover" style="width: 300px; height: 50px;">
          {{teaInfo.xb}}
        </el-card>
      </el-form-item>
      <el-form-item label="学历:">
        <el-card shadow="hover" style="width: 300px; height: 50px;">
          {{teaInfo.xl}}
        </el-card>
      </el-form-item>
      <el-form-item label="所在院系:">
        <el-card shadow="hover" style="width: 300px; height: 50px;">
          {{teaInfo.yx}}
        </el-card>
      </el-form-item>
    </el-form>
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
    margin-top: 30px;
    margin-left: 30px;
  }
</style>
