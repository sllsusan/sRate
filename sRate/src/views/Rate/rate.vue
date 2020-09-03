<template>
    <div>
        <div class="rate">
            <div class="title">基本用法</div>
            <s-rate v-model="score" color="red" @change="handleChange"></s-rate>
        </div>
        <div class="rate">
            <div class="title">半星</div>
            <s-rate v-model="score" color="orange" :allowHalf=true @change="handleChange"></s-rate>
        </div>
        <div class="rate">
            <div class="title">可滑动</div>
            <s-rate v-model="score" color="yellow" :touchable=true @change="handleChange"></s-rate>
        </div>
        <div class="rate">
            <div class="title">自定义长度</div>
            <s-rate v-model="score" starLength="7" color="green" :touchable=true @change="handleChange"></s-rate>
        </div>
        <div class="rate">
            <div class="title">自定义大小，宽度</div>
            <s-rate v-model="score" size="34" gutter="4" color="Cyan" :touchable=true :allowHalf=true @change="handleChange"></s-rate>
        </div>
        <div class="rate">
            <div class="title">禁用状态，颜色</div>
            <s-rate v-model="score" :disabled="true" disabledColor="blue" @change="handleChange"></s-rate>
        </div>
        <div class="rate">
            <div class="title">只读</div>
            <s-rate v-model="score" :readonly="true" color="purple" @change="handleChange"></s-rate>
        </div>
    </div>

</template>

<script>
    import sRate from "../../components/sRate";
    export default {
        name: "rate",
        data(){
            return{
                score: 4
            }
        },
        components: {
            sRate
        },
        methods:{
            handleChange(){
                console.log(this.score)
            }
        }
    }
</script>

<style scoped>
    .rate{
        padding: 0 0 0 20px;
    }
    .title{
        margin: 0;
        padding: 16px 0 16px 0;
        color: rgba(69, 90, 100, 0.6);
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
</style>
