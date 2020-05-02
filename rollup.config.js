import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config();

const production = !process.env.ROLLUP_WATCH;

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
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('public/build/bundle.css');
			}
		}),
		replace({
			env: JSON.stringify({
				FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
				FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
				FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
				FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
				FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
				FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
				FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
				FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
			})
			/*process: JSON.stringify({
				env: {

				}
			}),*/
		}),
		babel(/*{
			exclude: 'node_modules'
		}*/),
		commonjs({
			//include: 'node_modules',
			//exclude: 'src/**'
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
			mainFields: ['main', 'module'],
		}),

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

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
