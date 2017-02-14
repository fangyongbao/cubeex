<template>
    <div class="u-select arrow" :class="{open : statusC}">
        <div class="text f-toe" @click="toggleSelect">{{value.value}}</div>
        <!-- <transition name="zoom-in-top"> -->
        <ul v-show="statusC" class="f-ot">
            <li class="slectItem" :class="{'click': item.id == value.id}" v-for="item in options" :id="item.id" @click="choose(item)">{{item.value}}</li>
        </ul>
        <!-- </transition> -->
    </div>
</template>
<script>
/**
 * select
 * @module components/select
 * @desc 下拉框组件
 * @param {Array[] options - option对象包含id、value
 * @param {object{}} value - 选中值的数组
 *
 * @example
 * <Cubee-select v-model="value" :options="options"></Cubee-select>
 */
export default {
    name: 'select',
    data() {
        return {
            statusC: false
        };
    },
    props: {
        options: {
            type: Array,
            required: true
        },
        value: Object
    },
    methods: {
        toggleSelect() {
            this.statusC = !this.statusC;
        },
        choose(item) {
            setTimeout(() => {
                this.$emit('input', item);
            }, 300);
            this.statusC = !this.statusC;
        }
    }
}
</script>
<style lang="sass" scoped>
.zoom-in-top-enter-active,
.zoom-in-top-leave-active {
    opacity: 1;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;
    -webkit-transform-origin: center top;
    transform-origin: center top;
}

.zoom-in-top-enter,
.zoom-in-top-leave-active {
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
}

.u-select {
    width: 100%;
    // height: 40px;
    line-height: 40px;
    
    color: #596380;
    position: relative;
    box-sizing: border-box;
    background-color: #FFF;
    &.open {
        &:after {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
    }
    &.arrow {
        &:after {
            content: '';
            width: 40px;
            height: 40px;
            position: absolute;
            top: 0;
            right: 0;
            -webkit-transition: all 0.2s;
            transition: all 0.2s;
            background: url(../../assets/images/icon/icon_down.png) center no-repeat;
            background-size: 14px 6.5px;
        }
    }
    .text {
        padding: 0 10px;
        line-height: 40px;
        background-color: #FFF;
        border-top: 1px solid #E6E6E6;
        border-bottom: 1px solid #E6E6E6;
    }
    ul {
        top: 38px;
        width: 100%;
        background: #F7F9FA;
        border-radius: 2px;
        z-index: 1;
        max-height: 200px;
        li {
            width: 100%;
            height: 40px;
            padding: 0 10px;
            &:active,
            &.click {
                background-color: #609ED6;
                color: white;
            }
        }
    }
}
</style>
