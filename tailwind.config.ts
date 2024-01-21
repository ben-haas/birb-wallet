import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { birbTheme } from './birb_theme';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	plugins: [
		skeleton({
			themes: {
				custom: [birbTheme],
				preset: ['skeleton']
			}
		})
	]
} satisfies Config;

export default config;
