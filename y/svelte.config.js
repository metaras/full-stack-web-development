import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			server: {
				hmr: {
					clientPort: process.env.HMR_HOST ? 443 : 3000,
					host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost"
				}
			}
		},
		methodOverride: {
			allowed: ['PUT', 'PATCH', 'DELETE']
		}
		// hydrate the <div id="stelte"> element in src/app.html
		// target: '#svelte'
	}
};

export default config;
