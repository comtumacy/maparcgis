<template>
  <div class="layersTable">
    <el-table
      :data="data"
      border
      v-loading="loading"
      style="{'width': 100%}">
      <el-table-column
        prop="id"
        label="ID"
        width="80"
        header-align="center"
        align="center"
        :resizable="false">
      </el-table-column>
      <el-table-column
        prop="name"
        label="图层名称"
        width="120"
        header-align="center"
        :resizable="false">
      </el-table-column>
      <el-table-column
        prop="url"
        label="url"
        header-align="center"
        :resizable="false">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="170"
        header-align="center"
        :resizable="false">
      </el-table-column>
      <el-table-column
        prop="key_value"
        label="键值对"
        width="170"
        header-align="center"
        :resizable="false">
      </el-table-column>
      <el-table-column
        prop="copyright"
        label="版权"
        width="120"
        header-align="center"
        align="center"
        :resizable="false">
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next, jumper"
        :total="totalPage"
        @current-change="handlePageCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  created () {
    this.axios.post('http://yitongli.cn/app/get_layers',
      { timeout: 1000 })
      .then(res => {
        this.data = res.data
        this.loading = false
      })
      .catch(() => {
        this.$message.error('获取数据失败，请检查你的网络')
      })
  },
  data () {
    return {
      data: {},
      loading: true,
      totalPage: 10
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    handleDelete (index) {
      console.log(index)
    },
    // 回调当前所选择的页数
    handlePageCurrentChange (val) {
      console.log('当前页:' + val)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.layersTable
  position fixed
  top 100px
  left 250px
  right 50px
</style>
