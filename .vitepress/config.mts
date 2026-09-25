import { defineConfig } from 'vitepress';


export default defineConfig({
  lang: 'en-US',
  title: 'Corium Docs',
  description:
    'Corium is a memecoin launchpad on Solana where every coin is a star, and the wallets that carry a coin over its graduation line split its supernova bounty.',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'force-dark',
  sitemap: { hostname: 'https://docs.corium.so' },

  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Corium Docs' }],
    ['meta', { property: 'og:image', content: 'https://docs.corium.so/og.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@corium_so' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'CORIUM',

    nav: [
      { text: 'Guide', link: '/guide/what-is-corium', activeMatch: '/guide/' },
      { text: 'Rules', link: '/rules/', activeMatch: '/rules/' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Corium Game', link: '/game/', activeMatch: '/game/' },
    ],

    sidebar: {
      '/game/': [
        {
          text: 'Corium Game',
          items: [
            { text: 'What is Corium Game?', link: '/game/' },
            { text: 'Getting started', link: '/game/getting-started' },
            { text: 'How to play', link: '/game/how-to-play' },
            { text: 'The universe', link: '/game/universe' },
            { text: 'Ranks & perks', link: '/game/progression' },
            { text: 'Around the app', link: '/game/the-app' },
            { text: 'Cinema mode', link: '/game/cinema' },
          ],
        },
        {
          text: 'Game rules',
          items: [
            { text: 'Overview', link: '/game/rules/' },
            { text: 'Odds & payouts', link: '/game/rules/odds' },
            { text: 'Sending & fees', link: '/game/rules/fees' },
            { text: 'Randomness', link: '/game/rules/randomness' },
            { text: 'Black hole & next star', link: '/game/rules/black-hole' },
            { text: 'Refunds & safety', link: '/game/rules/safety' },
            { text: 'STARDUST', link: '/game/rules/stardust' },
            { text: 'Program reference', link: '/game/rules/program' },
          ],
        },
        {
          text: 'More',
          items: [
            { text: 'Litepaper', link: '/game/litepaper' },
            { text: 'Game FAQ', link: '/game/faq' },
            { text: 'Game terms of use', link: '/game/terms' },
            { text: 'Official links & security', link: '/legal/official-links' },
            { text: '← Corium launchpad docs', link: '/guide/what-is-corium' },
          ],
        },
      ],
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'What is Corium?', link: '/guide/what-is-corium' },
            { text: 'Getting started', link: '/guide/getting-started' },
            { text: 'Launching a coin', link: '/guide/launching' },
            { text: 'Trading', link: '/guide/trading' },
            { text: 'Stars', link: '/guide/stars' },
            { text: 'Chat, profiles & leaderboards', link: '/guide/social' },
          ],
        },
        {
          text: 'Rules',
          items: [
            { text: 'Overview', link: '/rules/' },
            { text: 'Supernova bounty', link: '/rules/bounty' },
            { text: 'Fees', link: '/rules/fees' },
            { text: 'Fee router', link: '/rules/fee-router' },
            { text: 'Program reference', link: '/rules/program' },
            { text: 'Safety', link: '/rules/safety' },
          ],
        },
        {
          text: 'More',
          items: [
            { text: 'FAQ', link: '/faq' },
            { text: 'Terms of use', link: '/legal/terms' },
            { text: 'Official links & security', link: '/legal/official-links' },
            { text: 'Corium Game →', link: '/game/' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'x', link: 'https://x.com/corium_so' },
      { icon: 'github', link: 'https://github.com/corium-solana/corium-core' },
    ],

    search: { provider: 'local' },

    outline: { level: [2, 3] },

    footer: {
      message: 'If these docs and the chain disagree, the chain wins.',
      copyright: 'Memecoins are risky and most go to zero. Corium is 18+; Corium Game is 21+.',
    },
  },
});
