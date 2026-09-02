import { defineConfig, markdown, openapi } from "sourcey";

export default defineConfig({
  name: "Cirrus Documentation",
  theme: {
    preset: "default",
    colors: {
      primary: "#106ebc",
      light: "#d8eafb",
      dark: "#106ebc",
    },
    fonts: {
      sans: "Figtree",
    },
  },
  logo: {
    light: "./assets/logo.png",
    dark: "./assets/logo-white.png",
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
              pages: ["bridge/overview/introduction.md", "bridge/overview/getting-started.md"],
            },
            {
              group: "Enterprise Bridge - Entra ID",
              pages: ["bridge/enterprise/entra/*"],
            },
            {
              group: "Enterprise Bridge - Okta",
              pages: ["bridge/enterprise/okta/*"],
            },
            {
              group: "Enterprise Bridge - Duo SSO",
              pages: ["bridge/enterprise/duo/*"],
            },
            {
              group: "Standalone Bridge",
              pages: ["bridge/standalone/*"],
            },
            {
              group: "Application Integrations",
              pages: ["proxy/integrations/cas/*", "proxy/integrations/saml/*"],
            },
            {
              group: "Other Configuration",
              pages: ["bridge/other/*"],
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
              pages: ["proxy/overview/*"],
            },
            {
              group: "Authentication Integrations",
              pages: ["proxy/authentication/*"],
            },
            {
              group: "Application Integrations",
              pages: ["proxy/integrations/cas/*", "proxy/integrations/oidc/*", "proxy/integrations/saml/*", "proxy/integrations/federation/*"],
            },
          ],
        }),
      },
      {
        tab: "Managed Identities",
        slug: "managed-identities",
        source: markdown({
          groups: [
            {
              group: "Managed Identities Overview",
              pages: ["managed-identities/overview/*"],
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
