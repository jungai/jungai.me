<script>
	/**
	 * id of item
	 * @type {string | null}
	 */
	export let id = null;

	/**
	 * animate item
	 * @type {boolean}
	 */
	export let isAnimate = false;

	/**
	 * idk what the heck
	 * @type {boolean}
	 */
	export let isRestart = false;
</script>

<section
	data-auto-animate-id={id}
	data-auto-animate={isAnimate || null}
	data-auto-animate-restart={isRestart}
>
	<slot />
</section>