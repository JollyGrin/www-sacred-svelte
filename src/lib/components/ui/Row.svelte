<script lang="ts">
	let { children, ...rest } = $props();
	let ref;
</script>

<section class="row" bind:this={ref} {...rest}>
	{@render children()}
</section>

<style module>
	.row {
		display: block;
		outline: 0;
		border: 0;
		transition: 200ms ease background;

		&:focus {
			background: var(--theme-focused-foreground);
		}
	}
</style>
