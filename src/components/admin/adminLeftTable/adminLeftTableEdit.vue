<template>
  <div class="layersTable">
    <div>
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
          :resizable="false"
          show-overflow-tooltip>
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
          prop="date"
          label="修改时间"
          width="170"
          header-align="center"
          align="center"
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
        <el-table-column
          label="操作"
          width="160"
          header-align="center"
          align="center"
          :resizable="false">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
            <el-button @click="handleDelete(scope.$index)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next, jumper"
        :total="totalPage"
        @current-change="handlePageCurrentChange">
      </el-pagination>
    </div>
    <div class="editAlert">
      <transition :duration="{enter:900,leave:800}" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <adminLeftTableEditAlert v-bind:sign="sign" v-show="sign" v-bind:row="row" @sent="close" @sentEdit="closeAndEdit"></adminLeftTableEditAlert>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import adminLeftTableEditAlert from './adminLeftTableEditAlert'
export default {
  components: {
    adminLeftTableEditAlert
  },
  created () {
    this.axios.post('http://yitongli.cn/app/get_layers')
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
      sign: false,
      totalPage: 10,
      row: {}
    }
  },
  methods: {
    // 回调当前所选择的页数
    handlePageCurrentChange (val) {
      console.log('当前页:' + val)
    },
    // 表格编辑事件
    handleClick (row) {
      this.sign = true
      this.row = row
      // this.$store.dispatch('row_actions', row)
    },
    // 关闭表格框
    close () {
      this.sign = false
    },
    // 关闭表格框且提交修改数据
    closeAndEdit (ruleForm) {
      this.sign = false
      this.axios.post('http://yitongli.cn/app/post_layers', { ruleForm })
        .then(res => {
          if (res.data === '修改成功') {
            this.$alert('内容已经修改成功！', '修改提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'success',
                  message: '已经修改成功'
                })
              }
            })
          } else {
            this.$message.error('修改失败，请检查你的网络')
          }
        })
        .catch(() => {
          this.$message.error('修改失败，请检查你的网络')
        })
    },
    // 删除当前图层
    handleDelete (index) {
      console.log(index)
      this.$confirm('此操作将永久删除该图层, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.initialization()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
  .el-table
    z-index 0
  .editAlert
    position fixed
    top 24%
    left 30%
</style>
