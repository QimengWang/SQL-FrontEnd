<template>
  <div class="container">
    <el-card>
      <h1>学期管理</h1>
      <div style="margin-top: 50px;">
        <el-form ref="form" :inline="true" style="width: 100%">
          <el-form-item>
            <h3>设置当前学期：</h3>
          </el-form-item>
          <el-form-item>
            <el-select v-model="setTerm" placeholder="请选择">
              <el-option
                v-for="item in termInfo"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="set">确定</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div style="margin-top: 30px;">
        <el-form ref="form" :inline="true" style="width: 100%">
          <el-form-item>
            <h3>添加学期：</h3>
          </el-form-item>
          <el-form-item>
            <el-input v-model="addTerm"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="add">确定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
  import {getTerms, setTerm, addTerm} from "../api/api";
    export default {
      name: "TermManagement",
      data () {
          return {
            termInfo: [],
            addTerm: '',
            setTerm: ''
          }
      },
      methods: {
        async getTermOpt () {
          this.termInfo = (await getTerms('list_term')).data.retlist;
          console.log(this.termInfo);
        },
        async set () {
          const r = (await setTerm('set_term', this.setTerm)).data;
          if(r.ret === 0) {
            this.$Notice.success({
              title: r.message,
              duration: 2,
            });
          }
        },
        async add () {
          const r = (await addTerm('add_term', this.addTerm)).data;
          if(r.ret === 0) {
            this.$Notice.success({
              title: r.message,
              duration: 2,
            });
            this.addTerm = '';
            this.getTermOpt();
          }
        }
      },
      mounted() {
        this.getTermOpt();
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
