<template>
    <div class="adminLeftUserSetMine">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username" v-bind:style="{'width': '600px'}">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-bind:style="{'width': '600px'}">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="所属科室" prop="department" v-bind:style="{'width': '600px'}">
          <el-select  v-model="ruleForm.department" placeholder="请选择科室" v-bind:style="{'width': '500px'}">
            <el-option :label="itemDepartment" :value="itemDepartment" v-for="itemDepartment in department" :key="itemDepartment" v-bind:style="{'width': '580px'}"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="ruleForm.gender" placeholder="请选择性别" v-bind:style="{'width': '500px'}">
            <el-option label="男" value="男" v-bind:style="{'width': '500px'}"></el-option>
            <el-option label="女" value="女" v-bind:style="{'width': '500px'}"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话" prop="tel" v-bind:style="{'width': '600px'}">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remarks" v-bind:style="{'width': '600px'}">
          <el-input v-model="ruleForm.remarks" type="textarea" :rows="3"></el-input>
        </el-form-item>
      </el-form>
      <el-button id="mineButton" type="success" v-on:click="submitForm('ruleForm')">确定修改</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  created () {
    this.getInfo()
  },
  data () {
    return {
      department: [],
      ruleForm: {
        username: '',
        password: '',
        department: '',
        gender: '',
        tel: '',
        remarks: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 10, message: '为了安全，密码长度大于 10 个字符', trigger: 'blur' }
        ],
        department: [
          { required: true, message: '请输入所属部门', trigger: 'blur' },
          { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        tel: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号应为11位数', trigger: 'blur' }
        ],
        remarks: [
          { required: false, message: '请输入备注', trigger: 'blur' },
          { min: 0, max: 200, message: '长度小于200个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 获取用户信息
    getInfo () {
      this.axios({
        method: 'post',
        url: 'http://yitongli.cn/api/user/queryByUsername',
        withCredentials: false,
        headers: {
          'token': this.$store.getters.token_getters,
          'username': this.$store.getters.username_getters
        },
        data: {
          'username': this.$store.getters.username_getters
        }
      }).then(res => {
        if (res.status === 200) {
          this.ruleForm.username = res.data.username
          this.ruleForm.password = ''
          this.ruleForm.department = res.data.department
          this.ruleForm.gender = res.data.gender
          this.ruleForm.tel = res.data.tel
          this.ruleForm.remarks = res.data.remarks
        }
      })
    },
    // 确认按钮事件
    submitForm (ruleForm) {
      this.$refs[ruleForm].validate((valid, field) => {
        if (valid) {
          this.$emit('sentEdit', this.ruleForm, this.row.username)
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
          setTimeout(() => {
            if (field.remarks) {
              this.$message.error(field.remarks[0].message)
            }
          }, 1500)
          return false
        }
      })
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
  },
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.adminLeftUserSetMine
  position fixed
  top 200px
  left 300px
  width 60px
  #mineButton
    position absolute
    left 100px
    width 500px
</style>
