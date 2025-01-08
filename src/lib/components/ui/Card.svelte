<script>
	let { title = '', mode = '', children } = $props();
</script>

<article class={'card'}>
	{#if mode === 'left'}
		<header class={'action'}>
			<div class={'leftCorner'} aria-hidden="true"></div>
			<h2 class={'title'}>{title}</h2>
			<div class={'right'} aria-hidden="true"></div>
		</header>
	{:else if mode === 'right'}
		<header class={'action'}>
			<div class={'left'} aria-hidden="true"></div>
			<h2 class={'title'}>{title}</h2>
			<div class={'rightCorner'} aria-hidden="true"></div>
		</header>
	{:else}
		<header class={'action'}>
			<div class={'left'} aria-hidden="true"></div>
			<h2 class={'title'}>{title}</h2>
			<div class={'right'} aria-hidden="true"></div>
		</header>
	{/if}
	<section class={'children'}>
		{@render children()}
	</section>
</article>

<style module>
	.card {
		position: relative;
		display: block;
		padding: 0 1ch calc((var(--font-size) * 0.5) * var(--theme-line-height-base)) 1ch;
		white-space: prewrap;
	}

	.children {
		box-shadow:
			inset 2px 0 0 0 var(--theme-text),
			inset -2px 0 0 0 var(--theme-text),
			inset 0 -2px 0 0 var(--theme-text);
		display: block;
		padding: calc((var(--font-size) * 0.5) * var(--theme-line-height-base)) 2ch
			calc(var(--font-size) * var(--theme-line-height-base)) 2ch;

		overflow-x: auto;
		overflow-y: hidden;

		&::-webkit-scrollbar {
			display: none;
		}

		scrollbar-width: none;
	}

	.action {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	.left {
		min-width: 10%;
		width: 100%;
		box-shadow:
			inset 2px 0 0 0 var(--theme-text),
			inset 0 2px 0 0 var(--theme-text);
		padding: calc((var(--font-size) * 0.5) * var(--theme-line-height-base)) 2ch 0px 1ch;
	}

	.leftCorner {
		flex-shrink: 0;
		box-shadow:
			inset 2px 0 0 0 var(--theme-text),
			inset 0 2px 0 0 var(--theme-text);
		padding: calc((var(--font-size) * 0.5) * var(--theme-line-height-base)) 1ch 0px 1ch;
	}

	.right {
		min-width: 10%;
		width: 100%;
		box-shadow:
			inset -2px 0 0 0 var(--theme-text),
			inset 0 2px 0 0 var(--theme-text);
		padding: calc((var(--font-size) * 0.5) * var(--theme-line-height-base)) 2ch 0px 1ch;
	}

	.rightCorner {
		flex-shrink: 0;
		box-shadow:
			inset -2px 0 0 0 var(--theme-text),
			inset 0 2px 0 0 var(--theme-text);
		padding: calc((var(--font-size) * 0.5) * var(--theme-line-height-base)) 1ch 0px 1ch;
	}

	.title {
		flex-shrink: 0;
		padding: 0 1ch 0 1ch;
		font-size: var(--font-size);
		font-weight: 400;
	}
</style>
