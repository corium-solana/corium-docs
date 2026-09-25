# Rules overview

These pages are the exact rules behind the Corium launchpad: what every coin launches with, where every fee goes, how the supernova bounty is scored and paid, and what the Corium program enforces on chain. The Guide is the short version; this is the long one.

## What decides what

| Part | Decided by |
|---|---|
| Prices, the curve, graduation at 85 SOL | Meteora's Dynamic Bonding Curve program, with one Corium config shared by every coin |
| Trading after graduation | Meteora's DAMM v2 program; the pool's liquidity is locked forever |
| Where Corium's fee share goes | The Corium program: 50% to each coin's bounty escrow, 50% to the treasury, on chain |
| Who wins a bounty | Scored off chain by public code, posted as a merkle root that the program pays against |

## Pages

- [**Supernova bounty**](/rules/bounty): the final stretch, scoring, the hold check, payouts and claims
- [**Fees**](/rules/fees): every fee, who gets it, and what launching costs
- [**Fee router**](/rules/fee-router): how the program splits and protects fees, and what anyone can trigger
- [**Program reference**](/rules/program): addresses, instructions and how to verify a payout
- [**Safety**](/rules/safety): self-custody, the risks of memecoins, and scams to watch for

::: tip If the docs and the chain disagree
The chain wins. Every number here comes from the Corium config and program, and both are public.
:::
