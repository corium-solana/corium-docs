# FAQ

## The basics

### What is Corium?
Social trading on Solana. One feed of every coin, trader and move, with a buy button on every post; Corium Trade for any Solana token; a wallet built in; your own coin launched in seconds; and DUST paid out in SOL every week. [Read more →](/guide/what-is-corium)

### Is it on mainnet?
Yes. Corium is live on Solana mainnet at [corium.so](https://corium.so) and in the [Android app](/guide/apps). Every official address is on the [program reference](/rules/program).

### What do I need?
To be 18 or older, and some SOL to trade. Make [Cori's wallet](/guide/wallet) in a tap or use your own (Phantom, Solflare, Backpack). Reading needs nothing. [Getting started →](/guide/getting-started)

## The Feed & posting

### Why can't I post yet?
Posting and replying open after three steps, done once: sign in with a wallet, make one trade on Corium (any size, on a curve or in Corium Trade), and link X or Discord. They keep bots off the Feed. The composer shows which are left, with a button for each. [The three steps →](/guide/posting#the-three-steps)

### Is posting paid?
No. There's no pass, subscription or fee. The three steps are the only gate. Your rank, which is earned DUST, opens links, scored calls, pictures, video and long posts, and how many posts a day. [What your rank opens →](/guide/posting#what-your-rank-opens)

### Why can't I post a picture or a link?
Pictures and links to other sites open at Ember (500 lifetime DUST); video at Kindler; long posts at Stoker. Links to corium.so and to the sites everyone uses (X, explorers, charts, the big wallets and DEXes) are open to anyone who can post. The Start here quests on Earn take an eligible account past Ember.

### How are calls scored?
From Ember, a post that names a coin is a call: Corium keeps the coin's price at the moment you post, and the post shows how it has done since. The callers' board adds up each call's doublings (a 4× is +2, a halving −1, each call between −1 and +6) plus a little for every 2× hit, over 7 or 30 days. [Calls →](/guide/posting#calls)

### How does For you decide what I see?
What readers did with each post (replies and opens most), who wrote it (followers, rank, SPARK, badges), whether you follow them or hold the coin, how fresh it is, and the safety screen, then mixed so no one author or coin takes over. [How For you is ranked →](/guide/feed#how-for-you-is-ranked)

### Can a creator post about their own coin?
Always, whatever their steps or rank, labelled **Dev**. And a launch post written on the Create page goes on the Feed as theirs when the coin lights. [Creators →](/guide/posting#creators)

### How do I mention someone?
Type `@` and pick them: the search finds X and Discord handles as well as names. An `@handle` typed in full works too. [Mentions →](/guide/posting#mentions)

### What happens when I report a post?
Three reports take a post down until a moderator looks. Moderators read every report. [Reports →](/guide/posting#reports)

## Launching

### How much does it cost to launch a coin?
No creation fee. You pay about 0.03 SOL of Solana rent for the new accounts, plus your optional first buy. [Launching →](/guide/launching)

### What does the creator earn?
37% of the curve's trading fees after Meteora's cut (about 0.3% of volume), plus 75% of the locked pool's fees after graduation (half for coins launched before the stepped pool fee). [Fees →](/rules/fees)

### Can I change my coin's name or image later?
No. Every Corium coin's mint and metadata are immutable, so what buyers see is what you launched.

### Can the creator pull the liquidity?
No. Before graduation the SOL is in the bonding curve; after graduation it's in a Meteora pool whose liquidity is permanently locked.

## Trading

### What are the fees?
On a Corium coin's curve, 1% per trade (50% in the first 60 seconds, decaying to 1%). Of the 1%: 0.2% to Meteora, about 0.3% to the creator, about 0.25% to the coin's bounty and about 0.25% to Corium. In Corium Trade, 0.25% a trade. [Details →](/rules/fees)

### Can I trade from a post?
Yes. Every coin on the Feed has **Ape in**: a Corium coin is bought on its curve, anything else through Corium Trade. [Buying from a post →](/guide/feed#buying-from-a-post)

### When does a coin graduate?
When 85 SOL is in its curve. Its liquidity moves to a Meteora DAMM v2 pool, locked forever, and you keep trading it on Corium. [Trading →](/guide/trading)

### Why did my buy only partly fill?
Near the top of the curve, a buy bigger than the room left fills up to the graduation price, and the rest of your SOL stays in your wallet. The trade panel warns you first.

### What is a black hole?
A coin with no trades for 7 days collapses into a black hole. One buy brings it back. [Stars →](/guide/stars)

## The bounty

### How do I win a supernova bounty?
Buy a coin during its final stretch (the last 10% of its curve) and still hold those tokens 10 minutes after it graduates. The bounty is split by net SOL bought into the stretch. [The bounty →](/rules/bounty)

### Where does the bounty money come from?
Half of Corium's share of the coin's trading fees, over its whole life on the curve. The Corium program puts it into the coin's escrow every time the fees are claimed. [The fee router →](/rules/fee-router)

### Can Corium take the bounty?
No. The bounty half of every fee claim goes straight into the coin's escrow on chain, and a payout must equal the escrow exactly. The only way escrow reaches the treasury is if nobody wins it and 30 days pass, or if winners leave it unclaimed for 30 days.

### How do I claim?
On your profile (**Claim all**, or the **Bounties** tab), or the coin page, once the payout is posted (shortly after the 10-minute hold check). You have 30 days.

### Does splitting my buys across wallets help?
No. Credit is linear in SOL, so ten wallets earn exactly what one would.

## Bounties & requests

### What’s the difference between the supernova bounty and a bounty?
The **supernova bounty** is automatic: every Corium coin has one, funded by Corium’s fees. A **bounty** is extra SOL that someone puts on a coin graduating, on Corium or pump.fun, refunded if it doesn’t. Finishing a coin can win both. [Bounties →](/earn/bounties)

### Can I put a bounty on a pump.fun coin?
Yes. Paste its address or link on [corium.so/bounties](https://corium.so/bounties). Corium takes 5%, only if the coin graduates and the bounty pays out.

### How do I finish a pump.fun coin with a bounty?
Buy through Corium: **Buy on Corium** on its bounty card, its finish link, or `/finish` in the Telegram bot. It’s pump.fun’s own buy at pump.fun’s price; the part past 90% of the curve is recorded on chain and locked until an hour after graduation. Buys made on pump.fun directly don’t count. [Finishing →](/earn/bounties#finish-one)

### What happens to my bounty if the coin doesn’t graduate?
You get all of it back, with no fee. The same if it graduates but nobody finished it through Corium, or if finishers leave their shares unclaimed for 30 days.

### What’s a request?
A prize for a coin that doesn’t exist yet. Creators launch it to enter, the first to graduate wins, and its creator and finishers split the prize. The sponsor gets a bag of the winner at launch price and half of Corium’s fees on it. [Requests →](/earn/requests)

### Do creators pay to enter a request?
No fee. They stake a small part of their own launch buy; if they lose, or nobody wins, it comes back to them.

## DUST, SPARK & your crew

### What is DUST?
Points for what grows Corium: finishing curves, launching coins that take off, winning requests, funding bounties, trading and your crew, plus free DUST for quests and today's star. The week's DUST decides the community pool; your lifetime DUST is your rank. [DUST →](/earn/dust)

### What is SPARK?
SOL you put into Corium and still hold 10 minutes later, 100 SPARK per SOL, more in a final stretch and most for finishing a curve. It splits the hunters' pool, and once granted it's never taken back. [SPARK →](/earn/dust#spark)

### How big are the weekly pools?
The community pool is 10% of Corium's fees that week and the hunters' pool 25%, each never less than 1.5 SOL; the draws add 30% of the hunters' pool on top. [Payday →](/earn/dust#payday)

### What's the difference between rank and Hunter level?
Your rank is your lifetime DUST, from Drifter to Singularity: it opens things on the Feed and your profile. Your Hunter level is your lifetime SPARK, from Scout to Starbreaker: it weighs your SPARK in the hunters' pool.

### Why didn’t I get paid with lots of trading DUST?
To be paid from the community pool you need 1,000 DUST that week, at least 500 of it earned from finishing, launching, requests, bounties or free DUST. Trading DUST and the 10% crew share add to a payout but can’t qualify one on their own. The hunters' pool goes by SPARK instead: buy and hold. [Qualifying →](/earn/dust#qualifying-for-the-community-pool)

### Does my DUST reset?
Your weekly DUST and SPARK do, every Monday. Your lifetime DUST, lifetime SPARK, rank and Hunter level never do.

### How do referrals work?
Share `corium.so/?r=yourcode`. Anyone who signs in for the first time through it joins your crew: 50 DUST when they connect an eligible account, 100 more on their first trade on Corium, and 10% of their DUST in the weeks they trade, up to 5,000 a week, without taking any of theirs. [Your crew →](/earn/referrals)

## Account

### Can I sign in without a wallet?
Yes, with X or Discord. You can read, like, follow and earn free DUST. Trading, launching and claiming need a wallet, and so does posting (step 1 of the three); payouts are sent to a wallet too. Link one any time. [Your account →](/guide/account)

### Why do I sign a message to sign in?
It proves you own the wallet without moving anything, and it records that you're 18+ and agree to the terms. It is never a transaction. [Getting started →](/guide/getting-started)

### Does Corium hold my keys?
No. Cori's wallet makes its keys on your device and locks them with your passkey; its backup on your account is sealed with that passkey and Corium can't open it. Write down your recovery phrase: it's the only sure way back. [Cori's wallet →](/guide/wallet#cori-s-wallet)

### Where does my profile name come from?
You get a random star name when you first sign in. Change it any time; names are unique. [Profiles →](/guide/profiles)

### How do I unlock more profile looks?
Every rank opens more: name styles, star forms, frames, skies, rings, colours and titles. They can't be bought. [Looks →](/guide/profiles#looks)

### Is there an iPhone app?
It's in Apple's review. Android is on Google Play and the Solana dApp Store, and one account works everywhere. [The apps →](/guide/apps)

### I use several wallets. Can they be one account?
Yes. Link up to 10 wallets on your profile, each by signing a message with it (or a never-sent memo transaction on a Ledger). Their DUST and pump.fun record add up. [Linked wallets →](/guide/account#linked-wallets)

### Can I show my pump.fun history?
Yes. Corium reads your wallets’ pump.fun trades and launches from the last 180 days and shows them on your profile’s **Track record**. [Track record →](/guide/account#track-record-bring-your-pump-fun-stats)
