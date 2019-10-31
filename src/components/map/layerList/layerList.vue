<template>
    <div class="layersList" draggable="true">
      <el-row type="flex" class="titleList">
        <el-col class="titleListCol1" :span="12" :offset="1">
          <i class="el-icon-coin"></i>
          图层列表
        </el-col>
        <el-col class="titleListCol2" :span="12">
          <el-button class="titleListColButton" type="text" v-on:click="$emit('menuClose')">
            <i class="el-icon-close"></i>
          </el-button>
        </el-col>
      </el-row>
      <el-row type="flex" class="titleList2">
        <el-col class="titleList2Col1" :span="8">
          图层
        </el-col>
        <el-col class="titleList2Col2" :span="8">
          <el-button class="titleList2Col2Button" type="text" v-on:click="showFindRowControl()">
            <i class="el-icon-search"></i>
          </el-button>
        </el-col>
        <el-col class="titleList2Col3" :span="8">
          <el-button class="titleList2Col3Button" type="text">
            <i class="el-icon-finished"></i>
          </el-button>
        </el-col>
      </el-row>
      <transition :duration="{enter:400,leave:400}" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <el-row type="flex" class="titleList3" v-show="showFindRow">
          <el-col :span="12" class="titleList3Col1">
            <el-input v-model="findLayers" placeholder="请输入需要搜索的图层"></el-input>
          </el-col>
          <el-col :span="12" class="titleList3Col2">
            <el-button v-on:click="showFindRowControl()">取消</el-button>
          </el-col>
        </el-row>
      </transition>
      <el-row class="titleList4" v-bind:style="{'height': setHeight}">
        <el-col class="layerSelect" :span="24">
          <el-checkbox-group v-model="layers">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo">
              <el-submenu :index="group[groupItem - 1]" v-for="groupItem in group.length" :key="groupItem">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ group[groupItem - 1]}}</span>
                </template>
                <el-menu-item :index="item" v-for="item in sublayerReturn(group[groupItem - 1])" :key="item">
                  <el-checkbox id="checkItem" :label="item">{{ item }}</el-checkbox>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-checkbox-group>
        </el-col>
      </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  created () {
    this.axios({
      method: 'post',
      url: 'http://10.250.0.120:2720/api/Layers/getAllLayersList',
      headers: {
        'pagenum': 1,
        'token': this.$store.getters.token_getters,
        'username': this.$store.getters.username_getters
      }
    }).then(res => {
      console.log(res)
      console.log('ok')
      this.data = res.data
      this.distinct(res.data)
    }).catch(err => {
      console.log(err)
      console.log('error')
    })
  },
  data () {
    return {
      data: [],
      findLayers: '',
      showFindRow: false,
      group: [],
      layers: []
    }
  },
  computed: {
  // 控制title4组件高度
    setHeight () {
      if (this.showFindRow === true) {
        return '480px'
      } else {
        return '520px'
      }
    }
  },
  watch: {
    // 输入查询的图层
    findLayers (val) {
      this.$emit('sent', val)
    },
    // 找出所选择的图层
    layers (val, oldVal) {
      let list = []
      let oldList = []
      let names = []
      for (let i = 0; i < this.data.length; i++) {
        names.push(this.data[i].name)
      }
      function getArr (arr, list) {
        for (let i = 0; i < arr.length; i++) {
          list.push(arr[i])
        }
      }
      getArr(val, list)
      getArr(oldVal, oldList)
      function getArrDifference (arr1, arr2) {
        return arr1.concat(arr2).filter(function (v, i, arr) {
          return arr.indexOf(v) === arr.lastIndexOf(v)
        })
      }
      this.$emit('handSelect', list.length - oldList.length, names.indexOf(getArrDifference(list, oldList)[0]))
    }
  },
  methods: {
    showFindRowControl () {
      this.showFindRow = !this.showFindRow
    },
    // 获取group并去除重复值
    distinct (data) {
      let arr = []
      // let name = []
      for (let i = 0; i < data.length; i++) {
        arr.push(data[i].group)
        // name.push(data[i].name)
      }
      let result = []
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            j = ++i
          }
        }
        result.push(arr[i])
      }
      this.group = result
    },
    // 获取每个group下的内容并返回
    sublayerReturn (val) {
      let arr = []
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].group === val) {
          arr.push(this.data[i].name)
        }
      }
      return arr
    }
  },
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.layersList
  position fixed
  top 12%
  left 5%
  width 350px
  height 600px
  border-radius 8px
  background-color white
  box-shadow: 5px 5px 10px #888888
  .titleList
    height 30px
    border-radius 8px 8px 0 0
    background-color rgb(63,67,71)
    color white
    .titleListCol1
      position absolute
      top 2px
      width auto
      font-size 18px
      > i
        right 2px
        font-size 20px
    .titleListCol2
      position absolute
      right 10px
      width auto
      height 30px
      font-size 18px
      .titleListColButton
        padding 0
        border 0
        height 30px
        .el-icon-close
          font-size 18px
          color white
  .titleList2
    height 50px
    background-color white
    .titleList2Col1
      position absolute
      top 14px
      left 15px
      width auto
      font-size 15px
    .titleList2Col2
      position absolute
      top 14px
      right 40px
      width auto
      .titleList2Col2Button
        padding 0
        border 0
        font-size 18px
        color rgb(144,147,153)
    .titleList2Col3
      position absolute
      top 14px
      right 10px
      width auto
      .titleList2Col3Button
        padding 0
        border 0
        font-size 18px
        color rgb(144,147,153)
  .titleList3
    .titleList3Col1
      width 280px
    .titleList3Col2
      width 70px
  .titleList4::-webkit-scrollbar
    display none
  .titleList4
    overflow auto
    scrollbar-width none
    .layerSelect
      #checkItem
        width 100%
</style>
