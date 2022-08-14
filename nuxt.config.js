export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Auction website",
    htmlAttrs: {
      lang: "en",
    
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Auction website" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "./CSS/bootstrap.min.css",
      },
       {
        rel: "stylesheet",
        href: "./CSS/bootstrap.rtl.min.css",
      },
<<<<<<< HEAD
=======
      // {
      //   rel: "stylesheet",
      //   href: "./CSS/product_style.css",
      // },
      
      // {
      //   rel: "stylesheet",
      //   href: "./CSS/style.css",
      // },
      // {
      //   rel: "stylesheet",
      //   href: "./CSS/user_style.css",
      // },
>>>>>>> 7a67072b7030612051c71ab14d64ef444bca9c7e
    ],
    script: [
      {
        src: "./js/bootstrap.bundle.min.js",
        type: "text/javascript",
      },
      {
        src: "./js/js.js",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
<<<<<<< HEAD
    '~/assets/css/fnt.css',
=======
    // '~/static/CSS/fnt.css',
>>>>>>> 7a67072b7030612051c71ab14d64ef444bca9c7e
    '~/assets/css/app.css',
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
},
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    'nuxt-material-design-icons-iconfont',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
