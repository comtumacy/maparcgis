<template>
  <div>
    <div class="title_map">
      <el-button class="button" type="primary" circle>
        <img class="img" src="./logo.png" alt="">
      </el-button>
      <i class="text_map">玉林市乡村大数据建设管理系统平台</i>
    </div>
    <div class="map" id="viewDiv"  v-bind:style="{'width': width + 'px', 'height': height + 'px'}"></div>
    <div class="coordinate">
      <i>坐标 X:{{ xPoint }}&nbsp;&nbsp;&nbsp;&nbsp;</i>
      <i>Y:{{ yPoint }}</i>
    </div>
    <div class="leftButton">
      <el-tooltip class="item" effect="dark" content="返回登录界面" placement="right">
        <el-button type="success" icon="el-icon-s-home" circle v-on:click="goToLogin()"></el-button>
      </el-tooltip>
      <br>
      <el-tooltip class="item" effect="dark" content="刷新当前页面" placement="right">
        <el-button type="info" icon="el-icon-refresh-right" circle v-on:click="refresh()"></el-button>
      </el-tooltip>
    </div>
    <div class="bottomMenu" v-bind:style="{'left': ((width-530)/2) + 'px'}">
      <el-tooltip class="item" effect="dark" content="全局显示" placement="top" v-bind:class="{'bottomMenuSelect': bottomMenuSelectSign === 1}">
        <el-button class="button1" icon="el-icon-view" circle v-on:click="bottomMenuSelect(1)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="定位" placement="top" v-bind:class="{'bottomMenuSelect': bottomMenuSelectSign === 2}">
        <el-button class="button2" icon="el-icon-location-outline" circle v-on:click="bottomMenuSelect(2)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="测距" placement="top" v-bind:class="{'bottomMenuSelect': bottomMenuSelectSign === 3}">
        <el-button class="button3" circle v-on:click="bottomMenuSelect(3)">
          <i class="icon-road"></i>
        </el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="打印" placement="top" v-bind:class="{'bottomMenuSelect': bottomMenuSelectSign === 4}">
        <el-button class="button4" icon="el-icon-money" circle v-on:click="bottomMenuSelect(4)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="标注" placement="top" v-bind:class="{'bottomMenuSelect': bottomMenuSelectSign === 5}">
        <el-button class="button5" icon="el-icon-edit-outline" circle v-on:click="bottomMenuSelect(5)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="绘图" placement="top" v-bind:class="{'bottomMenuSelect': bottomMenuSelectSign === 6}">
        <el-button class="button6" icon="el-icon-edit" circle v-on:click="bottomMenuSelect(6)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="清除标记" placement="top" v-bind:class="{'bottomMenuSelect': bottomMenuSelectSign === 7}">
        <el-button class="button7" icon="el-icon-close" circle v-on:click="bottomMenuSelect(7)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="导入定位" placement="top" v-bind:class="{'bottomMenuSelect': bottomMenuSelectSign === 8}">
        <el-button class="button8" icon="el-icon-folder-add" circle v-on:click="bottomMenuSelect(8)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="查询要素" placement="top" v-bind:class="{'bottomMenuSelect': bottomMenuSelectSign === 9}">
        <el-button class="button9" icon="el-icon-search" circle v-on:click="bottomMenuSelect(9)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="管理员登录" placement="top" v-bind:class="{'bottomMenuSelect': bottomMenuSelectSign === 10}">
        <el-button class="button10" icon="el-icon-user" circle v-on:click="enterAdmin()"></el-button>
      </el-tooltip>
    </div>
    <transition :duration="{enter:900,leave:800}" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <layerList class="menu1" v-show="bottomMenuSelectSign === 1" @menuClose="menuClose" @sent="setFindLayers" @handSelect="menuHandSelect1"></layerList>
    </transition>
  </div>
</template>
<script>
import { loadModules } from 'esri-loader'
import layerList from './layerList/layerList'
import store from '../../store/store'
export default {
  components: {
    layerList
  },
  created () {
    this.getLength()
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
      this.data = res.data
    })
  },
  mounted () {
    this.createMap()
  },
  data () {
    return {
      height: 0,
      width: 0,
      xPoint: 0,
      yPoint: 0,
      data: [],
      findLayers: '',
      layers: [],
      layersType: ['TileLayer', 'MapImageLayer', 'FeatureLayer'],
      bottomMenuSelectSign: 1,
      gid: 0,
      checked: true,
      sign: 0,
      index: -1,
      map: {}
    }
  },
  watch: {
    // 图层切换控制
    sign () {
      this.$nextTick(() => {
        if (this.sign === 1) {
          console.log('1')
          this.map.layers.addMany([store.getters.layers_getters[this.index]])
          this.$message.success('成功加载' + [store.getters.layers_getters[this.index]][0].title + '图层')
          // console.log(this.sign, this.index)
        } else if (this.sign === -1) {
          console.log('-1')
          this.map.layers.removeMany([store.getters.layers_getters[this.index]])
          this.$message.info('成功取消' + [store.getters.layers_getters[this.index]][0].title + '图层')
          // console.log(this.sign, this.index)
        }
      })
    }
  },
  updated: {
  },
  methods: {
    // 地图生成核心函数
    createMap () {
      const options = {
        url: 'http://10.250.0.120:2720/init.js'
      }
      loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/layers/TileLayer',
        'esri/layers/MapImageLayer',
        'esri/layers/FeatureLayer',
        'esri/geometry/Point',
        'esri/widgets/ScaleBar'
      ], options)
        .then(([
          Map,
          MapView,
          TileLayer,
          MapImageLayer,
          FeatureLayer,
          Point,
          ScaleBar
        ]) => {
          // 循环加载图层至数组
          for (let i = 0; i < this.data.length; i++) {
            console.log('ok')
            // let name = this.data[i].name
            let type = this.data[i].type
            let copyRight = this.data[i].copyright
            let id = this.data[i].id
            let url = this.data[i].url
            layersSelect(url, id, copyRight, type)
          }
          // 创建图层对象
          function layersSelect (url, id, copyright, type) {
            if (type === 'TileLayer') {
              const tileLayer = new TileLayer({
                url: url,
                id: id,
                copyright: copyright
              })
              store.dispatch('layers_actions', tileLayer)
            } else if (type === 'MapImageLayer') {
              const mapImageLayer = new MapImageLayer({
                url: url,
                id: id,
                copyright: copyright
              })
              store.dispatch('layers_actions', mapImageLayer)
            } else if (type === 'FeatureLayer') {
              const featureLayer = new FeatureLayer({
                url: url,
                id: id,
                copyright: copyright
              })
              store.dispatch('layers_actions', featureLayer)
            }
          }
          // 初始化map核心类
          const map = new Map({
          })
          this.map = map
          map.layers.addMany([store.getters.layers_getters[0]])
          const mapView = new MapView({
            container: 'viewDiv',
            map: map,
            zoom: 3
          })
          // 初始化图层时，视图初始化中心点定位位置
          mapView.center = new Point({
            x: 37412836.29550674,
            y: 2504599.6942223213,
            spatialReference: 2361,
            updating: true
          })
          // 点击事件，获取当前点击坐标
          mapView.on('click', (event) => {
            console.log(event.mapPoint)
          })
          // 鼠标移动，动态获取实时坐标
          mapView.on('pointer-move', (evt) => {
            this.xPoint = mapView.toMap({ x: evt.x, y: evt.y }).x
            this.yPoint = mapView.toMap({ x: evt.x, y: evt.y }).y
          })
          // 坐标尺（比例尺）
          const scaleBar = new ScaleBar({
            view: mapView,
            unit: 'metric'
          })
          // 把坐标尺组件添加到视图的左下角
          mapView.ui.add(scaleBar, 'bottom-left')
          mapView.on('click', (event) => {
            console.log(event)
          })
          mapView.on('click', (event) => {
            mapView.hitTest(event)
              .then((response) => {
                console.log(response)
                this.gid = response.results[0].graphic.attributes.OBJECTID
              })
          })
        })
    },
    // 获取长宽
    getLength () {
      this.height = document.documentElement.clientHeight
      this.width = document.documentElement.clientWidth
    },
    // 路由控制跳转至登录页面
    async goToLogin () {
      await this.$router.push('/login')
    },
    // 刷新当前页面
    refresh () {
      this.$router.go(0)
    },
    // 查找图层
    setFindLayers (val) {
      this.findLayers = val
    },
    // 底层菜单控制显示
    bottomMenuSelect (sign) {
      if (this.bottomMenuSelectSign === sign) {
        this.bottomMenuSelectSign = 0
      } else {
        this.bottomMenuSelectSign = sign
      }
    },
    // 路由控制跳转至后台界面
    enterAdmin () {
      this.$router.push('/admin')
    },
    // 控制menu1显示开关
    menuClose () {
      this.bottomMenuSelectSign = 0
    },
    // 图层切换控制
    menuHandSelect1 (sign, index) {
      this.$nextTick(() => {
        this.sign = sign
        this.index = index
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import url('http://10.250.0.120:2720/main.css')
.title_map
  position fixed
  top 1%
  left 1%
  width 450px
  border-radius 30px
  background-color rgb(71,69,63)
  z-index 30
  .button
    padding 8px
    background-color rgb(193,193,193)
    border-color white
    .img
      width 40px
      height 40px
  .text_map
    font-style normal
    font-size 24px
    position absolute
    top 12px
    left 60px
    color white
.map
  margin 0
  .esri-view-root
    .esri-ui-inner-container
      .esri-ui-corner
        left 30px
        z-index 0
.coordinate
  position fixed
  top 96.7%
  left 0.3%
  font-size 4px
  > i
    font-style normal
    color black
.leftButton
  position fixed
  top 10%
  left 1%
  .el-button
    margin-bottom 10px
    > i
      font-size 15px
      font-weight 600
.bottomMenu
  position fixed
  top 94%
  width 530px
  height 30px
  border-radius 8px
  background-color rgb(63,67,71)
  .el-button
    position absolute
    border 0
    width 40px
    height 40px
    padding 8px
    bottom 7px
    &.bottomMenuSelect
      bottom 18px
    &.button1
      margin-left 20px
      background-color rgb(0,165,227)
    &.button2
      margin-left 70px
      background-color rgb(0,157,74)
    &.button3
      margin-left 120px
      background-color rgb(223,98,30)
    &.button4
      margin-left 170px
      background-color rgb(143,114,83)
    &.button5
      margin-left 220px
      background-color rgb(189,141,62)
    &.button6
      margin-left 270px
      background-color rgb(107,192,200)
    &.button7
      margin-left 320px
      background-color rgb(108,108,110)
    &.button8
      margin-left 370px
      background-color rgb(255,202,0)
    &.button9
      margin-left 420px
      background-color rgb(211,70,247)
    &.button10
      margin-left 470px
      margin-right 20px
      background-color rgb(255,64,52)
    > i
      font-size 20px
      color white
    > span > i
      font-size 20px
      color white
.menu1
  position fixed
</style>
