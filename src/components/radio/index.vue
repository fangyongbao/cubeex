<template>
    <div class="u-checkbox">
        <input type="radio" v-model="currentValue" :value="option.value" @change="change">
        <span></span>
    </div>
</template>
<script>
/**
 * radio
 * @module components/radio
 * @desc 单选框组件
 *
 * @param {object{}} option - 可以传入 {value: 'value'}
 * @param {string} value - 选中值
 *
 * @example
 * <Radio v-model="value1" :option="option" v-on:change="change"></Radio>
 */
export default {
    name: 'radio',
    data() {
        return {
            currentValue: this.value
        };
    },
    props: {
        option: {
            type: Object,
            required: true
        },
        value: String
    },
    methods: {
        change(){
            this.$emit('input', this.currentValue);
            this.$emit('change', this.currentValue);
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        }
    }
}
</script>
<style lang="sass" scoped>
.u-radio,
.u-checkbox {
    height: 18px;
    width: 18px;
    position: relative;
    display: inline-block;
    font-size: 0;
    input {
        display: none;
        position: absolute;
        & + span {
            display: inline-block;
            width: 18px;
            height: 18px;
            border: 1px solid #ddd;
            border-radius: 2px;
            position: relative;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
            &:after {
                border-bottom: 1px solid #fff;
                border-left: 1px solid #fff;
                content: "";
                position: absolute;
                height: 4px;
                left: 5px;
                top: 4px;
                width: 7px;
                -webkit-transform: scale(1) rotate(-50deg);
                transform: scale(1) rotate(-50deg);
                display: none;
            }
        }
        &:checked {
            & + span {
                border-color: #5682D9;
                background: #5682D9;
                &:after {
                    display: block;
                }
            }
        }
    }
}
</style>
