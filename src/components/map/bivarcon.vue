<template>
  <div class="container">
    <el-amap
      class="amap-demo"
      ref="map"
      :vid="'amap-vue'"
      :center="center"
      :animateEnable="true"
      :rotateEnable="true"
      :zoomEnable="true"
      :touchZoom="true"
      :jogEnable="true"
      :resizeEnable="true"
      :zoom="zoom"
      :events="events"
      :plugin="plugin"
      :amap-manager="amapManager"
    >
      <el-amap-marker
        vid="component-marker"
        :position="componentMarker.position"
      >
      </el-amap-marker>
      <el-amap-circle
        v-for="(circle,index) in circles"
        :key="index"
        :center="circle.center"
        :radius="circle.radius"
        :fill-opacity="circle.fillOpacity"
        :events="circle.events"
        :stroke-weight="circle.strokeWeight"
        :stroke-color="circle.strokeColor"
        :fill-color="circle.fillColor"
      >
      </el-amap-circle>
    </el-amap>
  </div>
</template>
//静态属性
//amapManager 地图管理对象
//animateEnable 拖拽动画
//rotateEnable 是否旋转
//zoomEnable 是否缩放
//touchZoom 多点缩放
//jogEnable 缓动效果
//resizeEnable 自适应屏幕宽高
//动态属性
//zooms 地图显示的缩放级别范围
//center 中心坐标
<script>
  import VueAMap, {AMapManager} from 'vue-amap';

  let amapManager = new VueAMap.AMapManager();
  export default {
    name: "mapcon",
    data() {
      return {
        clickX : "",
        clickY : "",
        amapManager,
        zoom: 12,
        center: [121.59996, 31.197646],
        events: {
          init: (o) => {
            // console.log(o.getCenter())//获取地图中心
            // console.log(this.$refs.map.$$getInstance())//获取地图实例
            // o.getCity(result => {
            //   console.log(result)
            // })
          },
          "click" : (e) =>{

          }
        },
        markers: {
          position: [121.59996, 31.197646],
          events : {
            touchstart(){
              console.log(123);
            }
          },
          visible : true,
          draggable : true,
          raiseOnDrag : true
        },
        circles: [
          {
            center: [121.59996, 31.197646],
            radius: 200,
            fillOpacity: 0.5,
            strokeWeight : 1,
            strokeColor : "#00ff00",
            fillColor : "#ff9900",
            events: {
              click: () => {
                alert('click');
              }
            }
          }
        ],
        plugin: ['ToolBar', {
          pName: 'MapType',
          defaultType: 0,
          events: {
            init(o) {

            }
          }
        }],
        componentMarker: {
          position: [121.59996, 31.197646],
        },
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    margin-top: .4rem;
    height: calc(100vh - 1rem);
  }
</style>
