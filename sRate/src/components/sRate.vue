<template>
  <div
          ref="rateIndex"
          :style="{
              'cursor':(disabled?'not-allowed':''),'width': size*starLength+gutter*(starLength-1)+'px'
              }"
          @touchmove.stop.prevent="handleTouchMove"
  >
      <span
              v-for="(item,index) in starList"
              :ref="'rate'+index"
              :key="index"
              :class="item"
              class="iconfont"
              :style="{
              'color':(disabled?disabledColor:color),
              'font-size':item!=='icon-half'?size+'px':(size-2)+'px',
              'margin-right':gutter+'px'
              }"
              @click="readonly || disabled?'':handleStarClick($event,item,index)"

      >
      </span>
  </div>
</template>

<script>
export default {
  name: 'sRate',
  data(){
    return{
        scores : this.value
    }
  },
  model:{
      prop: 'value',
      event: 'change'
  },
  props: {
      value:{ // 评分分值
          type: [String, Number],
          default: "0"
      },
      starLength:{ // 星星数量
          type: [String, Number],
          default: "5"
      },
      color:{ // 颜色
          type: String,
          default: "#123456"
      },
      size:{ // 图标大小，默认单位为 px
          type: [String, Number],
          default: "26"
      },
      gutter:{ // 图标间距，默认单位为 px
          type: [String, Number],
          default: "2"
      },
      allowHalf:{ //是否半星
          type: Boolean,
          default: false
      },
      readonly:{ // 是否只读
          type: Boolean,
          default: false
      },
      disabled:{ // 是否禁用
          type: Boolean,
          default :false
      },
      disabledColor:{ // 禁用颜色
          type: String,
          default :"#bdbdbd"
      },
      touchable:{ // 禁用滑动
          type: Boolean,
          default :false
      }
  },
  computed:{
    starList(){//星星的数组
      let result = [];
      let starFull = 'icon-full'
      let starHalf = 'icon-half'
      let starEmpty = 'icon-empty'
      let score = Math.floor(this.scores * 2) / 2;
      let starhalf = score%1 != 0 ? true : false ;
      let fullstar = Math.floor(score);
      for(let i=0 ; i<fullstar;i++){//放全星
        result.push(starFull);
      }
      if(starhalf){//放半星
        result.push(starHalf)
      }
      if(result.length < this.starLength){
        let emptystar = this.starLength - result.length;
        for(let i=0;i<emptystar;i++){
          result.push(starEmpty);
        }
      }
      return result;
    }
  },
  methods:{
    handleStarClick(e,item,index){
        let left = 'rate'+index
        left = this.$refs[left][0].getBoundingClientRect().left
        if(e.pageX-left<=this.size/2 && this.allowHalf){
            this.scores = index +0.5
        }else{
            this.scores = index +1
        }
        this.$emit('change', this.scores)
    },
    handleTouchMove(e){
        if(this.readonly || this.disabled || !this.touchable){
            return;
        }
        let touch = e.touches[0];
        let left = this.$refs.rateIndex.getBoundingClientRect().left
        let deltaX = parseInt(touch.pageX - left)
        let scoreX = deltaX/(Number(this.size)+Number(this.gutter))
        let handleNum = scoreX.toString().split(".");
        let handleDot='0.'+handleNum[1];
        if(Number(scoreX)>=this.starLength || Number(scoreX) < 0){
            return
        }
        if(handleDot<=0.5 && this.allowHalf){
            this.scores = parseInt(scoreX)+0.5
        }else{
            this.scores = parseInt(scoreX)+1
        }
    }
  }
}
</script>

<style>

</style>
