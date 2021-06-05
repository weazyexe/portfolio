<script lang="ts">
	import MainPage from "./pages/main/MainPage.svelte";
</script>

<div>
	<MainPage />
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

	:global(.medium) {
		font-weight: 500 !important;
	}

	:global(.bold) {
		font-weight: 700 !important;
	}
</style>
