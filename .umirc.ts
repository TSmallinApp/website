export default {
  base: "/",
  metas: [
    {
      name: "apple-touch-fullscreen",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    {
      name: "theme-color",
      content: "#F0EFF4",
      media: "(prefers-color-scheme: light)",
    },
    {
      name: "theme-color",
      content: "#181A1B",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  npmClient: "yarn",
  routes: [
    { path: "/docs", component: "docs" },
    { path: "/", component: "index" },
    { path: "*", component: "index" },
  ],
};
