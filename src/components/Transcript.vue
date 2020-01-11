<template>
  <div>
    <h1>?????</h1>

    <div class="tableCon">
          <el-table
            :data="bookInfo"
            style="width: 100%">
            <el-table-column
              prop="book_name"
              label="书名"
              width="150">
            </el-table-column>
            <el-table-column
              prop="add_time"
              label="添加时间"
              width="150">
            </el-table-column>
          </el-table>
    </div>

  </div>


</template>

<script>
  import {} from "../api/api";

  export default {
        name: "Transcript",
    data () {
          return {
            bookInfo:[{

            }],

          }
        },
        methods:{
          async getData(){

          }

        },
    async mounted(){
          this.getData();
    }
    }
</script>

<style scoped>

</style>
