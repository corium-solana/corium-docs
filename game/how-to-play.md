# How to play

A star goes through two phases: the **nursery** and the **hazard** phase. What your SOL does depends on which phase the star is in.

## The life of a star

```
0 SOL ──── nursery ──── 1 SOL ──────────── hazard ──────────── 21 SOL
   feeds only · no nova          every push can go nova          black hole
   hole tickets                  last hit takes the pot          feeders split the pot
```

| Star mass | What a send is |
|---|---|
| **under 1 SOL** | **Feed.** Settles instantly. Can't cause a nova. Puts a planet in orbit and gives you a hole ticket. |
| **1 SOL and up** | **Push.** Joins the current round and rolls for a nova. If it hits, you are the killer and take the prize. |
| **reaches 21 SOL** | **Black hole.** The star collapses, and nursery feeders split the pot. |

## Feeding: planets and hole tickets

While the star is under 1 SOL, every send is a **feed**. Feeds settle at once, don't use the oracle, and can't kill the star.

Every feed that lands pulls a **world** into the star's orbit. Its type and rarity are set by the star's seed and your place in line, and it stays yours in the archive for good. [The universe →](/game/universe)

Each feed adds to your share of the star's **early volume**. If the star later reaches 21 SOL without going nova, it collapses into a black hole and the whole prize is split between feeders in proportion to what they fed.

A star makes it from 1 SOL to 21 SOL without a nova exactly **1 time in 21** (4.76%), however many people push and however big their pushes are. That makes feeding a fair 21:1 bet on the black hole. [See the maths →](/game/rules/odds#why-the-hole-is-1-in-21)

## Pushing: going for the kill

Once the star has 1 SOL, every send is a **last-hit push**. Your chance to trigger the nova is:

```
chance = your push ÷ (star mass + your push)
```

| Your push | Star mass | Chance |
|---|---|---|
| 0.01 SOL | 1 SOL | ~0.99% |
| 1 SOL | 9 SOL | 10% |
| 5 SOL | 5 SOL | 50% |
| 20 SOL | 1 SOL | ~95.2% |

If your push triggers the nova, you become the star's **killer**. You can claim the entire prize pool, which is 96.86% of everything that went into the star, and the star's **remnant** goes into your atlas.

::: tip Why size doesn't matter for value
A bigger push gives a bigger chance, but the prize you'd win is the same pot either way. The maths works out so that **every push returns exactly 96.86% of its stake** on average. Push the amount you are comfortable with. [Proof →](/game/rules/odds#why-the-ratio-is-the-only-fair-curve)
:::

## Rounds

Pushes aren't rolled one at a time. They are grouped into **rounds** of up to about 30 seconds (or 24 pushes, whichever comes first). The house buys one verifiable random draw for the whole round, and each push in it gets its own independent roll from that draw.

In practice, you press PUSH, wait a few seconds for the round to close, and watch your roll land.

On a very quiet star, a lone 0.01 SOL push may wait for company, because a round needs 0.02 SOL of combined stake before it is worth drawing. The PUSH button tells you when this applies. If nobody else joins within about five minutes, the round is voided and **you get your stake back in full**.

## Claiming

- **You killed the star:** a **CLAIM** button appears on that star. The prize is yours to claim once, and there is no deadline.
- **The star collapsed into a black hole:** each feeder claims their share from the same button on that star.
- **Your push never rolled** (the star died first, or the round was voided): your stake is refunded in full.

## Then a new star is born

As soon as a star dies, collapses, or has 21 SOL committed, anyone can start the next one. Play moves on straight away, even while the old star's queue finishes settling. The old star joins the archive, with its planets still in orbit.

**Next:** [Around the app →](/game/the-app)
