<script>
	/**
	 * id of item
	 * @type {string | null}
	 */
	export let id = null;

	/**
	 * @type {string | boolean | null}
	 */
	export let lines = null;

	/**
	 * @type {boolean}
	 */
	export let isNoEscape = true;
</script>

<pre data-id={id}>
	<code data-trim data-line-numbers={lines} data-noescape={isNoEscape}>
		<slot />
	</code>
</pre>