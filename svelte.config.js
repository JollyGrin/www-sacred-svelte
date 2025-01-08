import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({
		style: { css: false, scss: true }
	}),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			strict: false
		}),
		alias: { root: '.' }
	}
};

export default config;
