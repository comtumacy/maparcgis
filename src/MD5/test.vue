<template>
    <div class="">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
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
      checkList: []
    }
  },
  computed: {},
  watch: {
    checkList (val) {
      console.log(val)
    }
  },
  methods: {},
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
