const siteConfig = {
  name: 'Como meu deputado foi eleito?',
  description: 'Conheça quem foram os Deputados Federais eleitos com votação acima do coeficiente eleitoral de seu Estado. E entenda, também, como funcionam as eleições para Deputado Federal no Brasil',
  url: 'https://legislativo-br.github.io',
  banner: 'https://legislativo-br.github.io/banner.jpg'
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: siteConfig.name,
    titleTemplate: `%s - ${siteConfig.name}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteConfig.description
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: siteConfig.url
      },
      {
        property: 'og:title',
        content: siteConfig.name
      },
      {
        property: 'og:image',
        content: siteConfig.banner
      },
      {
        property: 'og:description',
        content: siteConfig.description
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:description',
        content: siteConfig.description
      },
      {
        property: 'twitter:url',
        content: siteConfig.url
      },
      {
        property: 'twitter:title',
        content: siteConfig.name
      },
      {
        property: 'twitter:image',
        content: siteConfig.banner
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/style-resources'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  // load global styles and variables
  styleResources: {
    scss: ['./assets/variables.scss']
  }
}
