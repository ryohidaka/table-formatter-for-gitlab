import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "Table Formatter for GitLab™",
    host_permissions: ["*://*.gitlab.com/*"],
    browser_specific_settings: {
      gecko: {
        id: "table-formatter-for-gitlab@hidaka.dev",
      },
    },
  },
  vite: () => ({
    plugins: [react()],
  }),
});
