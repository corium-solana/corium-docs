# Rules overview

This section is the program itself, written out for anyone who wants the exact machine. The in-app Rules screen stays short on purpose. This is the long version.

::: info The chain wins
Every number here is compiled into the on-chain program `CoriumcqGZW3cdnAiyWz6jHHveMUmdrw9RC1KXfMsF8S`. If these docs and the chain ever disagree, the chain is right.
:::

## The short version

You push SOL. It grows. It dies. We make another.

- **Under 1 SOL, you are feeding.** Nothing explodes. You are buying a hole ticket.
- **From 1 SOL on, every push can go nova.** The last hit takes the pot.
- **Never pops?** At 21 SOL, it collapses into a black hole and the early feeders split the money.
- **Randomness is free to you.** Pushes are batched into short rounds, one oracle draw (MagicBlock VRF) is bought per round, and the house pays for it out of its own 3.14% cut. Feeds don't use the oracle at all.
- **A last hit signs the stake plus rent** for the accounts it needs, and every one of those rents comes back when its account closes.

## Key numbers

| | Value |
|---|---|
| Minimum push, and the push step | **0.01 SOL** (every push is a whole multiple) |
| Nursery (feeds only) | **under 1 SOL** of star mass |
| Black hole | **21 SOL** of star mass |
| Prize pool | **96.86%** of every settled send |
| Protocol fee | **3.14%** of every settled send |
| Nova chance | **amount ÷ (star mass + amount)** |
| Expected return per push | **96.86%** of stake, at any size |
| Black hole frequency | **1 in 21** stars (4.76%) |
| Round window | ~30 s (75 slots) or 24 pushes |
| Round timeout (void & refund) | ~5 min (750 slots) |
| Stalled star collapse | 7 days without mass (24 h in the nursery) |

## One star at a time

There is one playable star at a time. You send **native SOL**. STARDUST is a score kept on your player account. It is not a token. Dead stars stay in the archive, with the planets their feeders seeded; see [the universe](/guide/universe).

When the current star has 21 SOL committed (landed plus still in line), or has already died, play moves to the next star. The old star's queue can keep settling in the background.

## Stars don't expire

The only clock in the program belongs to a round. A round that stalls for about five minutes can be voided by anyone, so its members get their stakes back. That is an escape hatch, not a game timer. It can't end a star, and it can't take anything from you.

## In this section

- [Odds & payouts](/rules/odds): the nova formula, and why every push returns 96.86%
- [Sending & fees](/rules/fees): push sizes, the fee split, and exactly what rent you sign
- [Randomness](/rules/randomness): rounds, VRF draws, and why the seed can't be gamed
- [Black hole & next star](/rules/black-hole): the feeder payout and how new stars are born
- [Refunds & safety](/rules/safety): why nothing can freeze, and what happens if the game dies
- [STARDUST](/rules/stardust): how the score is earned
- [Program reference](/rules/program): every instruction, and who can call it
