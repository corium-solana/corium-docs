# Black hole & next star

## The black hole

Feeds made while mass is under 1 SOL count toward the star's **early volume** and toward that wallet's **feed share**. Last-hit pushes don't count.

If the star reaches **21 SOL** without a nova, it collapses:

- The feeder pot is the whole prize (`final_prize = prize_pool`).
- Each feeder's payout = `their feed share × final_prize ÷ early_volume`.
- Each feeder claims their share once, with `claim_hole_share`.

If nobody fed the star (`early_volume == 0`), nobody can claim, and the prize is recycled into the next star.

Over many stars, this happens exactly **1 time in 21**. [Why →](/game/rules/odds#why-the-hole-is-1-in-21)

## The next star

Anyone can create the next star once the previous one is finished, **or** as soon as it has 21 SOL committed. The old star's queue doesn't have to be empty first.

Each new star's seed is derived from the last one:

```
sha256("soldust:star-seed" ‖ prev.seed ‖ prev.star_id ‖ new_star_id)
```

## Endowment

Prize money that has no claimant goes into the **next-star reserve**. That covers a black hole nobody fed, and the leftover after a [stalled-star collapse](/game/rules/safety#if-the-game-dies) has refunded the feeders. The reserve seeds the next star's mass and prize, so it doesn't sit in the vault forever. **It can never be withdrawn.**

The endowment is rounded down to the 0.01 step and capped at **0.99 SOL**, so a recycled prize can never open a star at or above the nursery cap.

That cap is structural, not cosmetic. A star born past 1 SOL would have no nursery, so no feeder could buy a hole ticket. If that star then collapsed, its pot would have nobody to pay and would recycle again, carrying an ever-larger, unwinnable pot forward. The cap makes that impossible, not just unlikely.
