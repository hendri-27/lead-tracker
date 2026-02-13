import {defineConfig, loadEnv} from "vite"

export default defineConfig(({command, mode}) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		define: {
			DATABASE_URL: JSON.stringify(env.DATABASE_URL),
		}
	}
})