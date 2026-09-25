# Launching a coin

Press **Create**, fill in the coin, and sign one transaction. The coin, its bonding curve and your optional first buy are created together.

## What you fill in

| Field | Limit |
|---|---|
| Name | Up to 32 characters |
| Ticker | Up to 10 characters |
| Description | Up to 280 characters, optional |
| Image | PNG, JPG, GIF or WebP, up to 4 MB. Square works best. Without one, the coin gets generated art. |
| X, Telegram, Website | Optional links, shown on the coin page |
| Buy at launch | Optional SOL for your own first buy, in the same transaction |

The name, ticker and image go into standard Solana token metadata, with the image and description pinned to IPFS, so every wallet and explorer shows them.

## Your coin's star

The preview on the Create page is your coin's actual star. Every star is drawn from the coin's **mint address**, so no two look alike. **Re-roll mint** picks a new address, and with it a new star; the one you launch with is yours for good. The slider under the preview plays its whole life, from protostar to supernova.

## What every coin gets

Every Corium coin launches on the same terms. You don't choose them and nobody can change them for one coin:

| | |
|---|---|
| Supply | 1,000,000,000 tokens, 6 decimals, fixed. Mint and metadata are immutable. |
| Quote | SOL |
| Graduates at | 85 SOL in the curve |
| Trading fee | 1%, of which the creator earns 37% of what Meteora leaves (about 0.3% of volume). [Fees →](/rules/fees) |
| Anti-sniper | The fee starts at 50% and decays to 1% over the first 60 seconds |
| After graduation | Meteora DAMM v2 pool, liquidity permanently locked, fees shared 50/50 between the creator and Corium |
| Supernova bounty | On for every coin. [The bounty →](/rules/bounty) |

## What it costs

- **No creation fee.** Corium charges nothing to launch.
- **Network cost**, about **0.03 SOL**: Solana rent for the new accounts (the pool, the mint, the metadata).
- **Your buy at launch**, if any. It pays the normal 1% fee, not the 50% launch-window fee, and it's labelled *dev-linked* on the coin page so buyers can see it.

You need to be signed in to launch. Launching is limited to signed-in wallets because every launch pins its image and metadata to IPFS.

## As the creator

- You earn **37% of the curve's trading fees after Meteora's cut** (about 0.3% of volume), in SOL. Claim them through Meteora's creator tools.
- After graduation you own half of the locked pool liquidity, and earn half of its LP fees.
- Your trades are marked **Dev** on the coin page and in chat, so everyone can see what the creator does.

::: tip A good launch
A clear image, a real description and working links make a coin easy to trust. Buying a small first bag at launch is normal; buying a large one is visible to everyone, and many traders read it as a warning.
:::

**Next:** [Trading →](/guide/trading)
