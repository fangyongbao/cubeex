<template>
    <div class="u-radio" @change="$emit('change', currentValue)">
        <input type="radio" v-model="currentValue" :value="value">
        <span></span>
    </div>
</template>
<script>
/**
 * Radio
 * @module components/radio
 * @desc 单选框组件
 *
 * @param {string} value - 选中值
 * @param {string} id - 单选框ID
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 * @example
 * <Radio value="list1" checked id="1" name="list" v-on:changeRadio="changeRadio"></Radio>
 */
export default {
    name: 'radio',
    data() {
        return {
            currentValue: this.value
        };
    },
    props: {
        value: {
            type: String,
            required: true
        },
        options: {
            type: Object,
            required: true
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        },
        currentValue(val) {
            this.$emit('input', val);
        }
    },
    mounted() {
        console.log(this);
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
