# FAQ

## The basics

### What is Corium?
A memecoin launchpad on Solana where every coin is a living star, and the wallets that carry a coin over its graduation line split its supernova bounty. [Read more →](/guide/what-is-corium)

### Is it on mainnet?
Yes. The launchpad is live on Solana mainnet at [corium.so](https://corium.so). Every official address is on the [program reference](/rules/program).

### What do I need?
A Solana wallet (Phantom, Solflare or Backpack), some SOL, and to be 18 or older. Browsing needs nothing. [Getting started →](/guide/getting-started)

## Launching

### How much does it cost to launch a coin?
No creation fee. You pay about 0.03 SOL of Solana rent for the new accounts, plus your optional first buy. [Launching →](/guide/launching)

### What does the creator earn?
37% of the curve's trading fees after Meteora's cut (about 0.3% of volume), plus half of the locked pool's LP fees after graduation. [Fees →](/rules/fees)

### Can I change my coin's name or image later?
No. Every Corium coin's mint and metadata are immutable, so what buyers see is what you launched.

### Can the creator pull the liquidity?
No. Before graduation the SOL is in the bonding curve; after graduation it's in a Meteora pool whose liquidity is permanently locked.

## Trading

### What are the fees?
1% per trade on the curve (50% in the first 60 seconds, decaying to 1%). Of the 1%: 0.2% to Meteora, about 0.3% to the creator, about 0.25% to the coin's bounty and about 0.25% to Corium. [Details →](/rules/fees)

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
**Portfolio → Bounties**, or the coin page, once the payout is posted (shortly after the 10-minute hold check). You have 30 days.

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

## DUST & referrals

### What is DUST?
Points for what grows Corium: finishing curves, launching coins that graduate, winning requests, funding bounties, trading and referrals. Every Monday the top 20 split a SOL pool. [DUST →](/earn/dust)

### How big is the weekly pool?
25% of Corium’s fees that week, never less than 1.5 SOL.

### Why didn’t I get paid with lots of trading DUST?
To be paid you need 1,000 DUST that week, at least 500 of it earned from finishing, launching, requests or bounties. Trading and referral DUST add to a payout but can’t qualify one on their own. [Qualifying →](/earn/dust#qualifying)

### Does my DUST reset?
Your weekly DUST does, every Monday. Your lifetime DUST and your rank never do.

### How do referrals work?
Share `corium.so/?r=yourcode`. Anyone who signs in for the first time through it adds 10% of their DUST to yours, up to 5,000 a week, without losing any of theirs. [Referrals →](/earn/referrals)

## Account

### Why do I sign a message to sign in?
It proves you own the wallet without moving anything, and it records that you're 18+ and agree to the terms. It is never a transaction. [Getting started →](/guide/getting-started)

### Where does my profile name come from?
You get a random star name when you first sign in. Change it any time; names are unique. [Profiles →](/guide/social#profiles)

### I use several wallets. Can they be one account?
Yes. Link up to 10 wallets on your profile, each by signing a message with it (or a never-sent memo transaction on a Ledger). Their DUST and pump.fun record add up. [Linked wallets →](/guide/account#linked-wallets)

### Can I show my pump.fun history?
Yes. Corium reads your wallets’ pump.fun trades and launches from the last 180 days and shows them on your profile’s **Track record**. [Track record →](/guide/account#track-record-bring-your-pump-fun-stats)
