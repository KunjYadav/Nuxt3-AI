// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/supabase",
    "nuxt-icon",
    "@pinia/nuxt",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  components: [
    {
      path: "~/components/ui",
      extensions: [".vue"],
      prefix: "",
    },
    {
      path: "~/components/shared",
      extensions: [".vue"],
      prefix: "",
    },
    {
      path: "~/components",
      extensions: [".vue"],
      prefix: "",
    },
  ],
  supabase: {
    redirectOptions: {
      login: "/auth",
      callback: "/confirm",
      exclude: ["/"],
    },
  },
  runtimeConfig: {
    openaiKey: "",
    replicateKey: "",
    stripeSecret: "",
    stripeWebhookSecret: "",
    appUrl: "",
    public: {
      publicStripeKey: "",
    },
  },
});
