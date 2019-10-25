<template>
  <div class="adminIndex">
    <div class="herder">
      <img src="./智研中心logo_white.png" alt="">
      <i class="adminTitle">XCZY</i>
      <el-menu :default-active="activeIndex1" class="el-menu1" mode="horizontal" @select="handleSelectTop" background-color="#04A9F3" text-color="#FFFFFF" active-text-color="#FFFFFF">
        <el-menu-item index="1">&nbsp;&nbsp;&nbsp;图层管理&nbsp;&nbsp;&nbsp;</el-menu-item>
        <el-menu-item index="2">&nbsp;&nbsp;&nbsp;用户管理&nbsp;&nbsp;&nbsp;</el-menu-item>
        <el-menu-item index="3">&nbsp;&nbsp;&nbsp;设置中心&nbsp;&nbsp;&nbsp;</el-menu-item>
      </el-menu>
      <div class="icon">
        <img :src="icon" alt="">
      </div>
      <div class="adminName">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="set">账号设置</el-dropdown-item>
            <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="left" v-bind:class="{'show': activeIndex1 === '1'}">
      <el-menu :default-active="activeIndexLeft1" class="el-menu2" @select="handleSelectLeft1" background-color="#F9F9FB" text-color="#ABB0B1" active-text-color="#04A9F3">
        <el-menu-item index="1">&nbsp;&nbsp;&nbsp;图层编辑&nbsp;&nbsp;&nbsp;
        </el-menu-item>
        <el-menu-item index="2">&nbsp;&nbsp;&nbsp;图层查看&nbsp;&nbsp;&nbsp;
        </el-menu-item>
        <el-menu-item index="3">&nbsp;&nbsp;&nbsp;设置中心&nbsp;&nbsp;&nbsp;</el-menu-item>
      </el-menu>
    </div>
    <div class="left" v-bind:class="{'show': activeIndex1 === '2'}">
      <el-menu :default-active="activeIndexLeft2" class="el-menu2" @select="handleSelectLeft2" background-color="#F9F9FB" text-color="#ABB0B1" active-text-color="#04A9F3">
        <el-menu-item index="1">&nbsp;&nbsp;&nbsp;用户编辑&nbsp;&nbsp;&nbsp;</el-menu-item>
        <el-menu-item index="2">&nbsp;&nbsp;&nbsp;设置中心&nbsp;&nbsp;&nbsp;</el-menu-item>
      </el-menu>
    </div>
    <div class="left" v-bind:class="{'show': activeIndex1 === '3'}">
      <el-menu :default-active="activeIndexLeft3" class="el-menu2" @select="handleSelectLeft3" background-color="#F9F9FB" text-color="#ABB0B1" active-text-color="#04A9F3">
        <el-menu-item index="1">&nbsp;&nbsp;&nbsp;权限设置&nbsp;&nbsp;&nbsp;</el-menu-item>
        <el-menu-item index="2">&nbsp;&nbsp;&nbsp;安全设置&nbsp;&nbsp;&nbsp;</el-menu-item>
      </el-menu>
    </div>
    <div class="leftDown">
      <el-tooltip class="item" effect="dark" content="返回主页" placement="top-start">
        <el-button type="success" icon="el-icon-s-home" circle v-on:click="goToLogin()"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="进入地图" placement="top-start">
        <el-button type="info" icon="el-icon-picture-outline" circle v-on:click="goToMap()"></el-button>
      </el-tooltip>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  created () {
    this.getLength()
    this.getIcon()
    this.$router.push('/admin/adminLeftTableEdit')
    this.username = this.$store.getters.username_getters
  },
  data () {
    return {
      height: 0,
      width: 0,
      activeIndex1: '1',
      activeIndexLeft1: '1',
      activeIndexLeft2: '1',
      activeIndexLeft3: '1',
      username: 'admin',
      icon: ''
    }
  },
  computed: {
  },
  methods: {
    // 获取高度
    getLength () {
      this.height = document.documentElement.clientHeight
      this.width = document.documentElement.clientWidth
    },
    // 获取顶端选择位置
    handleSelectTop (key) {
      this.activeIndex1 = key
      if (key === '1') {
        this.handleSelectLeft1('1')
      } else if (key === '2') {
        this.handleSelectLeft2('1')
      } else if (key === '3') {
        this.handleSelectLeft3('1')
      }
    },
    // 获取左菜单图层选择位置
    handleSelectLeft1 (key) {
      if (key === '1') {
        this.$router.push('/admin/adminLeftTableEdit')
      } else if (key === '2') {
        this.$router.push('/admin/adminLeftTableLook')
      } else if (key === '3') {
        this.$router.push('/admin/adminLeftTableSet')
      }
    },
    // 获取左菜单用户选择位置
    handleSelectLeft2 (key) {
      if (key === '1') {
        this.$router.push('/admin/adminLeftUserEdit')
      } else if (key === '2') {
        this.$router.push('/admin/adminLeftUserSet')
      }
    },
    // 获取左菜单设置选择位置
    handleSelectLeft3 (key) {
      if (key === '1') {
        this.$router.push('/admin/adminLeftPermissionSet')
      } else if (key === '2') {
        this.$router.push('/admin/adminIndex')
      }
    },
    // 右上角账号设置与退出登录控制函数
    handleCommand (command) {
      if (command === 'set') {
        this.handleSelectTop('2')
        this.activeIndexLeft2 = '2'
        this.handleSelectLeft2('2')
      } else {
        this.$store.dispatch('token_actions', '')
        this.$router.push('/login')
      }
    },
    handleClick (row) {
      console.log(row)
    },
    handleDelete (index) {
      console.log(index)
    },
    // 路由控制进入主页
    goToLogin () {
      this.$router.push('/login')
    },
    // 路由控制，进入地图
    goToMap () {
      this.$router.push('/map')
    },
    // 获取头像
    getIcon () {
      let username = this.$store.getters.username_getters
      this.axios({
        method: 'get',
        url: `http://yitongli.cn/api/upload/${username}/icon.jpg`,
        responseType: 'arraybuffer'
      }).then(res => {
        if (res.status === 200) {
          this.icon = 'data:image/png;base64,' + btoa(
            new Uint8Array(res.data)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          )
        } else {
          this.icon = require('./icon.jpg')
        }
      }).catch(() => {
      })
      return ''
    }
  },
  mounted () {
    window.onresize = () => {
      this.getLength()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.adminIndex
  .herder
    position fixed
    top 0
    width 100%
    background-color #04A9F3
    .adminTitle
     cursor default
    >img
      position fixed
      top 10px
      left 10px
      height 40px
      width 40px
    > i
      position fixed
      top 8px
      left 70px
      color white
      font-size 30px
      font-style normal
      font-weight 400
    .el-menu1
      left 200px
      .el-menu-item
        font-size 18px
    .icon
      >img
        position fixed
        top 10px
        right 150px
        height 40px
        width 40px
        border-radius 20px
    .adminName
      position fixed
      top 18px
      right 50px
      cursor pointer
      .el-dropdown
      > span
        color white
        font-size 16px
  .left
    display none
    .el-menu2
      position fixed
      top 61px
      width 200px
      height 100%
      .el-menu-item
        font-size 18px
        text-align center
  &.show
    display none
  .leftDown
    position fixed
    bottom 50px
    left 45px
    z-index 50
    .el-button
      height 50px
      width 50px
</style>
