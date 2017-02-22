<template>
    <div class="u-checkbox">
        <input type="checkbox" v-model="currentValue" :value="option.value" @change="change" :disabled="option.isDisabled">
        <span></span>
    </div>
</template>
<script>
/**
 * checkbox
 * @module components/checkbox
 * @desc 复选框组件
 *
 * @param {object{}} option - 可以传入 {value: 'value'}
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
    methods: {
        change(){
            if(this.currentValue.indexOf(this.option.value) == -1) {
                this.currentValue.push(this.option.value);
            } else {
                this.currentValue.splice(this.currentValue.indexOf(this.option.value),1);
            }
            this.$emit('input', this.currentValue);
            this.$emit('change', this.currentValue);
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        }
    },
    mounted() {}
}
</script>
<style lang="sass" scoped>
.u-radio,
.u-checkbox {
    height: 0.36rem;
    width: 0.36rem;
    position: relative;
    display: inline-block;
    font-size: 0;
    input {
        display: none;
        position: absolute;
        & + span {
            display: inline-block;
            width: 0.36rem;
            height: 0.36rem;
            border: 1px solid #9099B4;
            border-radius: 2px;
            position: relative;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
            &:after {
                border-bottom: 1px solid #fff;
                border-left: 1px solid #fff;
                content: "";
                position: absolute;
                height: 0.08rem;
                left: 50%;
                top: 50%;
                width: 0.14rem;
                -webkit-transform: translate(-50%,-75%) rotate(-50deg);
                transform: translate(-50%,-75%) rotate(-50deg);
                display: none;
            }
        }
        &:checked {
            & + span {
                border-color: #005BAC;
                background: #005BAC;
                &:after {
                    display: block;
                }
            }
        }
        &:disabled {
            & + span {
                background: #E6E6E6;
                border-color: #CCCCCC;
            }
        }
    }
}
</style>
