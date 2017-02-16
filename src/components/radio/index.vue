<template>
    <label class="f-cb">
        <div class="u-radio f-fl">
            <input type="radio" v-model="currentValue" :value="option.value" @change="change" :disabled="option.isDisabled">
            <span></span>
        </div>
    </label>
    
</template>
<script>
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
.u-radio {
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
            border-radius: 0.18rem;
            position: relative;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
            &:after {
                content: '';
                width: 0.16rem;
                height: 0.16rem;
                border-radius: 0.08rem;
                background-color: #FFF;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                -webkit-transform: translate(-50%,-50%);
                z-index: 2;
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
