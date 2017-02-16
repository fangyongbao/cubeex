<template>
    <div class="m-address-book-demo view">
        <Header-com :title="'address-book'"></Header-com>
        <div class="content">
            <cubee-address-book :names="names"></cubee-address-book>
        </div>
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeAddressBook,CubeeTab
} from '../../components';
export default {
    name: 'address-book-demo',
    data() {
        return {

        };
    },
    components: {
        CubeeAddressBook,
        HeaderCom,
        CubeeTab
    },
    created() {
        let _this = this;
        let names = [{
            id: 1,
            value: 'Aril'
        }, {
            id: 2,
            value: 'Bril'
        }, {
            id: 3,
            value: 'Bail'
        }, {
            id: 4,
            value: 'Zril'
        }, {
            id: 5,
            value: 'Zril'
        }, {
            id: 6,
            value: 'Bril'
        }, {
            id: 7,
            value: 'Mril'
        }, {
            id: 8,
            value: 'Mril'
        }, {
            id: 9,
            value: 'Aril'
        }, {
            id: 10,
            value: 'Bril'
        }, {
            id: 11,
            value: 'Fril'
        }, {
            id: 12,
            value: 'Mril'
        }, {
            id: 13,
            value: 'Lril'
        }, {
            id: 14,
            value: 'Nril'
        }];
        _this.names = names;
    }
};
</script>
<style lang="sass" scoped>
.m-address-book-demo {
    color: #999;
    font-size: 14px;
    padding-bottom: 1rem;
    .content {
        height: 100%;
    }
}


</style>
