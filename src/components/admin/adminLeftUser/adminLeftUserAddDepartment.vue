<template>
    <div class="adminLeftUserAddDepartment">
      <i>请输入添加科室名称</i>
      <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
        <el-form-item label="添加科室：" prop="content">
          <el-input v-model="ruleForm.content" placeholder="请输入科室名称" v-bind:style="{'width': '375px'}"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button1" type="primary" v-on:click="onSubmit('ruleForm')">添加</el-button>
          <el-button class="button2" type="info" v-on:click="$emit('sent')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  created () {
    this.getDepartment()
  },
  data () {
    return {
      ruleForm: {
        content: ''
      },
      rules: {
        content: [
          { required: true, message: '请输入搜索内容', trigger: 'blur' },
          { max: 50, message: '长度应小于 50 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 添加科室按钮事件
    onSubmit (ruleForm) {
      this.$refs[ruleForm].validate((valid, field) => {
        if (valid) {
          this.$emit('closeAndAddDepartment', this.ruleForm.content)
        } else {
          setTimeout(() => {
            if (field.content) {
              this.$message.error(field.content[0].message)
            }
          }, 200)
          return false
        }
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
.adminLeftUserAddDepartment
  padding 20px 10px 20px 20px
  width 700px
  height 130px
  background-color rgb(249,249,251)
  border-radius 20px
  z-index 120
  box-shadow: 5px 5px 10px #888888
  > i
    position absolute
    left 250px
    padding 0 0 10px 0
    font-size 20px
    font-style normal
  .el-form
    position absolute
    top 60px
    margin 0 20px 0 20px
</style>
