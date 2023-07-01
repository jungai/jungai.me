<script>
	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import HighLigh from 'reveal.js/plugin/highlight/highlight';
	import Notes from 'reveal.js/plugin/notes/notes';
	import { onMount } from 'svelte';

	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import 'reveal.js/plugin/highlight/monokai.css';

	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, HighLigh, Notes]
		});

		deck.initialize();
	});
</script>

<div class="reveal">
	<div class="slides">
		<slot />
	</div>
</div>