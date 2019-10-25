<template>
    <div class="login" onresize="myFunction()">
      <div class="block">
        <el-carousel arrow="never" :interval="3000" v-bind:height="(height*0.72) + 'px'" v-bind:style="{'top': (height*0.08) + 'px', 'width': width + 'px',  'margin': 0}">
          <el-carousel-item v-for="item in 4" :key="item">
            <i class="text1" v-bind:style="{'top': (height*0.5) + 'px', 'left':(width*0.05) + 'px', 'margin': 0, 'font-size': (width*0.0364) + 'px'}" >{{ setText1(item) }}</i>
            <i class="text2" v-bind:style="{'top': (height*0.57) + 'px', 'left':(width*0.05) + 'px', 'margin': 0, 'font-size': (width*0.0364) + 'px'}">{{ setText2(item) }}</i>
            <img v-bind:src="imageSelect(item)" v-bind:style="{'width': width + 'px', 'height': (height*0.8) + 'px', 'margin': 0}">
          </el-carousel-item>
        </el-carousel>
      </div>
      <img class="logo" v-bind:src="selectLogo()" v-bind:style="{'width': (height*0.06) + 'px', 'height': (height*0.06) + 'px', 'top': (height*0.01) + 'px', 'left': (width*0.01) + 'px', 'margin': 0}">
      <span class="title" v-bind:src="selectLogo()" v-bind:style="{'height': (height*0.06) + 'px', 'font-size': (width*0.02) + 'px', 'top': (height*0.01) + 'px', 'left': (height*0.1) + 'px'}">玉林市乡村大数据建设管理系统平台</span>
      <div class="rightTop" v-bind:style="{'right': (height*0.03) + 'px', 'top': (height*0.03) + 'px','height': (height*0.02) + 'px'}">
        <i class="el-icon-user"></i>
        <el-button type="text" v-on:click="goToRegister()" v-bind:style="{'font-size': (height*0.018) + 'px'}">立即注册</el-button>
        <el-divider direction="vertical"></el-divider>
        <i class="icon-loop2"></i>
        <el-button type="text" v-on:click="notice()" v-bind:style="{'font-size': (height*0.018) + 'px'}">修改密码</el-button>
      </div>
      <div class="bottomIcon" v-bind:style="{'top': (height*0.82) + 'px', 'left': (width*0.3842) + 'px', 'font-size': (width*0.02) + 'px'}">
        <div style="float: left">
          <span class="icon-display" v-bind:style="{'margin-right': (width*0.019) + 'px', 'margin-left': (width*0.019) + 'px'}"></span>
          <br>
          <span v-bind:style="{'font-size': (width*0.01) + 'px'}">Windows</span>
        </div>
        <div style="float: left">
          <span class="icon-android" v-bind:style="{'margin-right': (width*0.019) + 'px', 'margin-left': (width*0.019) + 'px'}"></span>
          <br>
          <span v-bind:style="{'font-size': (width*0.01) + 'px'}">Android</span>
        </div>
        <div style="float: left">
          <span class="icon-appleinc" v-bind:style="{'margin-right': (width*0.019) + 'px', 'margin-left': (width*0.019) + 'px'}"></span>
          <br>
          <span v-bind:style="{'font-size': (width*0.01) + 'px'}">Apple</span>
        </div>
        <div style="float: left">
          <span class="icon-mobile" v-bind:style="{'margin-right': (width*0.019) + 'px', 'margin-left': (width*0.019) + 'px'}"></span>
          <br>
          <span v-bind:style="{'font-size': (width*0.01) + 'px'}">Phone</span>
        </div>
      </div>
      <div class="Identification">
        <i class="headLine" v-bind:style="{'top': (height*0.92) + 'px', 'left': ((width-350)/2) + 'px'}">玉林市城乡规划设计院——城市智慧与信息数据研究中心</i>
        <br>
        <i class="englishTitle" v-bind:style="{'top': (height*0.945) + 'px', 'left': ((width-586)/2) + 'px'}">Yulin Urban and Rural Planning and Design Institute Urban Intelligence and Information Data Research Center</i>
      </div>
      <div class="copyright" v-bind:style="{'top': (height*0.96) + 'px', 'left': ((width-614)/2) + 'px'}">
        <el-button type="text" disabled>©2019 地图展示平台</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" v-on:click="notice()">服务协议</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" v-on:click="notice()">权利声明</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" v-on:click="notice()">版本更新</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" v-on:click="notice()">帮助中心</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" v-on:click="notice()">版权投诉</el-button>
      </div>
      <div class="login" v-bind:style="{'top': (height*0.17) + 'px', 'left': (width*0.65) + 'px'}">
        <el-row>
          <el-col class="title">账号密码登录</el-col>
          <el-col class="userName">
            <el-input
              placeholder="请输入账号"
              v-model="userName"
              clearable>
            </el-input>
          </el-col>
          <el-col class="passWord">
            <el-input
              placeholder="请输入密码"
              v-model="passWord"
              show-password>
            </el-input>
          </el-col>
          <el-col class="verificationCode" :span="12">
            <el-input
              placeholder="验证码"
              v-model="verificationCode"
              clearable>
            </el-input>
          </el-col>
          <el-col :span="12">
            <img class="verificationCodeImg" v-bind:src="verificationCodeImg()" v-on:click="refreshCaptchaImg()">
          </el-col>
          <el-col class="checked">
            <el-checkbox v-model="checked">下次自动登录</el-checkbox>
          </el-col>
          <el-col class="button">
            <el-button type="primary" v-on:click="loginEnter()">登录</el-button>
          </el-col>
          <el-col class="text">
            <el-button type="text">忘记密码？</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  created () {
    this.getLength()
    this.getCaptchaImg()
    setInterval(() => {
      this.refreshCaptchaImg()
    }, 120000)
  },
  data () {
    return {
      height: 0,
      width: 0,
      userName: '',
      passWord: '',
      verificationCode: '',
      checked: false,
      captchaImg: '',
      ctoken: ''
    }
  },
  methods: {
    // 主界面图片切换控制
    imageSelect (type) {
      if (type === 1) {
        return require('./login1.png')
      } else if (type === 2) {
        return require('./login2.png')
      } else if (type === 3) {
        return require('./login3.png')
      } else if (type === 4) {
        return require('./login4.png')
      }
    },
    // LOGO图片选择
    selectLogo () {
      return require('./logo.png')
    },
    // 获取长宽
    getLength () {
      this.height = document.documentElement.clientHeight
      this.width = document.documentElement.clientWidth
    },
    // 主界面第一行文字切换控制
    setText1 (type) {
      if (type === 1) {
        return '“这片土地，'
      } else if (type === 2) {
        return '“城市发展，'
      } else if (type === 3) {
        return '“放眼望去，'
      } else if (type === 4) {
        return '“你想要的，'
      }
    },
    // 主界面第二行文字切换控制
    setText2 (type) {
      if (type === 1) {
        return '我们从未忘记……”'
      } else if (type === 2) {
        return '历经沧桑巨变……”'
      } else if (type === 3) {
        return '都是如此美丽……”'
      } else if (type === 4) {
        return '实现触手可及……”'
      }
    },
    // 未开发提示
    notice () {
      this.$message('尚未完善，敬请期待')
    },
    // 路由控制进入注册界面
    goToRegister () {
      this.$router.push('/register')
    },
    // 获取验证码图片
    getCaptchaImg () {
      this.axios({
        method: 'post',
        url: 'http://yitongli.cn/api/captcha/getCaptcha',
        responseType: 'arraybuffer'
      }).then(res => {
        this.ctoken = res.headers.ctoken
        this.captchaImg = 'data:image/png;base64,' + btoa(
          new Uint8Array(res.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        )
      }).catch(err => {
        console.log(err)
      })
    },
    // 刷新验证码图片
    refreshCaptchaImg () {
      this.getCaptchaImg()
    },
    // 返回验证码图片
    verificationCodeImg () {
      return this.captchaImg
    },
    // 登录按钮事件
    loginEnter () {
      this.axios({
        method: 'post',
        url: 'http://yitongli.cn/api/user/login',
        data: { 'username': this.userName, password: this.passWord },
        headers: { 'ctoken': this.ctoken, 'captcha': this.verificationCode }
      }).then(res => {
        if (res.status === 200) {
          this.$store.dispatch('token_actions', res.data.token)
          this.$store.dispatch('username_actions', this.userName)
          console.log(res.data.token)
          this.$message({
            message: '登陆成功',
            type: 'success'
          })
          this.$router.push('/map')
        } else if (res.status === 401) {
          this.$message(res.data.message)
        }
      }).catch(() => {
        this.$message('登录失败，请重试')
      })
    }
  },
  // 实时获取、更改浏览器长宽
  mounted () {
    window.onresize = () => {
      this.getLength()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.login
  .block
    .text1
      position fixed
      z-index 50
      cursor default
      font-family KaiTi
      font-style normal
      color white
    .text2
      position fixed
      z-index 50
      cursor default
      font-style normal
      font-family KaiTi
      color white
  .logo
    position fixed
    z-index 30
  .title
    position fixed
    z-index 40
    cursor default
    color rgb(63,83,110)
    font-family STHeiti
  .rightTop
    position fixed
    > i
      margin 0 5px 0 0
    .el-button
      padding 0
  .button
    .button1
      position fixed
      padding 0
      z-index 50
    .button2
      position fixed
      padding 0
      z-index 50
  .bottomIcon
    position fixed
    line-height 25px
    > div
      text-align center
      cursor default
  .Identification
    .headLine
      position fixed
      cursor default
      font-style normal
      font-size 14px
      color rgb(63,83,110)
    .englishTitle
      position fixed
      cursor default
      font-style normal
      font-size 9px
      color rgb(63,83,110)
  .copyright
    position fixed
    .el-button--text
      margin 0 9px 0 9px
      color rgb(194,201,208)
  .login
    position fixed
    width 360px
    height 400px
    background-color white
    z-index 100
    .title
      margin 40px 0 40px 0
      padding-left 20px
      font-family "Microsoft Yahei"
      font-weight 600
      font-size 20px
    .userName
      margin 100px 0 0 0
      padding-left 20px
      padding-right 20px
    .passWord
      margin 10px 0 0 0
      padding-left 20px
      padding-right 20px
    .verificationCode
      margin 10px 0 20px 0
      padding-left 20px
      padding-right 20px
    .verificationCodeImg
      margin 10px 0 20px 0
      height 40px
      width 140px
      cursor pointer
    .checked
      margin 0 0 20px 20px
      .el-checkbox
        .el-checkbox__label
          color black
    .button
      margin 0 0 0 20px
      .el-button
        width 320px
    .text
      margin 0 0 0 20px
      .el-button
        color rgb(179,179,179)
</style>
