<template>
  <div class="container">
    <el-card>

      <div class="con1">
        <el-form ref="form" :inline="true">
          <el-form-item>
            <h3>请选择课程名：</h3>
          </el-form-item>
          <el-form-item>
            <el-select v-model="kh" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.kh"
                :label="item.km"
                :value="item.kh">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="selectCourseByName">确定</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="con2">

        <div class="con3">
          <el-form>
            <el-form-item>
              <h3>已选修此课程的学生：</h3>
            </el-form-item>
            <el-form-item style="margin-left: 20px">
              <el-table
                :data="tableData"
                style="width: 50%">
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
                  prop="zpcj"
                  label="成绩"
                  width="100">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="100">
                  <template slot-scope="scope">
                    <el-button @click="openUpdateForm(scope.row)" type="text" size="small" style="font-weight: bold">录入/修改成绩</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>
          </el-form>
        </div>

        <div class="con4">
          <el-form>
            <el-form-item>
              <h3>成绩分布：</h3>
            </el-form-item>
            <el-form-item>
              <div id="echarts" style="width: 50%; height: 300px">
              </div>
            </el-form-item>
          </el-form>
        </div>

      </div>

    </el-card>

    <Modal
      v-model="updateFormVisible"
      title="录入/修改成绩"
      @on-ok="updateGrade">
      <el-form :model="updateData">
        <el-form-item label="学号:" label-width="45px">
          <el-input v-model="updateData.xh" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名:" label-width="45px">
          <el-input v-model="updateData.xm" disabled></el-input>
        </el-form-item>
        <el-form-item label="成绩:" label-width="45px">
          <el-input v-model="updateData.zpcj"></el-input>
        </el-form-item>
      </el-form>
    </Modal>
  </div>
</template>

<script>
  import {gradeManage} from '../api/api'
    export default {
        name: "GradeManagement",
      data() {
          return {
            options: [{

            }],
            kh: '',
            tableData: [{

            }],
            action: '',
            updateFormVisible: false,
            updateData: {
              xh: '',
              xm: '',
              zpcj: '',
              kh: '',
            },
          }
      },
      methods: {
          async getCourse() {
            this.action = 'list_my_course';
            const d = (await gradeManage(this.action)).data;
            this.options = d.retlist;
          },
          async selectCourseByName() {
            this.action = 'list_students';
            const d = (await gradeManage(this.action,this.kh)).data;
            this.tableData = d.retlist;
          },
          openUpdateForm(row) {
            this.updateData = JSON.parse(JSON.stringify(row));
            this.updateFormVisible = true;
          },
          async updateGrade () {
            this.action = 'post_grade';
            this.updateData.kh = this.kh;
            const d = (await gradeManage(this.action, this.updateData)).data;
            if(d.ret === 0) {
              console.log(d.msg);
              this.$Notice.success({
                title: d.msg,
                duration: 2,
              });
            }
            this.selectCourseByName();
         },
        drawCharts () {
          var dom = document.getElementById('echarts');
          var myChart = this.echarts.init(dom);
          // 绘制图表
          myChart.setOption({
            title: {
              text: '成绩分布',
              show: false,
            },
            grid: {
              // show: true,
            },
            xAxis: {
              show: true,
              name: '绩点',
              type: 'category',
              data: ['<1.0', '1.0', '2.0', '2.7', '3.0', '3.7', '4.0'],
            },
            yAxis: {
              show: true,
              name: '人数',
            },
            series: {
              type: 'bar',
              data: [1, 0, 6, 9, 2, 10, 9]

            }

          });

        },

      },
      mounted() {
          this.getCourse();
          this.drawCharts();
      }
    }
</script>

<style scoped>
  .container {
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  >>>.el-card {
    margin-top: 50px;
    margin-left: 50px;
    margin-bottom: 100px;
    width: 77%;
    color: #333333;
    text-align: left;
  }

  .con1 {
    margin-left: 20px;
    margin-top: 20px;
  }

  .con2 {
    margin-left: 20px;
    margin-top: 20px;
    width: 100%;
  }

  con3 {
  }

  .con4 {
  }
</style>
