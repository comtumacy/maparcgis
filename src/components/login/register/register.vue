<template>
    <div class="register">
      <img class="logoRegister" v-bind:src="selectLogo()" v-bind:style="{'width': (height*0.06) + 'px', 'height': (height*0.06) + 'px', 'top': (height*0.01) + 'px', 'left': (width*0.01) + 'px', 'margin': 0}">
      <span class="titleRegister" v-bind:src="selectLogo()" v-bind:style="{'height': (height*0.06) + 'px', 'font-size': (width*0.02) + 'px', 'top': (height*0.01) + 'px', 'left': (height*0.1) + 'px'}">玉林市乡村大数据建设管理系统平台</span>
      <div class="divider" v-bind:style="{'height': (height*0.06) + 'px'}">
        <el-divider direction="vertical"></el-divider>
      </div>
      <i>注册账号</i>
      <div class="registerTable">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" show-password>></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input v-model="ruleForm.checkPass" show-password autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-select v-model="ruleForm.gender" placeholder="请选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属科室" prop="department">
            <el-select  v-model="ruleForm.department" placeholder="请选择科室">
              <el-option :label="itemDepartment" :value="itemDepartment" v-for="itemDepartment in department" :key="itemDepartment"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号" prop="tel">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="captcha">
            <el-input v-model="ruleForm.captcha"></el-input>
            <img id="verificationCodeImg" v-bind:src="verificationCodeImg()" v-on:click="refreshCaptchaImg()">
          </el-form-item>
        </el-form>
        <div class="buttonRegister">
          <el-button class="button" type="success" v-on:click="submitForm('ruleForm')">注 册</el-button>
          <el-button class="button" @click="enterLogin()">登 录</el-button>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import '../../../http/http'
export default {
  created () {
    this.getLength()
    this.getCaptchaImg()
    this.getDepartment()
    setInterval(() => {
      this.refreshCaptchaImg()
    }, 120000)
  },
  data () {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      captchaImg: '',
      department: '',
      ruleForm: {
        username: '',
        password: '',
        checkPass: '',
        department: '',
        gender: '',
        tel: '',
        captcha: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 10, message: '为了安全，密码长度请大于 10 个字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { min: 10, message: '为了安全，密码长度请大于 10 个字符', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
        department: [
          { required: true, message: '请选择科室', trigger: 'change' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        tel: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号应为11位数', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '验证码应为 4 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  methods: {
    // 获取LOGO图片并返回
    selectLogo () {
      return require('./logo.png')
    },
    // 获取长宽
    getLength () {
      this.height = document.documentElement.clientHeight
      this.width = document.documentElement.clientWidth
    },
    // 返回验证码图片
    verificationCodeImg () {
      return this.captchaImg
    },
    // 点击注册按钮事件
    submitForm (ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          this.axios({
            method: 'post',
            url: 'http://yitongli.cn/api/user/register',
            data: this.ruleForm,
            headers: {
              ctoken: this.ctoken,
              captcha: this.ruleForm.captcha
            } })
            .then(res => {
              if (res.status === 200) {
                this.$nextTick(() => {
                  this.$message.success('注册成功')
                })
              } else if (res.status === 401) {
                this.$message.error(res.data.message)
              }
            })
            .catch(() => {
              this.$message.error('注册失败，请重新输入')
            })
        } else {
          this.$message.error('输入错误，请再次检查您输入的内容')
        }
      })
    },
    // 返回主页，路由控制
    enterLogin () {
      this.$router.push('/login')
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
    // 获取部门全部数据
    getDepartment () {
      this.axios({
        method: 'post',
        url: 'http://yitongli.cn/api/department/getAllDepartment'
      }).then(res => {
        let list = []
        for (let i = 0; i < res.data.length; i++) {
          list.push(res.data[i].department)
        }
        this.department = list
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.register
  .logoRegister
    position fixed
    cursor default
    left 400px !important
    height 40px !important
    width 40px !important
  .titleRegister
    position fixed
    left 470px !important
    color rgb(63,83,110)
    cursor default
    font-family STHeiti
    font-size 30px !important
  .divider
    position fixed
    top 15px
    left 955px
    .el-divider
      height 70%
      width 2px
      background-color rgb(201,201,201)
  > i
    position fixed
    top 10px
    left 980px
    cursor default
    font-style normal
    font-size 30px
    color black
    font-family SimHei
  .registerTable
    position: fixed
    top 150px
    left 500px
    width 520px
    .buttonRegister
      position absolute
      left 100px
      width 420px
      .button
        width 205px
    #verificationCodeImg
      margin-top 20px
      cursor pointer
    .el-form-item
      .el-form-item__content
        .el-select
          width 420px
</style>
