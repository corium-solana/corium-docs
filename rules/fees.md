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

A graduated coin trades on its **Meteora DAMM v2** pool, which charges a **1%** fee to traders. After Meteora's protocol share, the fee goes to the pool's liquidity. That liquidity is **permanently locked**, and it belongs **50/50 to the creator and Corium**: both earn its fees, and neither can ever withdraw it.

Graduation itself costs nothing: there is no migration fee.

## Launching

| | |
|---|---|
| Creation fee | **None** |
| Network cost | About **0.03 SOL** of Solana rent for the new accounts |
| Your buy at launch | Optional, pays the normal 1% |

## Other costs

| | |
|---|---|
| Signing in, chat, profiles | Free. Signing in is a message, not a transaction. |
| Claiming a bounty | The Solana transaction fee, plus about 0.001 SOL of rent for your claim record |
| Solana network fees | Every transaction pays Solana's own small fee, which goes to validators |

Corium never adds a fee on top of what's shown in the trade panel.

## Checking the numbers

Every fee above is set in the Corium config on Meteora's bonding-curve program, one config for every coin, and in the Corium program's route for that config. Both are public accounts. [Program reference →](/rules/program)
