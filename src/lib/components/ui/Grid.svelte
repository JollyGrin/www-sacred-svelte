<script lang="ts">
	let { children, ...rest } = $props();
</script>

<div class="grid" {...rest}>
	{@render children()}
</div>

<style module lang="scss">
	.grid {
		display: block;
		padding: calc(var(--font-size) * var(--theme-line-height-base)) 2ch
			calc(var(--font-size) * var(--theme-line-height-base)) 2ch;
	}
</style>
