import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

dotenv.config();

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		replace({
			preventAssignment: true,
			firebaseKeys: JSON.stringify({
				FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
				FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
				FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
				FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
				FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
				FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
				FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
				FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
			})
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),

		// copy bootstrap folder to public from node_modules
		copy({
			targets: [
				{
					src: 'node_modules/bootstrap/dist/**/*',
					dest: 'public/vendor/bootstrap'
				},
				{
					src: 'src/assets/*',
					dest: 'public/assets'
				}
			]
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
