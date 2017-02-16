<template>
    <div class="m-list view">
        <Header-com></Header-com>
        <div class="content">
            <div class="example1">
                <cubee-Slider v-model="value1" :step="5"></cubee-Slider>
            </div>
            <div class="example1">
                <cubee-Slider v-model="value2" :min="min" :max="max" :step="1"></cubee-Slider>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeSlider
} from '../../components';
export default {
    name: 'slider-demo',
    data() {
        return {
            value1:5,
            value2:10,
            min:10,
            max:70
        }
    },
    components: {
        HeaderCom,
        CubeeSlider
    }
}
</script>
<style lang="sass" scoped>

.m-list {
    .item {
        margin-top: 10px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        color: #fff;
        background: #385FB5;
        font-size: 14px;
    }
    .item:nth-of-type(1) {
        margin: 0;
    }
    .itemC {
        line-height: 60px;
    }
    .content {
        text-align: center;

        .example1{
            padding:20px;
        }
    }

    .btn{
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        background-color: #ffffff;
        border-radius: 25px;
        color: #28a0f2;
        display: inline-block;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        padding: 0 20px;
        position: relative;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        border: 1px solid #28a0f2;
        border-radius: 50px;
        cursor: pointer;
    }
}
</style>
