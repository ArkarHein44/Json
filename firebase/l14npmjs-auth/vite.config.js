import { defineConfig } from 'vite';

	export default defineConfig({
        publicDir:'../public',
		root:'./src',
		build:{
			outDir:'../dist', // define the output directory, the output directory for building 
		},
        server:{
            watch:{
                usePolling: true
            }
        }
	});