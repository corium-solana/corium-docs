# What is Corium?

Corium is a game of chance that runs on Solana. The whole game is one star.

Players push SOL into the star. Each push adds mass, and the star grows and changes as it moves through its life, from protostar to supergiant to the edge of collapse. Every push above the nursery can make it go **nova**. Whoever lands the push that kills the star takes the pot. A new star is then born, and it starts again.

<div class="stat-row">
  <div class="stat"><b>96.86%</b><span>of every push goes to the prize</span></div>
  <div class="stat"><b>3.14%</b><span>protocol fee (π%)</span></div>
  <div class="stat"><b>0.01 SOL</b><span>minimum push</span></div>
  <div class="stat"><b>21 SOL</b><span>black hole threshold</span></div>
</div>

## The idea in 30 seconds

- **You push SOL. It grows. It dies. We make another.**
- **Under 1 SOL of star mass, you are feeding.** Nothing can explode yet. Each feed buys you a *hole ticket*.
- **From 1 SOL on, every push can trigger a nova.** Your chance is your own share of the mass your push creates. The last hit takes the whole prize.
- **If the star reaches 21 SOL without a nova, it collapses into a black hole.** The feeders who bought hole tickets split the pot.

## What makes it different

**The odds are simple and public.** There is no stage table, no base rate, and no hidden multiplier. A push of `a` SOL into a star of `M` SOL has a chance of `a ÷ (M + a)`. You can work it out yourself before you send.

**Every push is worth the same.** Because a kill pays the entire prize, and the prize is always 96.86% of the star's mass, the expected return of any push is exactly 96.86% of what you sent. Small pushes aren't a worse deal than big ones, or the other way around. The 3.14% fee is the only edge in the game.

**The house can't touch the rules.** The odds, the fee, and the thresholds are compiled into the on-chain program. There is no admin instruction, no pause button, and no setting anyone can change. See [the trust model](/litepaper#trust-model) for the one thing you do have to trust.

**Randomness is verifiable and free to you.** Rolls come from MagicBlock's on-chain VRF oracle. The house pays for every draw out of its own fee.

## Where to play

| | |
|---|---|
| Web app | [www.corium.so](https://www.corium.so) |
| Network | Solana mainnet |
| Program | `CoriumcqGZW3cdnAiyWz6jHHveMUmdrw9RC1KXfMsF8S` |
| X | [@corium_so](https://x.com/corium_so) |

::: warning Play responsibly
Corium is a game of chance that uses real SOL, and it is for players 21 or older. You can lose what you send. Only play with money you can afford to lose.
:::

**Next:** [Getting started →](/guide/getting-started)
