# Fee router

Corium's share of every coin's fees never passes through a wallet that anyone controls. It can only leave through the Corium program (`corium_launch`), and only split the way the program says.

## How it works

On Meteora's bonding-curve program, every Corium coin shares one **config**. That config names who may claim the partner (Corium) share of trading fees: the **fee claimer**. For Corium, the fee claimer is not a wallet but the program's **vault**, an address only the Corium program can sign for.

So the only way to get Corium's fees out of a pool is to ask the Corium program, and the program always does the same thing:

1. It claims the pool's partner fees into a temporary account it owns.
2. It unwraps them to SOL.
3. It puts **50% into that coin's escrow**, held in the vault and recorded per coin.
4. It sends **50% to the treasury**.

All in one transaction. The 50% is set once per config when the config is registered (its **route**), and there is no instruction that changes it.

## Who can do what

| Action | Who | What the program checks |
|---|---|---|
| `claim_fees` | **Anyone** | The pool is on a registered config. The split always follows its route. The caller's temporary-account rent is refunded. |
| `create_distribution` (post a bounty payout) | The crank | The coin's curve has **finished**, **every fee is swept** into its escrow, and the payout total **equals the escrow exactly**. One payout per coin, ever. No crank money moves. |
| `claim` (a bounty) | The winning wallet | The wallet and amount prove against the posted merkle root. Each wallet claims once. Claims never exceed the payout. |
| `sweep_expired` | **Anyone** | The claim window (30 days) has passed. The unclaimed rest goes to the treasury only. |
| `release_bounty` | **Anyone** | The coin graduated, no payout was posted, and the claim window has passed since graduation. The escrow goes to the treasury only. |
| `claim_lp_fees` | **Anyone** | Fees on Corium's locked half of a graduated coin's DAMM v2 pool go only to **the treasury's own token accounts**. |
| `claim_surplus` | **Anyone** | Any curve surplus Meteora releases to the partner goes only to the treasury's own token account. |

"Anyone" means any wallet can send the transaction. The money still goes only where the program says: into escrow, to winners, or to the treasury.

## The trust surface

What the program guarantees, whoever runs the crank:

- Corium's fee share is always split 50/50, and the bounty half is escrowed per coin.
- A bounty can only be paid after the coin has actually graduated, only once, and only for exactly what its escrow holds.
- Unclaimed bounty and unpaid escrow can only go to the treasury, and only after 30 days.
- LP fees and surplus can only go to the treasury.

What you do trust: **the crank's scoring**. The crank decides who wins how much of a coin's escrow, by the public [scoring rules](/rules/bounty#scoring). Every payout publishes its scores and proofs to IPFS, so anyone can recompute it from chain data. The crank cannot take bounty money for itself, redirect fees, or pay out a different amount.

The program's **admin** (its upgrade authority) can rotate the crank and the treasury addresses and register routes for new configs. It cannot change an existing route's split, a posted payout, or an escrow.

## Verify it yourself

- Look up the Corium config on Meteora's DBC program and check its fee claimer is the Corium vault.
- Read a coin's escrow account (`["bounty", pool]` under the Corium program) and compare it to the bounty shown on its page.
- Every `claim_fees` emits a `FeesClaimed` event with the amount, the escrow share and the treasury share.

Addresses are on the [program reference](/rules/program).
