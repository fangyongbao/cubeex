<template>
	<div class="munu-tabs f-flex">
        <router-link :to="{ path : '/home' }" tag="div" class="f-flex1 tabItem" :class="{ 'active' : whichTab == 1 }">
            <div class="tabIcon homeIcon"></div>
            <p>
                Home
            </p>
        </router-link>
        <router-link :to="{ path : '/menu' }" tag="div" class="f-flex1 tabItem" :class="{ 'active' : whichTab == 2 }">
            <div class="tabIcon demoIcon"></div>
            <p>
                Demo
            </p>
        </router-link>
    </div>
</template>

<script>
	export default {
		props: {
			whichTab: {
				type: Number,
				required: true
			}
		},
		methods: {
		},
		mounted: function () {
			this.$nextTick(function () {
				// 代码保证 this.$el 在 document 中
				// console.log(this.alertInfo);
			})
		}
	}
</script>

<style lang="sass" scoped>
	.munu-tabs {
        position: fixed;
        width: 100%;
        height: 0.98rem;
        box-shadow: 0 -2px 8px 0 #C8CBD1;
        background-color: #FFF;
        bottom: 0;
        padding: 0.15rem 0 0.5rem;
        .tabItem {
            p {
                text-align: center;
                font-size: 11px;
                color: #BCC1D2;
            }
            .tabIcon {
                height: 0.44rem;
                margin-bottom: 0.04rem;
            }
            .homeIcon {
                background: url(../../assets/images/icon/icon-home.png) center no-repeat;
                background-size: 0.44rem 0.44rem;
            }
            .demoIcon {
                background: url(../../assets/images/icon/icon-demo-default.png) center no-repeat;
                background-size: 0.4rem 0.4rem;
            }
        }
        .active {
            p {
                color: #2D3859;
            }
            .homeIcon {
                background: url(../../assets/images/icon/icon-home-active.png) center no-repeat;
                background-size: 0.44rem 0.44rem;
            }
            .demoIcon {
                background: url(../../assets/images/icon/icon-demo-active.png) center no-repeat;
                background-size: 0.4rem 0.4rem;
            }
        }
        .tabItem:active {
            p {
                color: #2D3859;
            }
            .homeIcon {
                background: url(../../assets/images/icon/icon-home-active.png) center no-repeat;
                background-size: 0.44rem 0.44rem;
            }
            .demoIcon {
                background: url(../../assets/images/icon/icon-demo-active.png) center no-repeat;
                background-size: 0.4rem 0.4rem;
            }
        }
    }
</style>