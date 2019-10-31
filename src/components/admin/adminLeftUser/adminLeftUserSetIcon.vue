<template>
    <div class="adminLeftUserSetIcon">
      <el-upload
        class="upload-demo"
        v-bind:action="'http://10.250.0.120:2720/api/Pic/upload?username=' + this.$store.getters.username_getters"
        :limit="1"
        :before-upload="beforeUpload"
        :before-remove="beforeRemove"
        :on-success="onSuccess"
        :on-error="onError"
        :file-list="fileList"
        :on-exceed="handleExceed"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  created () {
  },
  data () {
    return {
      fileList: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 上传前判断
    beforeUpload (file) {
      if (file.type === 'image/jpeg') {
        if (file.size / 1024 < 500) {
          return true
        } else {
          this.$message.error('上传头像图片大小不能超过 500KB!')
        }
        return false
      } else {
        this.$message.error(`上传文件格式为${file.type}，应为image/jpeg`)
        return false
      }
    },
    // 成功函数
    onSuccess (response, file, fileList) {
      this.$message.success(`上传头像文件${file.name}成功`)
      setTimeout(() => {
        window.location.reload(true)
      }, 1000)
    },
    // 失败函数
    onError (err, file, fileLis) {
      console.log(err)
      // console.log(file)
    },
    // 文件超出个数限制时的钩子
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个图片，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个图片`)
    },
    // 删除前提示
    beforeRemove (file) {
      setTimeout(() => {
        this.$message.success(`已经移除所选文件 ${file.name}`)
      }, 1000)
    }
  },
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.adminLeftUserSetIcon
  .upload-demo
    position fixed
    top 200px
    left 300px
</style>
