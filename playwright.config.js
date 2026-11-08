import {defineConfig} from '@playwright/test';
export default defineConfig({use:{browserName:'chromium',channel:'msedge',headless:true},webServer:{command:'npm run dev',port:5173,reuseExistingServer:true}});
