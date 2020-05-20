//Simple web server using abc framework: https://github.com/zhmushan/abc

import { Application } from 'https://deno.land/x/abc@v1.0.0-rc5/mod.ts'

const app = new Application()

app
	.get('/welcome', () => {
		return 'Welcome to Deno land :)'
	})
	.start({ 
		port: 80 
	})

console.log('Server listening on port 80, try navigating to localhost/welcome')