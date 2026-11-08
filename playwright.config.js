import {defineConfig} from '@playwright/test';
export default defineConfig({use:{browserName:'chromium',channel:'msedge',headless:true},webServer:{command:'npm run dev -- --port 5180 --strictPort',url:'http://127.0.0.1:5180',reuseExistingServer:true}});
