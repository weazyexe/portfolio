<script>
	import { Router, Link, Route } from 'svelte-routing'
	export let name;
</script>

<main>
	<Router>
		<Route  />
	</Router>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
