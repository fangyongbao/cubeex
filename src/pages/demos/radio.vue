<template>
    <div class="m-radio-demo view">
        <label class="f-flex f-flexr item">
            <div class="f-flex f-flextc f-flexvc choose">
                <Radio v-model="value" :options="options"></Radio>
            </div>
            <div class="f-flex1 f-flex f-flexvc label">
                cubee
            </div>
        </label>
        <label class="f-flex f-flexr item">
            <div class="f-flex f-flextc f-flexvc choose">
            </div>
            <div class="f-flex1 f-flex f-flexvc label">
                cubee
            </div>
        </label>
        <label class="f-flex f-flexr item">
            <div class="f-flex f-flextc f-flexvc choose">
            </div>
            <div class="f-flex1 f-flex f-flexvc label">
                cubee
            </div>
        </label>
        <label class="f-flex f-flexr item">
            <div class="f-flex f-flextc f-flexvc choose">
            </div>
            <div class="f-flex1 f-flex f-flexvc label">
                cubee
            </div>
        </label>
    </div>
</template>
<script>
import {
    Radio
} from '../../components';
export default {
    name: 'radio-demo',
    data() {
        return {
            value: '值A',
            options: {
                value: '值A'
            }
        }
    },
    components: {
        Radio
    },
    methods: {
        changeRadio(checked, val) {
            console.log(checked + ':' + val);
        }
    },
    mounted() {}
}
</script>
<style lang="sass" scoped>
.m-radio-demo {
    color: #fff;
    font-size: 14px;
    .item {
        height: 60px;
        margin-top: 10px;
        background: gray;
        .choose {
            width: 60px;
        }
    }
}
</style>
