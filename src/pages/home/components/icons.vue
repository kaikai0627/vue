<template>
	<div class="menu-content">
		<swiper class="swiper-wrap-icons" :options="swiperIcons">
			<swiper-slide v-for="(page, index) of pages" :key="index">
		        <ul class="menu-list text-center clearfix">		        	
		            <li class="menu-item pull-left"
		            	v-for="item of page"
		            	:key="item.id"
	            	>
	            		<router-link :to="item.link" class="menu-link">
		                	<div :class="'menu-icon '+item.iconClass"></div>
		                	<div class="menu-title">{{item.desc}}</div>
		                </router-link>
		            </li>
	            </ul>	
			</swiper-slide>
    	</swiper>
    </div>
</template>

<script>
export default {
	name: 'HomeIcons',
	props: {
		list: Array
	},
	data () {
		return {
			swiperIcons: {
				autoplay: false,	
			}
		}
	},
	computed: {
		pages () {
			const pages = []
			this.list.forEach((item, index) => {
				const page = Math.floor(index / 6)
				if(!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.menu-content 
    padding-bottom: .4rem
    background: #fff
 
	.menu-list 
	    background: #fff
	    padding: 0 .4rem
	    width: 100%

		.menu-item 
		    width: 33.3% 
		    height: 1.95rem
			
			.menu-link
				display:block
				padding: .5rem 0 .4rem
				height: 1.95rem

			.menu-title
				line-height: .6rem
				color: $derkTextColor
				ellipsis()
			

			.menu-icon 
			    display: inline-block
			    width: .79rem
			    height: .6rem
			    background: url("./icon-02.png") no-repeat
			    background-size: 2.95rem
			    position: relative

				i
				    display: inline-block
				    border-radius: 50%
				    padding: .05rem
				    font-size: .2rem
				    background: #E1152B
				    color: #fff
				    text-align: center
				    font-style: normal
				    position: absolute
				    right: -.15rem
				    top: -.15rem

			.menu-icon-01 
			    background-position-x: -1.1rem

			.menu-icon-02 
			    background-position-x: -2.25rem

			.menu-icon-03 
			    background-position: 0 -.76rem

			.menu-icon-04 
			    background-position: -1.06rem -.76rem

			.menu-icon-05 
			    background-position: -2.25rem -.76rem

			.menu-icon-06 
			    background-position: 0 -1.53rem

			.menu-icon-07
			    background-position: -1.1rem -1.53rem

			.menu-icon-08 
			    background-position: -2.28rem -1.53rem

			.menu-icon-09 
			    background-position: 0 -2.34rem

			.menu-icon-10 
			    background-position: -1.06rem -2.31rem

			.menu-icon-11 
			    background-position: -2.27rem -2.31rem
		

</style>
