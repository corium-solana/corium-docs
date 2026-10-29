# Fees

## On the bonding curve

Every trade on the curve, buy or sell, pays a **1% trading fee**, taken in SOL.

| Share of each trade | Goes to |
|---|---|
| **0.20%** | Meteora (its protocol fee: 20% of the fee) |
| **0.296%** | The coin's **creator** (37% of what Meteora leaves) |
| **0.252%** | The coin's **supernova bounty** escrow |
| **0.252%** | The Corium **treasury** |

Corium's share (63% of what Meteora leaves, about 0.5% of volume) is split 50/50 between the coin's bounty and the treasury **by the Corium program**, every time it's claimed. [The fee router →](/rules/fee-router)

### The launch window

To take the edge off sniper bots, the fee starts at **50%** when a coin launches and decays exponentially to **1%** over the first **60 seconds**. The split above applies to whatever the fee is at that moment.

The creator's own buy in the launch transaction always pays the normal 1%.

### Worked example

A 1 SOL buy after the launch window pays 0.01 SOL in fees: 0.002 SOL to Meteora, 0.00296 SOL to the creator, 0.00252 SOL into the coin's bounty and 0.00252 SOL to the treasury.

## After graduation

A graduated coin trades on its **Meteora DAMM v2** pool. Its liquidity is **permanently locked**, and it belongs **75% to the creator and 25% to Corium**: both earn its fees by those shares, and neither can ever withdraw it.

The pool's fee **steps down as the coin grows**, so a coin that runs is never more expensive to trade on Corium than on pump.fun, at any market cap:

| Market cap | Corium pool fee | pump.fun (PumpSwap) |
|---|---|---|
| At graduation (about 425 SOL) | **1%** | 1.20% to 1.25% |
| 4,420 SOL | 0.89% | 1.00% |
| 10,000 SOL | 0.80% | 0.95% |
| 25,000 SOL | 0.66% | 0.80% |
| 50,000 SOL | 0.49% | 0.55% |
| 100,000 SOL and up | **0.25%** | 0.30% |

Market caps are in SOL, as pump.fun's tiers are. The fee moves in 75 small steps between graduation and 100,000 SOL (by how far the square root of the price has risen), and back up if the price falls.

Every pool fee is taken in SOL and split the same way, whatever its size:

| Share of the fee | At 1% | At 0.25% | Goes to |
|---|---|---|---|
| **20%** | 0.20% | 0.05% | Meteora (its protocol fee) |
| **16%** | 0.16% | 0.04% | **Stays in the pool** (20% of what Meteora leaves): deeper liquidity with every trade, so bigger trades move the price less |
| **48%** | 0.48% | 0.12% | The coin's **creator** (their locked 75%) |
| **16%** | 0.16% | 0.04% | The Corium **treasury** (its locked 25%) |

When a trade comes through a referrer, such as an aggregator, the referrer gets a fifth of Meteora's part (4% of the fee) out of Meteora's share; nobody else's changes.

Coins launched before the stepped fee came in keep a flat **1%** pool fee with no compounding and a 50/50 pool (0.20% Meteora, 0.40% creator, 0.40% treasury): a coin's pool terms are set when it launches.

Graduation itself costs nothing: there is no migration fee.

## Launching

| | |
|---|---|
| Creation fee | **None** |
| Network cost | About **0.03 SOL** of Solana rent for the new accounts |
| Your buy at launch | Optional, pays the normal 1% |

## Bounties and requests

| | Corium fee |
|---|---|
| Bounty on a Corium coin | **None** (the coin’s trading already pays Corium’s curve fee) |
| Bounty on a pump.fun coin | **5%** of the bounty, **only if it pays out** |
| Request | **None** |
| Any refund | **None** |
| Opening a pot | No fee; about 0.007 SOL of Solana rent |

A pump.fun finishing buy goes through pump.fun’s own program at pump.fun’s price and fees; Corium adds nothing to it. [The rules →](/rules/pots)

## Paid back to users

| | |
|---|---|
| Weekly DUST pools | The hunters’ pool, 25% of Corium’s fees each week (curve plus locked-pool fees), never under 3 SOL, and the community pool, 10%, never under 1.5 SOL. [DUST →](/rules/dust) |
| Request sponsors | 50% of Corium’s fees on a request’s winning coin: curve fees from when the request opened until graduation, and locked-pool fees for 30 days after. [Requests →](/earn/requests) |

Both are paid in SOL from the treasury.

## Other costs

| | |
|---|---|
| Signing in, chat, profiles | Free. Signing in is a message, not a transaction. |
| Claiming a bounty | The Solana transaction fee, plus about 0.001 SOL of rent for your claim record |
| Solana network fees | Every transaction pays Solana's own small fee, which goes to validators |

Corium never adds a fee on top of what's shown in the trade panel.

## Checking the numbers

Every fee above is set in the Corium config on Meteora's bonding-curve program, one config for every coin, and in the Corium program's route for that config. Both are public accounts. [Program reference →](/rules/program)
