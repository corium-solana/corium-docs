# Randomness

Every nova roll comes from **MagicBlock VRF**, a verifiable random function oracle on Solana. You never pay for it.

## One draw, many rolls

A VRF draw costs 0.0005 SOL (MagicBlock's fixed request fee), which is half a minimum push. Charging that to each player would make small pushes absurd, so it is charged to the **round** instead.

A **round** is every push that arrives inside the same window: 75 slots (about thirty seconds), or sooner if 24 pushes arrive first. It is sealed once and drawn once. Every member then derives their own roll from that single draw plus their own `push_id`.

- **Your roll is independent** of everyone else's.
- **Nobody can single you out.** `push_id` is assigned when you push, before the seed exists.

The cost per push falls as the round fills. One draw over 24 members is about 0.00002 SOL each, and the house pays it.

## The 0.02 SOL line

At 3.14%, a round needs **0.02 SOL of combined stake** to pay for its own draw (0.0005 ÷ 3.14% ≈ 0.0159, and stakes move in 0.01 steps). Any single push of 0.02 SOL or more pays for its own round.

A round below that line isn't drawn. It stays open and keeps taking members. You are told before you sign: if your amount would leave the round short, the button says how much more it needs, and the message disappears as soon as your amount, or someone else's push, covers it.

That's why the window is a *minimum* wait, not a maximum. On a busy star you'll never notice it. On a dead-quiet star, only a lone 0.01 SOL push sits there waiting. If no company arrives, the round is voided after about five minutes and you get your stake back in full.

This trade is deliberate. The alternative would be a 0.02 SOL minimum for everyone, just to spare a lone 0.01 SOL push a possible five-minute wait.

The one exception is the **last push into a star**. Once committed mass reaches 21 SOL, nothing more can join, so that round is drawn whatever its size.

## Why the seed can't be gamed

The property that matters is this: **nobody can compute a round's seed until the round is closed to new entrants.** Three ingredients cover for each other:

- **The opener's `client_seed`** is committed as the round's entropy, so a block leader doesn't have sole control of the seed. It's fixed at that point, so later arrivals can't steer it.
- **A recent slot hash** is mixed in, so whoever set that entropy can't re-roll the seed by pushing again. Nobody can predict which hash will be used, and it doesn't exist yet when they sign.
- **The cranker's own address** is mixed in, so the seed isn't a pure function of public state.

Sealing, seeding and requesting the draw all happen in **one transaction** (`draw_round`), so a seed never sits on chain while its draw is still unbought.

The draw arrives as a callback: MagicBlock's oracle calls `consume_randomness`, and the program only accepts it when it's signed by the identity the VRF program derives for *this* program. Randomness this program didn't ask for can never be read as a round's draw.

The caller names the slot whose hash is used, and the program checks that it's one of the last 150. That's harmless: a seed can't be evaluated without the VRF output, so there's no way to shop for a good one.

## Voiding can't discard a bad roll

If a round's draw doesn't arrive, anyone can void it after the timeout, and everyone in it is refunded. But:

- a round whose draw **has already landed can't be voided**, and
- while a draw is pending, nobody knows its value,

so voiding is always a blind choice. It can never be used to throw away an unfavourable result.
