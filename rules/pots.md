# Bounties & requests: the rules

<p class="lede">Sponsored bounties and requests are the same thing on chain: a <b>pot</b>. A pot escrows SOL in its own account in the Corium program, with a condition, a deadline and a split fixed when it opens. It pays out only if its condition is met on chain in time, and every other path ends in a refund.</p>

The friendly versions: [Bounties →](/earn/bounties) · [Requests →](/earn/requests)

## The two kinds

| | Bounty | Request |
|---|---|---|
| Condition | Its target coin graduates by the deadline | Some coin entered into it graduates by the deadline; the earliest wins |
| Coins | Corium coins and pump.fun coins | Corium coins only |
| Paid to | The winning coin’s finishers | The winning coin’s creator (up to 80%) and its finishers |
| Corium fee | None on Corium coins; **5% on pump.fun coins**, only if it pays out | None |
| The sponsor also gets | Nothing; it’s a pure reward | The winner’s stake, and half of Corium’s fees on the winner |

## Current parameters

Set in the program’s pot rules (`PotConfig`) and copied into each pot when it opens, so a later change never alters an open pot.

| | |
|---|---|
| Amount | 0.05 to 15 SOL per pot |
| Deadline | 1 hour to 14 days after opening (corium.so offers 1, 3, 7 and 14 days) |
| Grace | 2 minutes after a win (for an earlier graduate to replace the winner) or after the deadline |
| Finisher hold | 1 hour after graduation |
| Claim window | 30 days |
| Creator’s share (requests) | 0% to 80% |
| Entries (requests) | While the coin’s curve holds at most 10 SOL |
| pump.fun bounty fee | 5% (500 bps) |

## Lifecycle

```
open ──fund──▶ open
  │
  ├─ a qualifying coin graduates by the deadline ──▶ mark_winner
  │     └─ after the grace ──▶ settle: fee and creator share paid,
  │                                     the rest frozen for the finishers
  │           ├─ finishers claim after the hold, for 30 days ──▶ start_return (the rest)
  │           └─ no finishers ──▶ start_return
  └─ deadline + grace, no winner ──▶ start_return (everything, no fee)

returning ──refund (each funder, pro rata)──▶ empty
```

Every step except opening, funding, entering and claiming is **permissionless**: anyone can call it, and Corium’s crank does within seconds. Nobody decides who wins; graduation is read from the launchpad’s own account (a Corium coin’s `finish_curve_timestamp`, a pump.fun curve’s `complete` flag).

## Finishers: the stretch ledger

A pot’s finishers are recorded **on chain**, as they buy, by the stretch ledger:

1. A finishing buy is one transaction: `stretch_begin`, then the buy itself (a Meteora or pump.fun swap), then `stretch_end`.
2. `stretch_begin` reads the curve’s reserves and the buyer’s token balance; `stretch_end` reads them again. The program never calls the swap; it measures what it did.
3. The SOL that landed **past 90% of the curve** becomes the buyer’s **credit** on that coin, and the tokens bought there are **locked** in the coin’s stretch vault.
4. When the curve completes, its credit total is frozen (`stretch_finish`; the buy that completes the curve records the time, so graduation times are exact even on pump.fun).

**Holding** means leaving the tokens locked. `stretch_unlock` returns them at any time:

| When you unlock | Effect |
|---|---|
| Before graduation | Your credit leaves the total. No penalty. |
| During the hold (1 hour after graduation) | You forfeit your share of every pot on that coin; it goes back to the funders. |
| After the hold | Your tokens come back; your credit still claims. |

After the hold, `claim_finisher` pays each finisher **credit ÷ total credit** of each pot on the coin, one claim per wallet per pot.

Buys that skip the bracket (directly on pump.fun, or a plain swap) are not recorded and don’t count. corium.so brackets every buy on a coin that has a pot; so do finish links, Blinks and the Telegram bot.

::: info The supernova bounty is separate
A Corium coin’s own [supernova bounty](/rules/bounty) is funded by fees, counts every buy, has a 10-minute hold check and is paid against a published merkle root. Pots never touch it: each pot’s SOL sits in the pot’s own token account, never in the fee vault.
:::

## Settling

`settle`, after the winner’s graduation plus the grace:

1. **Fee:** `fee_bps` of the pot to the treasury (5% on pump.fun bounties, otherwise 0).
2. **Creator** (requests): `creator_bps` of the rest to the winning coin’s creator.
3. **Finishers:** everything left, frozen as the finisher total, claimable once the hold ends and until the claim window closes.

If the winning coin has no finishers, the finisher total goes straight back to the funders.

## Refunds

Anything that isn’t paid goes back to the **funders**, never to Corium:

- no winner by the deadline: the whole pot, with no fee;
- a winner with no finishers: the finisher share;
- finisher shares left unclaimed after the 30-day window.

Each funder reclaims with `refund`, pro rata to what they put in (their `Contribution`); the last one gets the rounding dust.

## Requests in detail

### Entering

`enter` is signed by the coin’s creator, for a Corium coin that hasn’t graduated and whose curve holds at most 10 SOL. It escrows a **stake** of the coin, at least the request’s `min_stake`, in the entry’s own token account. A coin can enter **one request, ever** (the `Entry` account is keyed by the coin’s pool).

corium.so sets `min_stake` from the opener’s choice of **Small, Fair or Large**: the launch buy whose tokens are worth ¼, ½ or ¾ of the winning creator’s prize at the graduation price. Entering from the create page stakes that part of your launch buy in a second signature.

### Rejecting

While an entry’s curve is still under the entry limit and the request is open, the **opener** can `reject_entry` it as off-topic. Its stake can be released straight back to its creator, and the coin can’t enter any request again.

### Stakes

| Entry | Its stake |
|---|---|
| The winner | `claim_stake` pays it to the funders, pro rata (with one sponsor, all of it to them) |
| Losing, rejected, or no winner | `release_stake` returns it to its creator |

### The sponsor’s fee share

When a request is won, Corium pays its sponsor **50% of Corium’s fees on the winning coin**: its curve fees from when the request opened until it graduates, and Corium’s share of its locked pool’s fees for 30 days after. This is a promise from Corium, paid in SOL from the treasury, not something the program enforces.

### One sponsor

corium.so lets only a request’s opener add to its prize, so the sponsor’s deal is never diluted. The program itself accepts `fund` from anyone; a request funded by several wallets splits the winner’s stake between them pro rata.

## Accounts and instructions

| Account | Seeds | Holds |
|---|---|---|
| `PotConfig` | `["pot-rules"]` | The current pot rules |
| `Pot` | `["pot", opener, nonce]` | Terms, money, status, winner |
| Pot vault | ATA(pot, mint) | The pot’s SOL (as wrapped SOL) |
| `Contribution` | `["contrib", pot, funder]` | What each funder put in, and whether they were refunded |
| `Entry` | `["entry", pool]` | The request a coin entered, its stake, rejected or not |
| `PotClaim` | `["pot-claim", pot, wallet]` | Exists once a finisher has claimed |
| `Stretch` | `["stretch", pool]` | A coin’s stretch ledger: total credit, finish time, the vault of locked tokens |
| `Credit` | `["credit", pool, wallet]` | One finisher’s credit and locked tokens on that coin |

| Instruction | Signer | Does |
|---|---|---|
| `open_pot` | Sponsor | Opens a bounty or request with its terms and first funds |
| `fund` | Anyone | Adds to an open pot |
| `enter` | Coin creator | Enters a coin into a request, escrowing its stake |
| `reject_entry` | Request opener | Rejects an early, off-topic entry |
| `mark_winner` | Anyone | Records a graduation by the deadline (an earlier one replaces a later one) |
| `settle` | Anyone | Pays the fee and creator share, freezes the finisher total |
| `stretch_begin`, `stretch_end` | Buyer | Bracket a buy and record its stretch credit |
| `stretch_finish` | Anyone | Freezes a coin’s ledger at completion |
| `stretch_unlock` | Finisher | Returns locked tokens (see holding) |
| `claim_finisher` | Finisher | Claims a share of a pot after the hold |
| `claim_stake`, `release_stake` | Anyone | Move a request’s stakes to the funders or back to creators |
| `start_return`, `refund` | Anyone, funder | Open refunds when due, and take yours |
| `close_credit` | Finisher | Closes an empty credit account for its rent |

All live in the same verified Corium program: [Program reference →](/rules/program)

## What a pot costs to open

About 0.007 SOL of Solana rent for its accounts, which isn’t returned. There’s no creation fee.
