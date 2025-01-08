<script>
	import Accordion from '$lib/components/ui/Accordion.svelte';
	import Grid from '$lib/components/ui/Grid.svelte';
	import Row from '$lib/components/ui/Row.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	const Package = __PACKAGE_JSON__;
</script>

<Grid>
	<Row>
		{Package.name.toUpperCase()}
		<!-- <Badge>Version {Package.version}</Badge> -->
	</Row>
	<Row>{Package.description}</Row>
	<Card title="Install">
		<p>hdjksa</p>
	</Card>
</Grid>
