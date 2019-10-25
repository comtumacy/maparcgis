<template>
    <div class='adminLeftUserStatistics'>
      <div class="chart" ref='chart'></div>
    </div>
</template>

<script type='text/ecmascript-6'>
export default {
  components: {},
  props: ['StatisticsRefreshSign'],
  created () {
  },
  data () {
    return {}
  },
  computed: {},
  watch: {
    StatisticsRefreshSign () {
      console.log('ok')
      this.drawLine()
    }
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(this.$refs.chart)
      // 绘制图表
      myChart.setOption({
        title: {
          text: '各部门人数统计（demo）',
          textStyle:
            { fontSize: 25 }
        },
        legend: {
          data: ['人数'],
          top: 10,
          right: 15
        },
        tooltip: {},
        xAxis: {
          data: ['超管', '工程科', '建设科', '智研中心', '其他']
        },
        yAxis: {},
        series: [{
          name: '人数',
          type: 'bar',
          data: [5, 20, 36, 10, 10],
          'color': ['rgb(4,169,243)']
        }
        ]
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.drawLine()
    })
  },
  updated () {
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.adminLeftUserStatistics
  .chart
    width 400px
    height 400px
    background-color rgb(249,249,251)
    border-radius 20px
    z-index 130
    box-shadow: 5px 5px 10px #888888
</style>
