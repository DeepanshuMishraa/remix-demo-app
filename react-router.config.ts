import { type Config } from "@react-router/dev/config";

export default {
  ssr: true, // enable server-side rendering
  prerender: ['/about'], // prerender the about page
} satisfies Config;
