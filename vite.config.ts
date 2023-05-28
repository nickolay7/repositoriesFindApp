import * as dotenv from "dotenv";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

const dotEnv = dotenv.config({ path: `${__dirname}/.env` });

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		react(),
		svgr({
			exportAsDefault: true,
		}),
	],
	server: {
		port: 3000,
	},
	define: {
		"process.env": JSON.stringify(dotEnv.parsed),
	},
});
