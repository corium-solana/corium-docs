import { defineConfig } from 'vitepress';

const PROGRAM_ID = 'CoriumcqGZW3cdnAiyWz6jHHveMUmdrw9RC1KXfMsF8S';

export default defineConfig({
  lang: 'en-US',
  title: 'Corium Docs',
  description:
    'Corium is a game of chance on Solana, set in a universe its players build. Feed stars, seed planets, land the killing push, take the pot.',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',
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
      { text: 'Litepaper', link: '/litepaper' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Play ↗', link: 'https://www.corium.so' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'What is Corium?', link: '/guide/what-is-corium' },
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'How to play', link: '/guide/how-to-play' },
          { text: 'The universe', link: '/guide/universe' },
          { text: 'Ranks & perks', link: '/guide/progression' },
          { text: 'Around the app', link: '/guide/the-app' },
          { text: 'Cinema mode', link: '/guide/cinema' },
        ],
      },
      {
        text: 'Rules',
        items: [
          { text: 'Overview', link: '/rules/' },
          { text: 'Odds & payouts', link: '/rules/odds' },
          { text: 'Sending & fees', link: '/rules/fees' },
          { text: 'Randomness', link: '/rules/randomness' },
          { text: 'Black hole & next star', link: '/rules/black-hole' },
          { text: 'Refunds & safety', link: '/rules/safety' },
          { text: 'STARDUST', link: '/rules/stardust' },
          { text: 'Program reference', link: '/rules/program' },
        ],
      },
      {
        text: 'Learn more',
        items: [
          { text: 'Litepaper', link: '/litepaper' },
          { text: 'FAQ', link: '/faq' },
        ],
      },
      {
        text: 'Legal & safety',
        items: [
          { text: 'Terms of use', link: '/legal/terms' },
          { text: 'Official links & security', link: '/legal/official-links' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/corium_so' },
      { icon: 'github', link: 'https://github.com/corium-solana/corium-core' },
    ],

    search: { provider: 'local' },

    outline: { level: [2, 3] },

    footer: {
      message: `Program <code>${PROGRAM_ID}</code>. If these docs and the chain disagree, the chain wins.`,
      copyright: 'CORIUM is a game of chance. 21+ only. You can lose what you send.',
    },
  },
});
