<script>
	import Slides from '$lib/components/Slides.svelte';
	import Slide from '$lib/components/Slide.svelte';

	// TODO: move into dynamic page
</script>

<Slides>
	<Slide>Neovim</Slide>
	<Slide>It's make me improve my productivity</Slide>
	<Slide>
		<Slide>Has a lot of plugins</Slide>
		<Slide>
			<a href="https://github.com/neovim/nvim-lspconfig">Lsp-config (autocomplete)</a>
			<img
				alt="lspconfig"
				loading="lazy"
				data-src="https://preview.redd.it/143avuvxics71.png?width=2250&format=png&auto=webp&s=27026b0cdaa9b0919e1b415e5422be5c3965ca99"
			/>
		</Slide>
		<Slide>
			<a href="https://github.com/folke/lazy.nvim">Package manager</a>
			<img
				alt="lazy.nvim"
				loading="lazy"
				data-src="https://user-images.githubusercontent.com/292349/208301737-68fb279c-ba70-43ef-a369-8c3e8367d6b1.png"
			/>
		</Slide>
		<Slide>
			<a href="https://github.com/nvimdev/dashboard-nvim">Dashboard</a>
			<img
				alt="dashboard"
				loading="lazy"
				data-src="https://user-images.githubusercontent.com/41671631/215015845-b13343c4-427e-45d6-9f92-267ab909eff1.png"
			/>
		</Slide>
		<Slide>
			<a href="https://github.com/rockerBOO/awesome-neovim">And more</a>
		</Slide>
	</Slide>
	<Slide>
		You can configuration neovim with <span class="undeline text-red-400">Lua</span>
	</Slide>
	<Slide>Bye 😂</Slide>
</Slides>