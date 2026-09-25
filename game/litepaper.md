---
outline: [2, 2]
---

# Corium Litepaper

<p style="color: var(--vp-c-text-2); margin-top: -8px">Version 1.1 · September 2026 · <a href="https://www.corium.so">corium.so</a></p>

::: tip Print or save as PDF
This page is designed to print cleanly. Use your browser's **Print → Save as PDF**.
:::

## Abstract

Corium is an on-chain game of chance on Solana, played inside a universe its players build together. One star burns at a time. Players send SOL into it: below 1 SOL of mass they *feed* it, and every feed pulls a planet into the star's orbit; from 1 SOL onward every *push* carries a chance to make it go nova, and the player who lands the lethal push claims the entire prize pool and the star's remnant. If a star reaches 21 SOL without going nova, it collapses into a black hole and the players who fed its nursery split the pot. Then the next star is born, and the dead one joins a permanent archive, its planets still in orbit.

Every rule is compiled into the program. The chance of a nova is the pusher's share of the mass their push creates, which makes the expected return of every push exactly 96.86% of its stake, at any size and at any point in a star's life. Randomness comes from MagicBlock's verifiable random function (VRF), bought once per round of pushes and paid for by the protocol. There is no admin instruction, no pause, and no parameter anyone can change, and the deployed build is verified against the public source. Every stake has an exit that depends on neither the operator nor the oracle.

Around the bet sits a progression layer: every SOL sent earns DUST, an on-chain score that climbs ten ranks and unlocks callsigns, colours, worlds to wear and epitaphs. By design, none of it ever changes the odds.

## 1. Motivation

On-chain games of chance usually fail players in one of four ways:

1. **Opaque odds.** Payout tables, multipliers, and house edges live off-chain or change without notice.
2. **Trusted randomness.** The operator, a validator, or the last player to act can influence or predict the outcome.
3. **Stuck funds.** When the operator, the oracle, or the players disappear, money can be left locked in a contract with no exit.
4. **Nothing left behind.** A round ends, the table resets, and nothing a player did persists.

Corium rules out the first three in the program, not with promises. The odds are one public formula, the randomness can't be computed by anyone before a round closes, and every stake and every pot has a permissionless way out. The fourth is answered by the universe: every star, every planet, and every kill is permanent and replayable.

## 2. The game

There is one live star at a time. Its **mass** is the SOL that has been sent into it. A star's life has two phases:

| Star mass | Phase | What a send does |
|---|---|---|
| 0 – 1 SOL | **Nursery** | A **feed**. Settles instantly, can't cause a nova, pulls a planet into orbit, and earns a share of the black-hole pot. |
| 1 – 21 SOL | **Hazard** | A **push**. Joins a round and rolls for a nova. If lethal, the pusher becomes the star's **killer**. |
| 21 SOL | **Black hole** | The star collapses without a killer. Nursery feeders split the prize. |

When a star dies, collapses, or has 21 SOL committed, anyone can create the next one. Play never pauses between stars.

As its mass grows, a star moves through seven visual stages: protostar, main sequence, blue giant, red giant, supergiant, critical, and event horizon. The stages change how the star looks and how much DUST a send earns. They don't change the odds.

## 3. The universe

### 3.1 Star systems

Each star is born with a seed derived on-chain from the star before it. That seed fixes the star's **system**: nine orbital rungs, each with a planet family drawn from zones the way a real system sorts itself (molten worlds close in, giants further out, ice at the edge), plus which worlds carry rings and moons.

### 3.2 Worlds

**Every nursery feed that lands takes the next seat in the system and becomes a world in orbit.** Because the world is determined by the star's seed and the order of the feeds, it is the same world for every viewer and every replay, forever. There are nine families across four rarity tiers:

| Tier | Families |
|---|---|
| Common | Slag, Rock, Rust, Sand |
| Uncommon | Ice, Gas giant, Ice giant |
| Rare | Violet giant |
| Exotic | Terra |

A ring lifts a world one tier. Rings are allotted per system, and 62% of systems get none.

### 3.3 Remnants

The killer of a star keeps its **remnant**, the top-tier object in the game, since every star has exactly one killer.

### 3.4 The archive

Every past star remains visitable at its own address (`corium.so/star/<n>`). Its full lifecycle can be replayed at speed, with each push and each world in place, along with the epitaph its killer left.

Worlds and remnants are derived from on-chain data, so anyone can check them and nobody can fake them. They are **not tokens or NFTs** and carry no monetary value.

## 4. Mechanics

### 4.1 Sending

- Every send is a whole multiple of **0.01 SOL**, which is also the minimum.
- The maximum is the room left before the next boundary (1 SOL, then 21 SOL). Oversized sends are **clipped**, never rejected.
- In the hazard phase, room is measured against *committed* mass (settled plus queued), so the queue can never over-promise.

### 4.2 The nova roll

For a push of `a` SOL into a star of settled mass `M`:

```
chance(nova) = a / (M + a)
```

The roll is derived from the round's VRF output and the push's own sequence number:

```
roll = sha256("soldust:roll" ‖ round.randomness ‖ push_id)[..16] mod 10^9
lethal ⇔ roll < 10^9 × a / (M + a)
```

There are no stage tables, base rates, or caps. The chance is computed at settle time from settled mass, so movement in the queue can't change what a push is worth.

### 4.3 The prize

A settled send splits into **96.86% prize pool** and **3.14% protocol fee**. The prize pool is therefore always exactly 96.86% of the star's mass. On a nova, the killer claims the entire prize pool.

## 5. Fairness

### 5.1 Constant expected return

Because the prize is proportional to mass and the chance is the push's share of mass, the mass cancels:

```
EV(push) = [a / (M + a)] × 0.9686 × (M + a) = 0.9686 × a
```

**Every push returns 96.86% of its stake in expectation**, whether 0.01 SOL or 20 SOL, into a young star or one on the edge of collapse. No strategy, timing, or bet size has an edge over any other. The 3.14% fee is the only edge in the game, and it is fixed.

### 5.2 The black hole is exactly 1 in 21

The probability that a star survives a sequence of pushes telescopes:

```
M0/M1 × M1/M2 × … × M(n-1)/Mn = M0 / Mn
```

Star mass is a martingale, so a star travels from 1 SOL to 21 SOL without a nova exactly **1/21 (4.76%)** of the time, whatever the number or size of pushes. Nursery feeders, who are paid out only on a black hole, are therefore holding fair 21:1 odds, and also return 96.86% in expectation. Feeders and pushers sit on one book by construction.

### 5.3 Exact accounting

The fee is 314 basis points (π%), and the push step is 0.01 SOL, so the fee on each step is exactly 314,000 lamports. The split never rounds. The prize pool is exactly 96.86% of mass to the lamport, and the identities above hold exactly, not approximately.

## 6. Randomness

### 6.1 Rounds

A VRF request costs 0.0005 SOL. Buying one per push would make small pushes uneconomic, so pushes are grouped into **rounds**: all pushes within about 30 seconds (75 slots), or the first 24, whichever comes first. Each round buys **one** draw, and each member derives an independent roll from it using their own `push_id`, which is assigned before the seed exists.

The protocol pays for every draw out of its 3.14% fee. Players never pay for randomness. A round is drawn once its combined stake covers the cost of the draw (0.02 SOL). Below that, it waits for more pushes, and after about five minutes of silence it's voided and every stake is refunded.

### 6.2 Seed integrity

A round's seed can't be computed by anyone until the round is closed to new entrants. It combines:

- the **opener's client seed**, fixed when the round opens, so no block leader controls the seed alone;
- a **recent slot hash** that doesn't exist when players sign, so the opener can't re-roll; and
- the **cranker's address**, so the seed isn't a pure function of public state.

Sealing, seeding and requesting the draw all happen in one atomic transaction. The VRF result is only accepted from the identity that the VRF program derives for this specific program, so no forged or foreign randomness can be read as a round's draw.

### 6.3 No discarding bad rolls

Anyone can void a round whose draw hasn't arrived, but only before the draw lands. While a draw is pending, nobody knows its value, so voiding is always a blind choice and can never be used to throw away an unfavourable result.

## 7. Liveness: nothing can freeze

Corium is designed so that the game **can end but can't get stuck**.

| Failure | What happens | Who can trigger it |
|---|---|---|
| A round's draw never arrives | After ~5 minutes the round is voided, and every stake in it is refunded in full. | Anyone |
| A star is destroyed while pushes are queued | Queued pushes are refunded in full. | Anyone |
| A star stops moving (oracle gone, or players gone) | After 7 days without new mass (24 h in the nursery), the star is collapsed. Feeders get their feeds back less 3.14%, and the remainder endows the next star. | Anyone |
| The operator's crank stops | Every bookkeeping instruction is permissionless, so anyone can keep the queue draining. | Anyone |

The stall-collapse payout is deliberately *worse* for feeders than the game carrying on, and the house takes nothing from it. No one, including the operator, can profit by causing or waiting for a stall.

Unclaimed prize money (a black hole nobody fed, or a stall remainder) goes into a next-star reserve that **can never be withdrawn**. It can only endow future stars, up to a cap of 0.99 SOL, which keeps every star's nursery intact.

## 8. Progression

### 8.1 DUST

Every send, feed or push, earns **DUST**, a counter on the player's on-chain account:

```
DUST = 1,000 per SOL × stage multiplier × chance bonus
```

The stage multiplier rewards sending early (2.5× at protostar, tapering to 0.8× at the event horizon), and the chance bonus adds up to 1.2× for pushes that take a big slice of the star. DUST only goes up and is never spent: ranks and perks unlock at lifetime thresholds, so anyone can verify another player's standing straight from the chain.

### 8.2 Ranks and perks

Ten ranks, from **Drifter** to **Singularity** (750,000 DUST), colour a player's name along a stellar temperature ramp. Six perks unlock along the way:

| Perk | DUST | Effect |
|---|---|---|
| Callsign | 2,500 | Your name burns over every push you make, visible to everyone watching |
| Colours | 6,000 | Choose the tint your callsign burns in |
| Atlas | 12,000 | Wear any world you've seeded |
| Observatory | 25,000 | Your profile opens into every star you've touched |
| Signet | 40,000 | A live corona around your world |
| Epitaph | 80,000 | Carve a line into the archive of any star you kill |

**DUST never buys an edge.** Every perk is identity, memory or status. None touch odds, payouts, fees or ordering. That is a rule of the design, not a coincidence: the moment DUST bought an advantage, the game would stop being the same fair bet for everyone.

### 8.3 Social layer

Public **profiles** show a player's rank, worn world, atlas and lifetime PnL (which the player can hide). **Leaderboards** rank DUST, kills, worlds built, volume and prizes. A single live **chat** room, open to any wallet that has played at least once, carries event lines the game writes itself (novas, collapses, births, big pushes), which players can't forge.

## 9. Economics

### 9.1 Protocol fee

The only revenue is the fixed **3.14%** of settled sends. It funds:

- every VRF draw (about 0.00002 SOL per push in a full round), and
- protocol operations: RPC infrastructure, the crank, development.

Protocol fees accrue in a dedicated bucket in the vault, and can only ever be paid to the treasury address fixed at initialization. They can never touch player escrow, unpaid prizes, or the next-star reserve. Because the same bucket buys randomness, anyone may trigger a withdrawal only down to a 0.05 SOL float, which keeps draws funded even if the operator is offline. Only the treasury can take the float itself.

### 9.2 Player costs

Beyond their stake, players pay only Solana network fees and account rent. Rent for per-push accounts is returned when those accounts close, and the app has a one-tap **Return leftover SOL** for any that are still open. A brand-new wallet's first push into a new star costs at most about 0.0029 SOL of non-refundable rent.

## 10. Trust model {#trust-model}

| Property | Enforced by |
|---|---|
| Odds, fee split, thresholds, timers | Compiled into the program. No on-chain config holds tunables. |
| No admin, no pause, no retune | Those instructions don't exist in the program. |
| Randomness integrity | MagicBlock VRF plus the seed construction in §6. |
| Stakes always have an exit | Permissionless void, refund, and stall-collapse paths. |
| Treasury can't take player funds | Separate vault buckets. Withdrawals are capped to protocol accrued, and paid only to the fixed treasury. |
| What's deployed is what's published | [OtterSec verified build](https://verify.osec.io/status/CoriumcqGZW3cdnAiyWz6jHHveMUmdrw9RC1KXfMsF8S) against [corium-core](https://github.com/corium-solana/corium-core). |
| **Program can be upgraded** | **Upgrade authority: a Squads multisig, held at launch.** |

**The one thing you have to trust is the upgrade authority.** It is held at launch deliberately: if the oracle breaks or an issue is found, an upgrade is the only way to get funds moving again. Revoking it on day one would make the program honest and also unfixable. It sits with a Squads multisig (`9BfEudxsWmyPP6uGHRyyMHptShK6DVufZSkYd8aaHAdx`), not a single key, and it will be set to `None`, after which no one can change the rules. Until then, players should treat the program as changeable by the team.

**Audit status.** The program has been through an internal audit: every finding is fixed and pinned by a test scenario that runs against a real validator. It hasn't yet had an external audit.

## 11. Architecture

| Component | Role |
|---|---|
| **On-chain program** (Anchor, Solana) | Holds all funds, enforces every rule, and keeps each player's DUST. |
| **MagicBlock VRF** | Supplies one verifiable random draw per round. |
| **Crank** | A service that runs the permissionless bookkeeping (drawing rounds, resolving pushes, creating stars). It has no special privileges; anyone can run the same instructions. |
| **RPC proxy** | Gives browsers fast, rate-limited access to Solana without exposing provider keys, and handles wallet sign-in for chat and profiles. Players can switch to their own RPC at any time. |
| **Indexer & database** | Indexes on-chain events for history, boards, and chat event lines. Stores profiles, chat and epitaphs. |
| **Web client** ([corium.so](https://www.corium.so)) | Renders the star and its worlds in real time, builds transactions for the player's wallet to sign, and hosts the archive, profiles, boards, chat and swap. |

**Sends, claims and DUST are the program.** History, chat, boards, profiles and epitaphs are the interface. The interface can be replaced; the rules can't.

## 12. Responsible play & legal

- Corium is a **game of chance**. Players can lose everything they send.
- Players must be **21 or older**. Age confirmation and agreement to the [terms of use](/game/terms) are given in a single wallet sign-in signature, with no transaction and no fee, and can be withdrawn at any time.
- Players are responsible for complying with the laws of their jurisdiction.
- DUST, worlds and remnants have no monetary value and can't be transferred.
- Nothing in this document is financial advice or an offer of any security or investment.

---

**Contact:** [@corium_so](https://x.com/corium_so) · [corium.so@proton.me](mailto:corium.so@proton.me). We will never message you first, and we will never ask for a seed phrase or private key.
