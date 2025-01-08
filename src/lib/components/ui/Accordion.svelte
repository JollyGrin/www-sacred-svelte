<script>
	import Row from '$lib/components/ui/Row.svelte';
	import { classNames } from '$lib/components/ui/utility'; // Replace with actual utility or define here

	let { title = '', defaultValue = false, children } = $props();

	let show = $state(defaultValue);
	let accordionRef;

	const toggleShow = () => {
		show = !show;
	};
</script>

<Row
	bind:this={accordionRef}
	tabindex="0"
	role="button"
	onclick={toggleShow}
	aria-expanded={show.toString()}
>
	<div class={classNames('flex', show ? 'active' : undefined)}>
		<span class="icon">{show ? '▾' : '▸'}</span>
		<span class="content">{title}</span>
	</div>
</Row>
{#if show}
	<Row style="padding-left: 1ch;">
		{@render children()}
	</Row>
{/if}

<style module lang="scss">
	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;

		&:hover {
			background: var(--theme-focused-foreground);
		}
	}

	.icon {
		flex-shrink: 0;
		user-select: none;
		cursor: pointer;
	}

	.content {
		min-width: 10%;
		width: 100%;
		user-select: none;
		cursor: pointer;
		transition: 200ms ease all;
		transition-property: padding;
		padding-left: 0ch;
	}

	.active {
		.content {
			padding-left: 1ch;
		}
	}
</style>
