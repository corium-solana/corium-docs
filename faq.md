# FAQ

## The basics

### What is Corium?
An on-chain game of chance on Solana. Players push SOL into a shared star, and whoever lands the push that makes it go nova takes the pot. [Read more →](/guide/what-is-corium)

### Is it on mainnet?
Yes. Corium runs on Solana mainnet at [www.corium.so](https://www.corium.so). The program ID is `CoriumcqGZW3cdnAiyWz6jHHveMUmdrw9RC1KXfMsF8S`.

### What do I need to play?
A Solana wallet such as Phantom or Solflare, some SOL, and to be 21 or older. [Getting started →](/guide/getting-started)

### What's the minimum bet?
0.01 SOL. Every push is a whole multiple of 0.01 SOL.

### Is there a maximum?
Only the room left in the current star: up to 1 SOL during the nursery, and up to 21 SOL of total mass after that. Anything over that is clipped, not rejected.

## Odds & winning

### What are my odds?
`your push ÷ (star mass + your push)`. For example, 1 SOL into a 9 SOL star is 10%. [Details →](/rules/odds)

### Is a big push better than a small one?
No. Every push, at any size, has the same expected return of 96.86% of its stake. A bigger push buys a bigger chance at the same pot. [Proof →](/rules/odds#why-the-ratio-is-the-only-fair-curve)

### What does the winner get?
The whole prize pool: 96.86% of everything that went into the star.

### What's the black hole?
If a star reaches 21 SOL without anyone triggering a nova, it collapses. The pot is then split between everyone who fed it during its nursery (under 1 SOL), in proportion to what they fed. This happens 1 time in 21. [Details →](/rules/black-hole)

### How do I claim my winnings?
From the app. Prizes and black-hole shares are claimed once, by the winning wallet, and there is no deadline.

## Fees

### What's the house edge?
3.14% of every settled send. That's the only edge in the game.

### Do I pay for the randomness?
No. The house pays for every VRF draw out of its own 3.14%.

### What else do I pay?
Solana network fees, plus account rent. Most rent comes back to you when the accounts close. The worst case is about 0.0029 SOL of non-refundable rent, on a brand-new wallet's first push into a brand-new star. [Details →](/rules/fees#what-you-sign)

## Fairness & safety

### Can the team rig the outcome?
The odds and fees are compiled into the program, and there's no admin or config that can change them. Randomness comes from MagicBlock's verifiable oracle, and no one can compute a round's seed before the round closes. [How →](/rules/randomness)

### Is there anything I have to trust?
Yes, one thing: the program's **upgrade authority** is held at launch, so that a broken oracle or an audit finding can be fixed. It will be dropped to `None`. Until then, treat the program as changeable by the team. [Details →](/rules/safety#what-you-do-have-to-trust)

### What if my push takes a long time?
On a very quiet star, a small push may wait for others to join its round. If no one does within about five minutes, the round is voided and your stake is refunded in full.

### What if Corium goes offline?
Your funds aren't stuck. Every bookkeeping instruction is permissionless, rounds that never draw are refunded after about five minutes, and a star that goes silent for 7 days can be collapsed by anyone, with feeders refunded. [Details →](/rules/safety)

### Is Corium audited?
<!-- TODO: fill in audit status / link before publishing. -->
The program source is public at [github.com/corium-solana/corium-core](https://github.com/corium-solana/corium-core).

## Account & sign-in

### Why do I need to sign a message?
Signing in is one signature. It's not a transaction and costs nothing. The first time, it also confirms you are 21+ and agree to the [terms](/legal/terms). It enables chat, your profile, and other signed-in features.

### How long does a sign-in last?
Up to 30 days, or 14 days without use.

### Can I withdraw my consent?
Yes, under Settings. Withdrawing signs that wallet out everywhere.

## STARDUST

### Is STARDUST a token?
No. It's a score on your player account. It can't be transferred, sold, or withdrawn. [Details →](/rules/stardust)

### How do I earn more?
Send earlier in a star's life. Protostar sends earn 2.5× the dust of supergiant sends.
