// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });

export default defineConfig({
  site: "https://didepoyraz.github.io/",  
  base: "/",                             
  vite: {
    plugins: [tailwindcss()],
  },
});
