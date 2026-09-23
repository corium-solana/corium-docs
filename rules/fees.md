# Sending & fees

## How much you can send

There is one rule for shape, everywhere: **a push is a whole multiple of 0.01 SOL.** That step is both the granularity and the minimum. It's compiled in, and it never moves.

- **Min:** `0.01 SOL`. Legal on every star, at every pot size, forever.
- **Max:** the room left before the next boundary: 1 SOL in the nursery, 21 SOL after it. There is no absolute ceiling and no stage gate.

A send of zero, or one that isn't a whole step, **fails** (`PushNotOnStep`). A send above the room left is **clipped**, never rejected. That's all the validation there is.

Because 1 SOL and 21 SOL are both whole numbers of steps, mass always stays on the 0.01 grid, and the room left before a boundary is always itself a legal push. So the star can never get stuck just short of the hole.

Past the nursery, room is measured against **committed** mass (settled plus queued), so the queue can't promise the same lamports twice. If the queue ahead of you shrinks by the time your push lands, the excess is refunded when it resolves.

Nothing about a signed amount can go stale. There's no minimum to fall below, and oversized sends clip instead of failing.

## The split

| Share | Value |
|---|---|
| Prize pool | **96.86%** |
| Protocol | **3.14%** |

Example: 1 SOL settled means 0.9686 SOL to the prize and 0.0314 SOL to the protocol.

The house edge is π%, and it's a round number of lamports too: 314 bps of the 0.01 SOL step is exactly 314,000 lamports. The split never rounds, so the prize pool is always *exactly* 96.86% of mass. That exactness is what makes the [return identity](/rules/odds#why-the-ratio-is-the-only-fair-curve) hold to the lamport.

The vault keeps four separate buckets: pending escrow, unpaid prizes, next-star reserve, and protocol accrued. Withdrawing protocol fees always pays the treasury address that was fixed at launch, and can only ever touch **protocol accrued**. It can never take more than what's left after the other three buckets.

## What you sign

The PUSH number is your **stake**, the SOL that goes into the star.

You don't pay for randomness. Your round buys one draw for all its members, and the house pays for it out of its 3.14%. What you do sign, besides the stake, is **rent**. Solana charges rent for the bytes an account takes up, and refunds it when the account is closed. The figures below are exact: `(128 + bytes) × 5080` lamports, which is the rate both mainnet and devnet charge.

### Rent you get back

| Account | Amount | Comes back |
|---|---|---|
| `PendingPush` | 0.0014224 SOL | when your push resolves (`close_push`) |
| `Round` | 0.0017577 SOL | when every member of the round has resolved (`close_round_account`) |

Round rent is paid by whichever member happens to open the round, and it is returned to that same wallet. You can't know in advance whether that will be you, so the app quotes it either way. If you join a round someone else opened, you simply don't pay it.

### Rent you don't get back

These accounts are reused by your later pushes:

| Account | Amount | How often |
|---|---|---|
| `Player` | 0.0011430 SOL | once per wallet, ever |
| `FeedShare` | 0.0009449 SOL | once per wallet per star |
| `StarFeed` | 0.0007772 SOL | once per star, paid by whoever touches it first |

### Worst case

A brand-new wallet, making its first push into a brand-new star, that also opens the round, signs **the stake plus 0.0060452 SOL**. Of that, 0.0031801 SOL comes back and 0.0028651 SOL is actually spent.

A second push from the same wallet into the same star signs the stake, plus push-account rent that comes straight back, plus the network fee.

A **feed** is just the stake plus a tiny network fee.

## If your push never rolls

Your stake is refunded in full, and the reclaimable rent still comes back. That happens in two cases:

- the star was destroyed while your push was still queued, or
- your round was voided, because its draw never arrived or because, on a very quiet star, it never gathered enough stake to be worth drawing.

In either case, a push that never rolls costs you only the network fee.
