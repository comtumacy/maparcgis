<template>
    <div class="adminLeftUserEditAddUser">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" show-password autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属科室" prop="department">
          <el-select  v-model="ruleForm.department" placeholder="请选择科室">
            <el-option :label="itemDepartment" :value="itemDepartment" v-for="itemDepartment in department" :key="itemDepartment" v-bind:style="{'width': '580px'}"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="ruleForm.gender" placeholder="请选择性别">
            <el-option label="男" value="男" v-bind:style="{'width': '580px'}"></el-option>
            <el-option label="女" value="女" v-bind:style="{'width': '580px'}"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="button1" type="success" v-on:click="submitForm('ruleForm')">确定添加</el-button>
      <el-button class="button2" type="info" v-on:click="$emit('sent')">取消添加</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['addUserSign'],
  created () {
    this.getDepartment()
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
      department: '',
      ruleForm: {
        username: '',
        password: '',
        checkPass: '',
        department: '',
        gender: '',
        tel: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 10, message: '为了安全，密码长度大于 10 个字符', trigger: 'blur' },
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
        ]
      }
    }
  },
  computed: {},
  watch: {
    // 监控窗口打开信号，清除输入框
    addUserSign (val) {
      if (val === true) {
        this.ruleForm.username = ''
        this.ruleForm.password = ''
        this.ruleForm.department = ''
        this.ruleForm.gender = ''
        this.ruleForm.tel = ''
      }
    }
  },
  methods: {
    // 提交按钮事件
    submitForm (ruleForm) {
      this.$refs[ruleForm].validate((valid, field) => {
        if (valid) {
          this.$emit('sentEditAdd', this.ruleForm)
        } else {
          setTimeout(() => {
            if (field.username) {
              this.$message.error(field.username[0].message)
            }
          }, 200)
          setTimeout(() => {
            if (field.password) {
              this.$message.error(field.password[0].message)
            }
          }, 500)
          setTimeout(() => {
            if (field.department) {
              this.$message.error(field.department[0].message)
            }
          }, 700)
          setTimeout(() => {
            if (field.gender) {
              this.$message.error(field.gender[0].message)
            }
          }, 900)
          setTimeout(() => {
            if (field.tel) {
              this.$message.error(field.tel[0].message)
            }
          }, 1200)
          return false
        }
      })
    },
    // 获取部门全部数据
    getDepartment () {
      this.axios({
        method: 'post',
        url: 'http://10.250.0.120:2720/api/Department/getAllDepartment'
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
  },
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.adminLeftUserEditAddUser
  padding 20px 20px 20px 0
  width 700px
  height 450px
  background-color rgb(249,249,251)
  border-radius 20px
  z-index 120
  box-shadow: 5px 5px 10px #888888
  .button1
    position relative
    left 28%
  .button2
    position relative
    left 43%
  .el-form-item
    .el-form-item__content
      .el-select
        width 580px
</style>
