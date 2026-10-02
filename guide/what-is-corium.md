# What is Corium?

<p class="lede">Corium is a memecoin launchpad on Solana that pays its users. Every coin is drawn as a living star, and the people who make coins succeed (the traders who finish them, the creators who launch them, the sponsors who fund them) get paid for it, on chain.</p>

Anyone can launch a coin in seconds. It starts on a bonding curve: the more people buy, the more SOL sits in the curve, and the bigger its star grows. When the curve fills, at **85 SOL**, the coin **graduates**: its star goes **supernova**, its liquidity moves into a Meteora pool that is locked forever, and trading carries on.

<div class="stat-row">
  <div class="stat"><b>0 SOL</b><span>to create a coin</span></div>
  <div class="stat"><b>85 SOL</b><span>to graduate</span></div>
  <div class="stat"><b>1%</b><span>trading fee on the curve</span></div>
  <div class="stat"><b>25%</b><span>of Corium’s fees paid back weekly</span></div>
</div>

## What makes it different

Most launchpads keep every fee and leave the hard part, getting a coin over the line, to luck. Corium pays for it:

| | What it is | Who earns |
|---|---|---|
| [**Supernova bounty**](/rules/bounty) | Half of Corium’s fees on every coin, held for that coin | The wallets that buy its final 10% and hold through graduation |
| [**Bounties**](/earn/bounties) | SOL anyone puts on a coin graduating, on Corium or pump.fun | The same finishers. If it doesn’t graduate in time, sponsors are refunded in full |
| [**Requests**](/earn/requests) | A prize for a coin that doesn’t exist yet | The creator of the first entry to graduate, and its finishers. The sponsor gets a bag of the winner and half of Corium’s fees on it |
| [**DUST**](/earn/dust) | Points for everything above, plus trading | The top 20 each week split a SOL pool: 25% of Corium’s fees, never under 1.5 SOL |
| [**Referrals**](/earn/referrals) | Your own link | 10% of the DUST of everyone you bring, on top of theirs |

## The idea in 30 seconds

<ol class="steps">
  <li><b>Launch.</b> Name, ticker, image, optional socials, optional first buy. No creation fee; you pay only Solana’s account rent (about 0.03 SOL). <a href="/guide/launching">Launching a coin →</a></li>
  <li><b>Trade on the curve.</b> Price rises as SOL comes in and falls as it goes out. Every trade pays 1%, split between Meteora, the creator and Corium. <a href="/guide/trading">Trading →</a></li>
  <li><b>Watch the star.</b> Each coin’s star follows its curve: protostar, main sequence, giants, then <b>critical</b> in the final stretch. <a href="/guide/stars">Stars →</a></li>
  <li><b>Finish it.</b> The last 10% of the curve is the final stretch. Buy it, hold through graduation, and split the coin’s supernova bounty plus any bounties on it. <a href="/rules/bounty">The bounty →</a></li>
  <li><b>Get paid weekly.</b> All of it earns DUST. Every Monday the top 20 split a SOL pool, and your rank climbs for good. <a href="/earn/dust">DUST →</a></li>
</ol>

## Built on

| | |
|---|---|
| Bonding curve | [Meteora Dynamic Bonding Curve](https://docs.meteora.ag) (DBC) |
| After graduation | Meteora DAMM v2, liquidity permanently locked |
| Bounties, prizes, fee split | The Corium program (`corium_launch`), [verified by OtterSec](https://verify.osec.io/status/NovanpiewpH4zvYgtzAQN2zWQ94KcKWrHCTswWdZ1Y1), upgradeable only by a Squads multisig |
| pump.fun bounties | Read pump.fun’s own curve on chain; finishing buys are pump.fun’s own buy, bracketed by Corium |
| Network | Solana mainnet, at [corium.so](https://corium.so) |

Corium never holds your funds in a wallet. Bounties and prizes sit in program accounts whose rules are public, and every trade, launch and claim is a transaction you sign yourself.

::: warning Memecoins are risky
Most memecoins go to zero. Nothing on Corium is financial advice, and a coin appearing on Corium is not an endorsement. Only trade what you can afford to lose. You must be 18 or older.
:::

**Next:** [Getting started →](/guide/getting-started)
