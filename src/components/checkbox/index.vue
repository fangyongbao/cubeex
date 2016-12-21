<template>
    <div class="u-checkbox" @change="$emit('change', currentValue)">
        <input type="checkbox" v-model="currentValue" :value="option.value">
        <span></span>
    </div>
</template>
<script>
/**
 * checkbox
 * @module components/checkbox
 * @desc 复选框组件
 *
 * @param {object{}} option - 可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {array[]} value - 选中值的数组
 *
 * @example
 * <Checkbox v-model="value1" :option="option" v-on:change="change"></Checkbox>
 */
export default {
    name: 'checkbox',
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
        value: Array
    },
    methods: {},
    watch: {
        value(val) {
            this.currentValue = val;
        },
        currentValue(val) {
            this.$emit('input', val);
        }
    },
    mounted() {}
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
