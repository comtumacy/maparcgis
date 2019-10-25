<template>
    <div class="adminLeftUserDepartmentSelection">
      <i>请选择科室：</i>
      <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
        <el-form-item label="所属科室" prop="department">
          <el-select  v-model="ruleForm.department" placeholder="请选择科室" v-bind:style="{'width': '385px'}">
            <el-option id="selectDepartment" :label="itemDepartment" :value="itemDepartment" v-for="itemDepartment in department" :key="itemDepartment"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button class="button1" type="primary" v-on:click="onSubmit('ruleForm')">选择</el-button>
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
      department: '',
      ruleForm: {
        department: ''
      },
      rules: {
        department: [
          { required: true, message: '请选择科室', trigger: 'change' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
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
    },
    onSubmit (ruleForm) {
      this.$refs[ruleForm].validate((valid, field) => {
        if (valid) {
          this.$emit('closeAndSelect', this.ruleForm.department, 1)
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
#selectDepartment
  width 375px
.adminLeftUserDepartmentSelection
  padding 20px 10px 20px 20px
  width 700px
  height 130px
  background-color rgb(249,249,251)
  border-radius 20px
  z-index 120
  box-shadow: 5px 5px 10px #888888
  > i
    position absolute
    left 280px
    padding 0 0 10px 0
    font-size 20px
    font-style normal
  .el-form
    position absolute
    top 60px
    margin 0 20px 0 20px
</style>
