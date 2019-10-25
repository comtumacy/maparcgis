<template>
    <div class="adminLeftUserLook">
      <div class="header">
        <el-row :gutter="10" type="flex" justify="start">
          <el-col :span="6">
            <el-button class="button1" v-on:click="AllUser()">所有用户</el-button>
          </el-col>
          <el-col :span="6">
            <el-button v-on:click="addUserOpen()">添加用户</el-button>
          </el-col>
          <el-col :span="6">
            <el-button v-on:click="searchOpen()">搜索用户</el-button>
          </el-col>
          <el-col :span="6">
            <el-button v-on:click="deleteUser()">删除用户</el-button>
          </el-col>
          <el-col :span="6">
            <el-button v-on:click="StatisticsSignOpen()">用户统计</el-button>
          </el-col>
          <el-col :span="6">
            <el-button v-on:click="openAddDepartment()">添加科室</el-button>
          </el-col>
          <el-col :span="6">
            <el-button v-on:click="openDepartment()">科室选择</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="userTable">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          v-loading="loading"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="id"
            label="ID"
            width="50"
            align="center"
            header-align="center">
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名"
            width="150"
            align="center"
            header-align="center">
          </el-table-column>
          <el-table-column
            prop="department"
            label="所属科室"
            width="150"
            align="center"
            header-align="center">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="性 别"
            width="120"
            align="center"
            header-align="center">
          </el-table-column>
          <el-table-column
            prop="tel"
            label="电 话"
            width="170"
            align="center"
            header-align="center">
          </el-table-column>
          <el-table-column
            prop="lastlogintime"
            label="上次登陆时间"
            width="220"
            align="center"
            header-align="center">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="备 注"
            header-align="center"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            label="操 作"
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
          :total="totalNum"
          @current-change="handlePageCurrentChange">
        </el-pagination>
      </div>
      <transition :duration="{enter:900,leave:800}" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <adminLeftUserEditAddUser
          v-show="addUserSign"
          v-bind:addUserSign="addUserSign"
          @sent="addUserClose"
          @sentEditAdd="closeAndAdd">
        </adminLeftUserEditAddUser>
      </transition>
      <transition :duration="{enter:900,leave:800}" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <adminLeftUserSearch
          v-show="searchSign"
          v-bind:finish="searchFinish"
          @sent="searchClose"
          @closeAndSearch="closeAndSearch"
          @changeSign="changeSign">
        </adminLeftUserSearch>
      </transition>
      <transition :duration="{enter:900,leave:800}" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <adminLeftUserStatistics
          v-show="StatisticsSign">
        </adminLeftUserStatistics>
      </transition>
      <transition :duration="{enter:900,leave:800}" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <adminLeftUserEditAlert
          v-show="adminLeftUserEditAlertSign"
          v-bind:adminLeftUserEditAlertSign="adminLeftUserEditAlertSign"
          v-bind:row="row"
          @sent="UserEditClose"
          @sentEdit="closeAndEdit">
        </adminLeftUserEditAlert>
      </transition>
      <transition :duration="{enter:900,leave:800}" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <adminLeftUserAddDepartment
          v-show="adminLeftUserAddDepartmentSelectionSign"
          @sent="addDepartmentClose"
          @closeAndAddDepartment="closeAndAddDepartment">
        </adminLeftUserAddDepartment>
      </transition>
      <transition :duration="{enter:900,leave:800}" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <adminLeftUserDepartmentSelection
          v-show="adminLeftUserDepartmentSelectionSign"
          v-bind:adminLeftUserDepartmentSelectionSign="adminLeftUserDepartmentSelectionSign"
          @closeAndSelect="closeAndSelect"
          @sent="selectClose">
        </adminLeftUserDepartmentSelection>
      </transition>
    </div>
</template>

<script type="text/ecmascript-6">
import adminLeftUserEditAddUser from './adminLeftUserEditAddUser'
import adminLeftUserSearch from './adminLeftUserSearch'
import adminLeftUserStatistics from './adminLeftUserStatistics'
import adminLeftUserEditAlert from './adminLeftUserEditAlert'
import adminLeftUserAddDepartment from './adminLeftUserAddDepartment'
import adminLeftUserDepartmentSelection from './adminLeftUserDepartmentSelection'
export default {
  components: {
    adminLeftUserEditAddUser,
    adminLeftUserSearch,
    adminLeftUserStatistics,
    adminLeftUserEditAlert,
    adminLeftUserAddDepartment,
    adminLeftUserDepartmentSelection
  },
  // 提前获取用户信息表
  created () {
    this.initialization()
  },
  data () {
    return {
      tableData: {},
      multipleSelection: [],
      loading: true,
      addUserSign: false,
      searchSign: false,
      StatisticsSign: false,
      adminLeftUserEditAlertSign: false,
      adminLeftUserAddDepartmentSelectionSign: false,
      adminLeftUserDepartmentSelectionSign: false,
      searchFinish: false,
      pageSign: 1,
      totalNum: 0,
      row: {},
      nowPage: 1,
      searchDate: {},
      searchNum: 0,
      department: ''
    }
  },
  computed: {},
  methods: {
    // 选择所有用户数据
    AllUser () {
      this.$message.success('切换到显示全部用户信息')
      this.nowPage = 1
      this.initialization()
    },
    // 初始化数据
    initialization () {
      this.axios({
        method: 'post',
        url: 'http://yitongli.cn/api/admin/queryAllUser',
        withCredentials: false,
        headers: {
          'token': this.$store.getters.token_getters,
          'username': this.$store.getters.username_getters,
          'pagenum': this.nowPage
        }
      }).then(res => {
        this.totalNum = (res.headers.pagecount) * 10
        this.tableData = res.data
        this.loading = false
      }).catch(() => {
        this.$message({
          type: 'error',
          message: '获取数据失败，请刷新页面重新获取!'
        })
      })
      this.pageSign = 1
    },
    // 获取多选框选择值
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 表格的编辑事件
    handleClick (row) {
      this.adminLeftUserEditAlertSign = true
      this.row = row
    },
    // 表格编辑框关闭
    UserEditClose () {
      this.adminLeftUserEditAlertSign = false
    },
    // 表格编辑数据提交事件
    closeAndEdit (ruleForm, username) {
      this.adminLeftUserEditAlertSign = false
      this.axios({
        method: 'post',
        url: 'http://yitongli.cn/api/user/updateUserByName',
        data: {
          'user1': {
            'username': username
          },
          'user2': ruleForm
        },
        headers: {
          'token': this.$store.getters.token_getters,
          'username': this.$store.getters.username_getters
        }
      })
        .then(res => {
          if (res.status === 200) {
            this.$alert('用户信息已经修改成功！', '修改提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'success',
                  message: '已经修改成功'
                })
              }
            })
            this.initialization()
          } else {
            this.$message.error('修改失败，请检查你的网络')
          }
        })
        .catch(() => {
          this.$message.error('修改失败，请检查你的网络')
        })
    },
    // 表格的删除事件
    handleDelete (index) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios({
          method: 'post',
          url: 'http://yitongli.cn/api/admin/deleteUser',
          withCredentials: false,
          headers: {
            'token': this.$store.getters.token_getters,
            'username': this.$store.getters.username_getters
          },
          data: {
            'username': this.tableData[index].username
          }
        }).then(res => {
          this.tableData = res.data
          this.loading = false
        }).catch(() => {
          this.$message.error('删除失败，请检查你的网络')
        })
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
      this.pageSign = 1
    },
    // 回调当前所选择的页数，信号控制哪类数据的翻页
    handlePageCurrentChange (val) {
      this.nowPage = val
      if (this.pageSign === 1) {
        this.initialization()
      } else if (this.pageSign === 2) {
        this.selectSearchPageDate(val * 10)
      } else if (this.pageSign === 3) {
        this.closeAndSelect(this.department, val)
      }
    },
    // 显示添加用户框
    addUserOpen () {
      this.addUserSign = true
    },
    // 关闭添加用户框
    addUserClose () {
      this.addUserSign = false
    },
    // 给添加用户子组件一个完成传输信号，子组件清空输入框
    searchOpen () {
      this.searchSign = true
    },
    // 传输数据，添加用户
    closeAndAdd (ruleForm) {
      this.addUserSign = false
      this.axios({
        method: 'post',
        url: 'http://yitongli.cn/app/post_AddUser',
        data: ruleForm
      })
        .then(res => {
          if (res.data === '添加成功') {
            this.$alert('用户已经添加成功！', '添加提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'success',
                  message: '已经添加成功'
                })
              }
            })
          } else {
            this.$message.error('添加失败，请检查你的网络')
          }
        })
        .catch(() => {
          this.$message.error('添加失败，请检查你的网络')
        })
    },
    // 给查找用户子组件一个完成传输信号，子组件清空输入框
    searchClose () {
      this.searchSign = false
    },
    // 传输数据，查询搜索用户
    closeAndSearch (content) {
      this.nowPage = 1
      this.searchSign = false
      this.axios({
        method: 'post',
        url: 'http://yitongli.cn/api/user/fuzzyQuery',
        withCredentials: false,
        headers: {
          'token': this.$store.getters.token_getters,
          'username': this.$store.getters.username_getters
        },
        data: {
          keyword: content
        }
      })
        .then(res => {
          if (res.data.length !== 0) {
            this.searchDate = res.data
            this.searchNum = res.data.length
            this.totalNum = res.data.length
            if (res.data.length <= 10) {
              this.selectSearchPageDate(res.data.length)
            } else {
              this.selectSearchPageDate(10)
            }
            this.$message.success('查询成功，共查询到' + res.data.length + '条数据')
          } else {
            this.$message.error('查询失败，此关键字未查询到任何信息')
          }
          this.searchFinish = true
        })
        .catch(err => {
          console.log(err)
          this.$message.error('查询失败，请检查你的网络')
        })
      this.pageSign = 2
    },
    // 控制翻页后，此页所显示的搜索结果数据
    selectSearchPageDate (num) {
      let list = []
      if (num <= 10) {
        for (let i = 0; i < num; i++) {
          list.push(this.searchDate[i])
        }
        this.tableData = this.searchDate
      } else if (num > 10) {
        if (this.searchNum < num) {
          let thisPageNum = 10 - (num - this.searchNum)
          for (let i = 0; i < thisPageNum; i++) {
            list.push(this.searchDate[num - 10 + i])
            console.log(i)
          }
        } else if (this.searchNum === num) {
          for (let i = 0; i < 10; i++) {
            list.push(this.searchDate[num - 10 + i])
          }
        } else {
          for (let i = 0; i < this.searchNum % 10; i++) {
            list.push(this.searchDate[num + i])
          }
        }
      }
      this.tableData = list
    },
    // 删除所选的用户
    deleteUser () {
      let num = this.multipleSelection.length
      if (num === 0) {
        this.$message({
          type: 'info',
          message: '请勾选需要删除的用户'
        })
      } else {
        this.$confirm(`此操作将永久删除您已经选择的 ${num} 个用户, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          for (let i = 0; i < num; i++) {
            this.axios({
              method: 'post',
              url: 'http://yitongli.cn/api/admin/deleteUser',
              withCredentials: false,
              headers: {
                'token': this.$store.getters.token_getters,
                'username': this.$store.getters.username_getters
              },
              data: {
                'username': this.multipleSelection[i].username
              }
            }).then(res => {
              this.tableData = res.data
              this.loading = false
            }).catch(() => {
              this.$message.error('删除失败，请检查你的网络')
            })
          }
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
      this.pageSign = 1
    },
    // 打开用户统计
    StatisticsSignOpen () {
      this.StatisticsSign = !this.StatisticsSign
    },
    // 打开添加科室
    openAddDepartment () {
      this.adminLeftUserAddDepartmentSelectionSign = true
    },
    // 关闭添加科室
    addDepartmentClose () {
      this.adminLeftUserAddDepartmentSelectionSign = false
    },
    // 添加科室
    closeAndAddDepartment (ruleForm) {
      console.log(ruleForm)
      this.addUserSign = false
      this.axios({
        method: 'post',
        url: 'http://yitongli.cn/api/department/insert',
        data: { 'department': ruleForm },
        headers: {
          'token': this.$store.getters.token_getters,
          'username': this.$store.getters.username_getters
        }
      })
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            this.$message({
              message: res.data.message,
              type: 'success'
            })
            this.adminLeftUserAddDepartmentSelectionSign = false
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch(() => {
          this.$message.error('添加失败，请检查你的网络')
        })
    },
    // 打开科室选择
    openDepartment () {
      this.adminLeftUserDepartmentSelectionSign = true
    },
    // 关闭科室选择
    selectClose () {
      this.adminLeftUserDepartmentSelectionSign = false
    },
    // 查找科室数据
    closeAndSelect (val, page) {
      this.department = val
      this.axios({
        method: 'post',
        url: 'http://yitongli.cn/api/user/queryByDepartment',
        withCredentials: false,
        headers: {
          'token': this.$store.getters.token_getters,
          'username': this.$store.getters.username_getters,
          'pagenum': page
        },
        data: { 'department': val }
      }).then(res => {
        this.totalNum = res.headers.pagecount * 10
        this.tableData = res.data
        this.loading = false
        console.log(res)
      }).catch(err => {
        console.log(err)
        this.$message({
          type: 'error',
          message: '获取数据失败，请刷新页面重新获取!'
        })
      })
      this.adminLeftUserDepartmentSelectionSign = false
      this.pageSign = 3
    }
  },
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.adminLeftUserLook
  position fixed
  top 100px
  left 250px
  right 50px
  .header
    width 100%
    background-color rgb(210,219,234)
    .el-row
      padding 10px 0 10px 0
      .el-col
        width auto
        .button1
          margin-left 10px
  .userTable
    .el-table
      z-index 0
  .adminLeftUserEditAddUser
    position fixed
    top 24%
    left 30%
  .adminLeftUserSearch
    position fixed
    top 24%
    left 30%
  .adminLeftUserStatistics
    position fixed
    top 24%
    left 40%
  .adminLeftUserEditAlert
    position fixed
    top 24%
    left 30%
  .adminLeftUserAddDepartment
    position fixed
    top 24%
    left 30%
  .adminLeftUserDepartmentSelection
    position fixed
    top 24%
    left 30%
</style>
