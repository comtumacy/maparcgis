<template>
    <div class="adminLeftTableEditAlert">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="图层名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="url" prop="url">
          <el-input v-model="ruleForm.url"></el-input>
        </el-form-item>
        <el-form-item label="图层类型" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择图层类型">
            <el-option id="selectTableAlert1" label="MapImageLayer" value="MapImageLayer"></el-option>
            <el-option id="selectTableAlert2" label="FeatureLayer" value="FeatureLayer"></el-option>
            <el-option id="selectTableAlert3" label="TileLayer" value="TileLayer"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="键值对" prop="key_value">
          <el-input v-model="ruleForm.key_value"></el-input>
        </el-form-item>
        <el-form-item label="修改时间" prop="copyright">
          <el-input v-model="ruleForm.date"></el-input>
        </el-form-item>
        <el-form-item label="版权" prop="copyright">
          <el-input v-model="ruleForm.copyright"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="button1" type="success" v-on:click="submitForm('ruleForm')">确定提交</el-button>
      <el-button class="button2" type="info" v-on:click="$emit('sent')">取消更改</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['sign', 'row'],
  created () {
  },
  watch: {
    sign (val) {
      if (val === true) {
        this.enter()
      }
    }
  },
  methods: {
    enter () {
      this.ruleForm.name = this.row.name
      this.ruleForm.url = this.row.url
      this.ruleForm.type = this.row.type
      this.ruleForm.key_value = this.row.key_value
      this.ruleForm.date = this.row.date
      this.ruleForm.copyright = this.row.copyright
    },
    submitForm (ruleForm) {
      this.$refs[ruleForm].validate((valid, field) => {
        if (valid) {
          this.$emit('sentEdit', this.ruleForm)
          this.$message.success('修改成功')
        } else {
          setTimeout(() => {
            if (field.name) {
              this.$message.error(field.name[0].message)
            }
          }, 200)
          setTimeout(() => {
            if (field.type) {
              this.$message.error(field.type[0].message)
            }
          }, 500)
          setTimeout(() => {
            if (field.key_value) {
              this.$message.error(field.key_value[0].message)
            }
          }, 700)
          setTimeout(() => {
            if (field.copyright) {
              this.$message.error(field.copyright[0].message)
            }
          }, 900)
          setTimeout(() => {
            if (field.url) {
              this.$message.error(field.url[0].message)
            }
          }, 1200)
          return false
        }
      })
    }
  },
  data () {
    return {
      ruleForm: {
        name: '',
        url: '',
        type: '',
        key_value: '',
        date: '',
        copyright: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入图层名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '请输入图层服务地址', trigger: 'blur' },
          { min: 10, message: '长度大于 10 个字符', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择图层类型', trigger: 'change' }
        ],
        key_value: [
          { required: true, message: '请输入图层名称', trigger: 'blur' },
          { min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur' }
        ],
        copyright: [
          { required: true, message: '请选择图层类型', trigger: 'change' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        date: [
          { required: true, message: '请输入时间', trigger: 'change' }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#selectTableAlert1
  width 580px
#selectTableAlert2
  width 580px
#selectTableAlert3
  width 580px
.adminLeftTableEditAlert
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
