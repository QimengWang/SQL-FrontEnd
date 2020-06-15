<template>
  <div class="container">
  <el-card>
    <el-button v-print="'#Table'" id="button">打印</el-button>
    <div class="class-table">
      <div class="table-wrapper">
        <div class="tabel-container">


          <table id="Table">
            <thead>
            <tr>
              <th>时间</th>
              <th v-for="(weekNum, weekIndex) in classTableData.courses.length" :key="weekIndex"> {{'周' + digital2Chinese(weekIndex+1, 'week')}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(lesson, lessonIndex) in classTableData.lessons" :key="lessonIndex">
              <td>
                <p>{{'第' + digital2Chinese(lessonIndex+1) + "节"}}</p>
                <p class="period">{{ lesson }}</p>
              </td>

              <td v-for="(course, courseIndex) in classTableData.courses" :key="courseIndex">
                {{classTableData.courses[courseIndex][lessonIndex] || '-'}}
              </td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>




  </el-card>
    </div>

</template>

<script>

  import {classTable} from "../api/api";

  export default {
    data() {
      return {
        classTableData: {
          lessons: [],
          courses: [
            ['', '', '', '', '', '', '', '','','','','',''],
            ['', '', '', '', '', '', '', '','','','','',''],
            ['', '', '', '', '', '', '', '','','','','',''],
            ['', '', '', '', '', '', '', '','','','','',''],
            ['', '', '', '', '', '', '', '','','','','',''],
          ]
        }

      };
    },
    created() {
      // /* mock随机数据*/
      // Mock.mock({
      //     lessons: ['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'],
      //     'courses|7': [['生物', '物理', '化学', '政治', '历史', '英语', '', '语文']]
      // });
    },
    methods: {
      /**
       * 数字转中文
       * @param {Number} num 需要转换的数字
       * @param {String} identifier 标识符
       * @returns {String} 转换后的中文
       */
      digital2Chinese(num, identifier) {
        const character = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二','十三'];
        return identifier === 'week' && (num === 0 || num === 7) ? '日' : character[num];
      } ,
      async getData() {
                   this.classTableData = (await classTable()).data;
      }
    } ,
    async mounted() {
          this.getData();
    }
  };
</script>

<style  scoped>
  .container{
     width: calc(100% - 200px);
     /*height: calc(100vh - 60px);*/
     background-color: whitesmoke;
  }
  .table-wrapper {
          width: 100%;
          height: 100%;
          overflow: auto;
   }
  /*。table-container{*/
  /*        margin:7px;*/
  /*}*/
   table {
     table-layout: fixed;
     width: 100%;
   }
   thead {
     background-color: #333333;
   }
   th {
        color: #fff;
        line-height: 40px;
        font-weight: normal;
   }
   tbody {
       background-color:whitesmoke;
   }
   td {
         color: #333333;
         line-height: 20px;
   }
  >>>.el-card {
    margin: 50px;
    /*margin-left: 50px;*/
    /*margin-right: 50px;*/
    /*margin-top: 50px;*/
    color: #333333;
  }
  #button {
    width: 100px;
    /*background-color: #545c64;*/
    font-weight: bold;
    background-color:#333333;
    color: whitesmoke;
    margin-bottom: 10px;
    float: right;


  }

</style>
