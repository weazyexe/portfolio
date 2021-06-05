<script lang="ts">
	import Footer from "./common/Footer.svelte";
	import MainPage from "./pages/main/MainPage.svelte";
</script>

<!-- svelte-ignore missing-declaration -->
<div>
	<MainPage />
	<Footer />
</div>

<style>
	:global(:root) {
		--background: #fff;
		--text: #000;
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--background: rgb(36, 36, 36);
			--text: rgb(236, 236, 236);
		}
	}

	:global(.text) {
		color: var(--text);
	}

	:global(.light) {
		font-weight: 300 !important;
	}

	:global(.medium) {
		font-weight: 500 !important;
	}

	:global(.bold) {
		font-weight: 700 !important;
	}
</style>
