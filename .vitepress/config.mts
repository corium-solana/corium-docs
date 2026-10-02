import { defineConfig } from 'vitepress';


export default defineConfig({
  lang: 'en-US',
  title: 'Corium Docs',
  description:
    'Corium is the Solana launchpad that pays its users: supernova bounties for the wallets that carry a coin over the line, bounties on any coin, requests for coins that don’t exist yet, and a weekly SOL leaderboard.',
  cleanUrls: true,
  // Corium Game's pages stay in game/ but are not published for now.
  srcExclude: ['game/**'],
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
    ['meta', { property: 'og:image', content: 'https://docs.corium.so/og-v2.jpg' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:image', content: 'https://docs.corium.so/og-v2.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@corium_so' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'CORIUM',

    nav: [
      { text: 'Guide', link: '/guide/what-is-corium', activeMatch: '/guide/' },
      { text: 'Earn', link: '/earn/', activeMatch: '/earn/' },
      { text: 'Rules', link: '/rules/', activeMatch: '/rules/' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Open app', link: 'https://corium.so' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Start here',
          items: [
            { text: 'What is Corium?', link: '/guide/what-is-corium' },
            { text: 'Getting started', link: '/guide/getting-started' },
          ],
        },
        {
          text: 'Launch & trade',
          items: [
            { text: 'Launching a coin', link: '/guide/launching' },
            { text: 'Trading', link: '/guide/trading' },
            { text: 'Stars', link: '/guide/stars' },
          ],
        },
        {
          text: 'Earn',
          items: [
            { text: 'Ways to earn', link: '/earn/' },
            { text: 'Supernova bounty', link: '/rules/bounty' },
            { text: 'Bounties on any coin', link: '/earn/bounties' },
            { text: 'Requests', link: '/earn/requests' },
            { text: 'DUST & weekly payouts', link: '/earn/dust' },
            { text: 'Referrals', link: '/earn/referrals' },
          ],
        },
        {
          text: 'Your account',
          items: [
            { text: 'Profile, wallets & track record', link: '/guide/account' },
            { text: 'Social: follow, callouts & more', link: '/guide/social' },
            { text: 'Finish links & Blinks', link: '/guide/finish-links' },
            { text: 'Telegram', link: '/guide/telegram' },
          ],
        },
        {
          text: 'Rules',
          items: [
            { text: 'Overview', link: '/rules/' },
            { text: 'Supernova bounty', link: '/rules/bounty' },
            { text: 'Bounties & requests', link: '/rules/pots' },
            { text: 'DUST', link: '/rules/dust' },
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
            { text: 'Privacy policy', link: '/legal/privacy' },
            { text: 'Official links & security', link: '/legal/official-links' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'x', link: 'https://x.com/corium_so' },
      { icon: 'telegram', link: 'https://t.me/corium_alerts' },
    ],

    search: { provider: 'local' },

    outline: { level: [2, 3], label: 'On this page' },

    footer: {
      message: 'If these docs and the chain disagree, the chain wins.',
      copyright: 'Memecoins are risky and most go to zero. Nothing here is financial advice. 18+ only.',
    },
  },
});
