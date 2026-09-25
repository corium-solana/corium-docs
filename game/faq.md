# Corium Game FAQ

## The basics

### What is Corium?
An on-chain game of chance on Solana, set in a universe its players build. Players feed stars, which pulls planets into orbit, and push SOL into them. Whoever lands the push that makes a star go nova takes the pot. [Read more →](/game/)

### Is it on mainnet?
Yes. Corium runs on Solana mainnet at [www.corium.so](https://www.corium.so). The program ID is `CoriumcqGZW3cdnAiyWz6jHHveMUmdrw9RC1KXfMsF8S`.

### What do I need to play?
A Solana wallet (Phantom, Solflare or Backpack), some SOL, and to be 21 or older. [Getting started →](/game/getting-started)

### Can I try it without SOL?
Yes. The interactive tutorial runs on a practice star with no SOL involved. It's offered on your first visit, and it's always under **Settings → Play tutorial**. You can also watch live stars and replay past ones without connecting a wallet.

### What's the minimum bet?
0.01 SOL. Every send is a whole multiple of 0.01 SOL.

### Is there a maximum?
Only the room left in the current star: up to 1 SOL during the nursery, and up to 21 SOL of total mass after that. Anything over that is clipped, not rejected.

## Odds & winning

### What are my odds?
`your push ÷ (star mass + your push)`. For example, 1 SOL into a 9 SOL star is 10%. [Details →](/game/rules/odds)

### Is a big push better than a small one?
No. Every push, at any size, has the same expected return of 96.86% of its stake. A bigger push buys a bigger chance at the same pot. [Proof →](/game/rules/odds#why-the-ratio-is-the-only-fair-curve)

### What does the winner get?
The whole prize pool (96.86% of everything that went into the star), plus the star's remnant for their atlas.

### What's the black hole?
If a star reaches 21 SOL without anyone triggering a nova, it collapses. The pot is then split between everyone who fed it during its nursery (under 1 SOL), in proportion to what they fed. This happens 1 time in 21. [Details →](/game/rules/black-hole)

### How do I claim my winnings?
Open the star you won (it's in your History, or use fast travel) and press **CLAIM**. Prizes and black-hole shares are claimed once, by the winning wallet, and there is no deadline.

## Planets, DUST & ranks

### How do I get a planet?
Feed a star while it's under 1 SOL. Every feed that lands becomes a world in that star's orbit, and it's recorded as yours. [The universe →](/game/universe)

### What decides which planet I get?
The star's on-chain seed and the order your feed landed in. The same star always has the same worlds, so yours is fixed the moment it lands. Terra worlds and ringed worlds are the rarest.

### Are planets NFTs? Can I sell them?
No. Worlds, remnants and DUST are derived from on-chain data, so they're verifiable, but they aren't tokens. They can't be transferred or sold and have no monetary value.

### What is DUST?
A score on your on-chain player account. Every send earns it, with more for sending early in a star's life. It only goes up and unlocks ranks and perks. [Ranks & perks →](/game/progression)

### Does a higher rank improve my odds?
No, never. Every perk is cosmetic, social or archival. Nothing changes odds, payouts, fees or ordering.

### How do I get a name over my pushes?
Reach 2,500 DUST to unlock **Callsign**, then set your name on your profile. At 6,000 DUST you can pick its colour.

## Fees

### What's the house edge?
3.14% of every settled send. That's the only edge in the game.

### Do I pay for the randomness?
No. The house pays for every VRF draw out of its own 3.14%.

### What else do I pay?
Solana network fees, plus account rent. Most rent comes back to you when the accounts close, and **History → Return leftover SOL** collects any that's still waiting. The worst case is about 0.0029 SOL of non-refundable rent, on a brand-new wallet's first push into a brand-new star. [Details →](/game/rules/fees#what-you-sign)

## Fairness & safety

### Can the team rig the outcome?
The odds and fees are compiled into the program, and there's no admin or config that can change them. Randomness comes from MagicBlock's verifiable oracle, and no one can compute a round's seed before the round closes. [How →](/game/rules/randomness)

### Is the deployed program the same as the public code?
Yes. The build is verified by OtterSec against [corium-core](https://github.com/corium-solana/corium-core). [Check the status →](https://verify.osec.io/status/CoriumcqGZW3cdnAiyWz6jHHveMUmdrw9RC1KXfMsF8S)

### Is Corium audited?
The program has had an internal audit. Every finding is fixed and covered by a test scenario that runs against a real Solana validator. It hasn't had an external audit yet.

### Is there anything I have to trust?
Yes, one thing: the program's **upgrade authority**. It's held by a Squads multisig at launch, so that a broken oracle or a discovered bug can be fixed, and it will be dropped to `None`. Until then, treat the program as changeable by the team. [Details →](/game/rules/safety#what-you-do-have-to-trust)

### What if my push takes a long time?
On a very quiet star, a small push may wait for others to join its round. If no one does within about five minutes, the round is voided and your stake is refunded in full.

### What if Corium goes offline?
Your funds aren't stuck. Every bookkeeping instruction is permissionless, rounds that never draw are refunded after about five minutes, and a star that goes silent for 7 days can be collapsed by anyone, with feeders refunded. [Details →](/game/rules/safety)

## Account & chat

### Why do I need to sign a message?
Signing in is one signature. It's not a transaction and costs nothing. The first time, it also confirms you are 21+ and agree to the [terms](/game/terms). It enables chat, your profile, and other signed-in features.

### How long does a sign-in last?
Up to 30 days, or 14 days without use.

### Why can't I post in chat?
You need to be signed in with a wallet that has fed or pushed at least once.

### Can I hide my PnL?
Yes. Your profile has a switch that hides your PnL from visitors.

### Can I withdraw my consent?
Yes, under Settings. Withdrawing signs that wallet out everywhere.
