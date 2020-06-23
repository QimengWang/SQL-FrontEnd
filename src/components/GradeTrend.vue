<template>
  <div class="container">
    <el-card>
      <h1>成绩走势</h1>
      <div id="echarts" style="height: 300px;"></div>
    </el-card>
  </div>
</template>

<script>
  import {getTerms, getAllGrade} from "../api/api";

  export default {
    name: "GradeTrend",
    data () {
      return {
        grades: [],
        terms: [],
        array: [],
        i: 0,
      }
    },
    methods: {
      drawChart () {
        let dom = document.getElementById('echarts');
        let myChart = this.echarts.init(dom);
        // 绘制图表
        myChart.setOption({
          title: {
            text: '成绩走势',
            show: false,
          },
          grid: {
            // show: true,
          },
          xAxis: {
            show: true,
            name: '学期',
            type: 'category',
            data: this.terms,
          },
          yAxis: {
            show: true,
            type: 'value',
            name: '绩点',
          },
          series: {
            type: 'line',
            data: this.grades,
          }
        });
      },
      compare(value1, value2) {
        const a = Number(value1.slice(0, 4));
        const b = Number(value2.slice(0, 4));
        // console.log(a);
        // console.log(b);
        if(a < b) {//不用交换顺序
          // console.log('不交换');
          this.array.push(-1);
          return -1;
        }
        else if(a > b){
          // console.log("交换");
          this.array.push(1);
          return 1;
        }
        else {//学期年份一样，看倒数第两个字
          const v1 = value1.slice(10, 11);
          const v2 = value2.slice(10, 11);
          // console.log(v1);
          // console.log(v2);
          if(v1 === '秋' || v2 === '夏') {
            // console.log("不交换");
            this.array.push(-1);
            return -1;
          }
          if(v2 === '秋' || v1 === '夏') {
            // console.log("交换");
            this.array.push(1);
            return 1;
          }
          if(v1 === '冬') {
            // console.log("不交换");
            this.array.push(-1);
            return -1;
          }
          else {
            // console.log("交换");
            this.array.push(1);
            return 1;
          }
        }
      },
      adjust (value1, value2) {
        return this.array[this.i++];
      }
    },
    async mounted() {
      this.terms = (await getTerms('list_term')).data.retlist;
      // console.log(this.terms);
      this.grades = (await getAllGrade()).data.retlist;
      // console.log(this.grades);
      this.terms.sort(this.compare);
      // console.log(this.terms);
      // console.log(this.array);
      this.grades.sort(this.adjust);
      // console.log(this.grades);
      this.drawChart();
      this.i = 0 ;
      this.array = [];
    }
  }
</script>

<style scoped>
  .container {
    width: calc(100% - 200px);
  }

  >>>.el-card {
    margin: 50px;
    color: #333333;
  }
</style>
