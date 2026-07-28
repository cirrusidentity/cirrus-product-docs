import { defineConfig, markdown, openapi } from "sourcey";

export default defineConfig({
  name: "Cirrus Documentation",
  theme: {
    preset: "default",
    colors: {
      primary: "#106ebc",
      light: "#d8eafb", // hover states, lighter accents
      dark: "#08385f", // pressed states, darker accents
    },
    fonts: {
      sans: "Figtree", // body text, headings
    },
  },
  logo: "./assets/logo.png",
  navigation: {
    tabs: [
      {
        tab: "Cirrus Bridge",
        slug: "",
        source: markdown({
          groups: [
            {
              group: "Bridge Overview",
              pages: ["bridge_overview/*"],
            },
            {
              group: "Enterprise Bridge - Entra ID",
              pages: ["enterprise_bridge_entra/*"],
            },
            {
              group: "Enterprise Bridge - Okta",
              pages: ["enterprise_bridge_okta/*"],
            },
            {
              group: "Enterprise Bridge - Duo SSO",
              pages: ["enterprise_bridge_duo/*"],
            },
            {
              group: "Standalone Bridge",
              pages: ["standalone_bridge/*"],
            },
          ],
        }),
      },
      {
        tab: "Identities API Reference",
        slug: "api",
        source: openapi("./openapi.json"),
      },
    ],
  },
});
