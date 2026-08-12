import { defineConfig, markdown, openapi } from "sourcey";

export default defineConfig({
  name: "Cirrus Documentation",
  theme: {
    preset: "default",
    colors: {
      primary: "#106ebc",
      light: "#d8eafb", // hover states, lighter accents
      dark: "#106ebc", // pressed states, darker accents
    },
    fonts: {
      sans: "Figtree", // body text, headings
    },
  },
  logo: {
    light: "./assets/logo.png",        // shown in light mode
    dark: "./assets/logo-white.png",    // shown in dark mode                  // optional: where the logo links to
  },
  navbar: {
    primary: {
      type: "button",
      label: "Request Demo",
      href: "https://www.cirrusidentity.com/talk-to-us",
    },
  },
  navigation: {
    tabs: [
      {
        tab: "Cirrus Bridge",
        slug: "bridge",
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
            {
              group: "Configuration Notes",
              pages: ["bridge_notes/*"],
            },
          ],
        }),
      },
      {
        tab: "Cirrus Proxy",
        slug: "proxy",
        source: markdown({
          groups: [
            {
              group: "Proxy Overview",
              pages: ["bridge_overview/*"],
            },
          ],
        }),
      },
      {
        tab: "Identities API Reference",
        slug: "identities-api",
        source: openapi("./identity.json"),
      },
      {
        tab: "Log API Reference",
        slug: "log-api",
        source: openapi("./log.json"),
      },
    ],
  },
});
