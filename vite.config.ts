import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as fs from 'fs';
import * as path from 'path';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		__PACKAGE_JSON__: JSON.stringify(pkg)
	}
});
