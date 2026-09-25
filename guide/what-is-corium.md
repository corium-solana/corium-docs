# What is Corium?

Corium is a memecoin launchpad on Solana where every coin is drawn as a living star.

Anyone can launch a coin in seconds. It starts on a bonding curve: the more people buy, the more SOL sits in the curve, and the bigger its star grows. When the curve fills, at **85 SOL**, the coin **graduates**: its star goes **supernova**, its liquidity moves into a Meteora pool that is locked forever, and trading carries on.

What makes Corium different is the **supernova bounty**. Half of Corium's fees on every coin are set aside for that coin. When it graduates, the bounty goes to the wallets that bought its **final stretch** (the last 10% of the curve) and were still holding after graduation. The people who carry a coin over the line get paid for it.

<div class="stat-row">
  <div class="stat"><b>85 SOL</b><span>to graduate</span></div>
  <div class="stat"><b>1%</b><span>trading fee on the curve</span></div>
  <div class="stat"><b>0 SOL</b><span>to create a coin</span></div>
  <div class="stat"><b>50%</b><span>of Corium's fee share builds the bounty</span></div>
</div>

## The idea in 30 seconds

- **Launch.** Name, ticker, image, optional socials, optional first buy. There is no creation fee; you only pay Solana's account rent (about 0.03 SOL). [Launching a coin →](/guide/launching)
- **Trade on the curve.** Price rises as SOL comes in and falls as it goes out. Every trade pays 1%, split between Meteora, the creator and Corium. [Trading →](/guide/trading)
- **Watch the star.** Each coin's star follows its curve: protostar, main sequence, blue giant, red giant, supergiant, then **critical** in the final stretch. [Stars →](/guide/stars)
- **Buy the final stretch.** The last 10% of the curve is where bounty credit is earned. Hold through graduation and you split the bounty. [The bounty →](/rules/bounty)
- **Graduation.** At 85 SOL the star goes supernova, the coin moves to a Meteora DAMM v2 pool with locked liquidity, and you keep trading it on Corium.

## Built on

| | |
|---|---|
| Bonding curve | [Meteora Dynamic Bonding Curve](https://docs.meteora.ag) (DBC) |
| After graduation | Meteora DAMM v2, liquidity permanently locked |
| Bounty and fee split | The Corium program (`corium_launch`), see [the fee router](/rules/fee-router) |
| Network | Solana (devnet now, mainnet at launch) |

Corium never holds your funds. Every trade, launch and claim is a transaction you sign in your own wallet.

::: warning Memecoins are risky
Most memecoins go to zero. Nothing on Corium is financial advice, and a coin appearing on Corium is not an endorsement. Only trade what you can afford to lose. You must be 18 or older.
:::

**Next:** [Getting started →](/guide/getting-started)
