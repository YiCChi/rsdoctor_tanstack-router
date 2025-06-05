import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

export default defineConfig({
  plugins: [
    pluginReact({
      reactRefreshOptions: {
        exclude: [/\.css\.ts$/],
      },
    }),
  ],
  tools: {
    rspack: {
      plugins: [
        TanStackRouterRspack({ autoCodeSplitting: true, target: "react" }),
        process.env.RSDOCTOR === "true" &&
          new RsdoctorRspackPlugin({ mode: "brief" }),
      ],
    },
  },
});
