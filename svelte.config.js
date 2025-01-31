import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('mdsvex').MdsvexOptions} */

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
			paths: {
				base: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
			}
		})
	},
	preprocess: vitePreprocess()
};
export default config;