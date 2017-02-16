<template>
    <div class="m-qrcode-demo view">
        <Header-com :title="'QQ'"></Header-com>
        <cubee-qq :account="4008817800"></cubee-qq>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeQq
} from '../../components';

export default {
    name: 'qq-demo',
    data() {
        return {
        }
    },
    components: {
        HeaderCom,
        CubeeQq
    },
    methods: {

    },
    mounted() {

    }
};
</script>
<style lang="sass" scoped>
</style>
