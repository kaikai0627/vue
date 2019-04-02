<template>
	<ul class="cause text-center clearfix">
	    <li class="pull-left" @click="cutCause" :class="{ active: isActive}">
	        <span>因公</span>
	    </li>
	    <li class="pull-left" @click="cutCause" :class="{ active: hasError}">
	        <span>因私</span>
	    </li>
	</ul>
</template>

<script>
export default {
	name: 'SearchCause',
	data () {
		return {
			isActive: true,
			hasError: false
		}
	},
	methods: {
		cutCause () {
			this.isActive = this.isActive ? false : true
			this.hasError = this.hasError ? false : true
		}
	}
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.cause
    background: #fff
    width: 100%
    margin-bottom: .1rem
    height: .8rem
    line-height: .8rem
    padding: 0 .34rem

 	.cause li
	    width: 50%
	    cursor:pointer

		.cause span
		    display: inline-block
		    height: 100%
		    border-bottom: 1px solid transparent

		.cause li.active span
		    color: #258FED
		    border-color: #258FED

</style>
