<template>
    <div id="app" class="g-body">
        <div class="g-main">
            <transition :name="viewAnimate">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    name: 'appVue',

    data() {
        return {
            isLoading: false,
            viewAnimate: ''
        }
    },

    computed: mapGetters({
        direction: 'getDirection'
    }),

    watch: {
        '$route': function(val, oldVal) {
            console.log('监听到路由变化。。。');
            console.log(this.direction);
            if (this.direction == 'forward') {
                this.viewAnimate = 'slide-in';
            } else {
                this.viewAnimate = 'slide-out';
            }
        }
    },

    created() {
        console.log(this);
    }
}
</script>
<style lang="sass">
html,
body {
    height: 100%;
}

.g-body {
    height: 100%;
    position: relative;
    overflow: hidden;
    .g-main {
        height: 100%;
        .view {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
        }
    }
}


/**
* vue-router transition
*/

.slide-in-enter-active {
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
    -webkit-animation-name: slide-in-enter;
    animation-name: slide-in-enter;
}

.slide-in-leave-active {
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-name: slide-in-leave;
    animation-name: slide-in-leave;
}

.slide-out-enter-active {
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
    -webkit-animation-name: slide-out-enter;
    animation-name: slide-out-enter;
}

.slide-out-leave-active {
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-name: slide-out-leave;
    animation-name: slide-out-leave;
}

@keyframes slide-in-enter {
    from {
        transform: translate3d(100%, 0, 0);
    }
    to {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slide-in-leave {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(-100%, 0, 0);
    }
}

@keyframes slide-out-enter {
    from {
        transform: translate3d(-100%, 0, 0);
    }
    to {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slide-out-leave {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(100%, 0, 0);
    }
}
</style>
