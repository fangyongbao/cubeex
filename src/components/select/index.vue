<template>
    <div class="u-select arrow" :class="{open : statusC}">
        <div class="text f-toe" @click="toggleSelect">{{value.value}}</div>
        <transition name="zoom-in-top">
            <ul v-if="statusC" class="f-ot">
                <li class="slectItem" :class="{'click': item.id == value.id}" v-for="item in options" :id="item.id" @click="choose(item)">{{item.value}}</li>
            </ul>
        </transition>
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
    height: 40px;
    line-height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    color: #666;
    position: relative;
    box-sizing: border-box;
    &.open {
        &:after {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
    }
    &.arrow {
        &:after {
            content: '';
            width: 0px;
            height: 0px;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-bottom: 8px solid #2D3859;
            right: 10px;
            position: absolute;
            top: 50%;
            margin-top: -4px;
            -webkit-transition: all 0.2s;
            transition: all 0.2s;
        }
    }
    .text {
        padding: 0 10px;
        line-height: 40px;
    }
    ul {
        position: absolute;
        top: 38px;
        left: -1px;
        right: -1px;
        background: #fff;
        border: 0.02rem solid rgba(0, 0, 0, 0.10);
        box-shadow: 0 6px 10px 0 rgba(56, 95, 181, 0.10);
        border-radius: 2px;
        z-index: 1;
        max-height: 200px;
        li {
            width: 100%;
            height: 40px;
            padding: 0 10px;
            &:active,
            &.click {
                background-color: #5782D9;
                color: white;
            }
        }
    }
}
</style>
