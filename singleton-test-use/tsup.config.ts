import { defineConfig } from "tsup";
import type { Options } from "tsup";

export default defineConfig((options) => {
  const common: Options = {
    // minify: !options.watch,
    splitting: false,
    sourcemap: true,
    bundle: true,
    clean: true,
    format: ["cjs", "esm"],
    external: [],
    noExternal: [],
    platform: "browser",
    dts: true,
  };

  return [{ ...common, entry: ["./src/index.ts"], outDir: "./dist" }];
});
