# Rules overview

<p class="lede">The exact rules behind Corium: what every coin launches with, where every fee goes, how bounties and prizes are held and paid, how DUST is counted, and what the Corium program enforces on chain. The Guide and Earn pages are the short version; this is the long one.</p>

## What decides what

| Part | Decided by |
|---|---|
| Prices, the curve, graduation at 85 SOL | Meteora’s Dynamic Bonding Curve program, with one Corium config shared by every coin |
| Trading after graduation | Meteora’s DAMM v2 program; the pool’s liquidity is locked forever |
| Where Corium’s fee share goes | The Corium program: 50% to each coin’s supernova bounty escrow, 50% to the treasury |
| Who wins a supernova bounty | Scored off chain by public code, posted as a merkle root the program pays against |
| Sponsored bounties and requests | The Corium program, end to end: escrow, graduation, the stretch ledger, payouts and refunds |
| DUST and weekly payouts | Corium’s server, from on-chain activity; paid from the treasury |

## How much is on chain

<div class="cards">
  <a href="/rules/pots"><b>Fully on chain</b><span>Sponsored bounties and requests. The program decides the winner from the launchpad’s own accounts, records finishers as they buy, and pays or refunds. Nobody is trusted.</span></a>
  <a href="/rules/bounty"><b>On chain, scored off chain</b><span>The supernova bounty. Its money can only sit in its escrow or go to winners; who wins is computed by public code and can be checked by anyone.</span></a>
  <a href="/rules/dust"><b>Off chain</b><span>DUST and the weekly pool, and a request sponsor’s fee share. Promises from Corium, paid from the treasury.</span></a>
</div>

## Pages

- [**Supernova bounty**](/rules/bounty): the final stretch, scoring, the hold check, payouts and claims
- [**Bounties & requests**](/rules/pots): pots, the stretch ledger, settling, stakes and refunds
- [**DUST**](/rules/dust): earning, the pool, the split, and why farming doesn’t pay
- [**Fees**](/rules/fees): every fee, who gets it, and what launching costs
- [**Fee router**](/rules/fee-router): how the program splits and protects fees, and what anyone can trigger
- [**Program reference**](/rules/program): addresses, accounts, instructions and how to verify a payout
- [**Safety**](/rules/safety): self-custody, the risks of memecoins, and scams to watch for

::: tip If the docs and the chain disagree
The chain wins. Every number here comes from the Corium config and program, and both are public.
:::
