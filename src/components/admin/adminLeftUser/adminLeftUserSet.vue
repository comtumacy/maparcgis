<template>
    <div class="adminLeftUserSet">
      <div class="header">
        <el-row :gutter="10" type="flex" justify="start">
          <el-col :span="6">
            <el-button class="button1" v-on:click="changeIconOpen()">修改头像</el-button>
          </el-col>
          <el-col :span="6">
            <el-button v-on:click="changeMineOpen()">账号设置</el-button>
          </el-col>
        </el-row>
      </div>
      <adminLeftUserSetIcon
        v-show="IconSign"
        @sentEdit="sentEdit"></adminLeftUserSetIcon>
      <adminLeftUserSetMine v-show="mineSign"></adminLeftUserSetMine>
    </div>
</template>

<script type="text/ecmascript-6">
import adminLeftUserSetIcon from './adminLeftUserSetIcon'
import adminLeftUserSetMine from './adminLeftUserSetMine'
export default {
  components: {
    adminLeftUserSetIcon,
    adminLeftUserSetMine
  },
  props: [],
  created () {
  },
  data () {
    return {
      IconSign: true,
      mineSign: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 修改头像框打开
    changeIconOpen () {
      this.IconSign = true
      this.mineSign = false
    },
    // 修改头像框打开
    changeMineOpen () {
      this.IconSign = false
      this.mineSign = true
    },
    // 表格编辑数据提交事件
    closeAndEdit (ruleForm, username) {
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
    }
  },
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.adminLeftUserSet
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
</style>
