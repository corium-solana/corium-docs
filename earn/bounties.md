# Bounties on any coin

<p class="lede">Is a coin stuck before it graduates? Put SOL on it graduating. The buyers who push it over the line split the bounty. If it doesn’t make it in time, you get every lamport back.</p>

<div class="glance">
<b>At a glance</b>

- Works on **Corium coins and pump.fun coins** that haven’t graduated yet.
- **0.05 to 15 SOL** per bounty; it must graduate within **1, 3, 7 or 14 days**.
- Graduates in time: the **finishers** (whoever bought the last 10% of its curve through Corium and held for an hour after) split it.
- Doesn’t: **full refund** to every sponsor, no fee.
- Fee: **none** on Corium coins; **5% on pump.fun coins, only if it pays out**.
</div>

## Why it works

A coin at 80% of its curve needs buyers who believe it will graduate. A bounty gives them a reason: if it graduates, they get paid on top of whatever their tokens are worth. Sponsors only pay when it works, so a creator, a community or a whale can buy momentum without risking it on a coin that stalls.

## Open a bounty

<ol class="steps">
  <li><b>Find the coin.</b> On <a href="https://corium.so/bounties">corium.so/bounties</a>, paste a pump.fun or Corium coin’s address or link. On a Corium coin page, use <b>Put a bounty on it</b>.</li>
  <li><b>Pick the amount and the deadline.</b> 0.05 to 15 SOL, and 1, 3, 7 or 14 days for it to graduate.</li>
  <li><b>Sign.</b> Your SOL goes into the bounty’s own escrow account in the Corium program. Nobody, Corium included, can move it except by the rules below.</li>
</ol>

Anyone can **add to** an open bounty. Each sponsor’s share is tracked, so refunds are exact.

## Finish one

The finishers are the wallets that buy the **final stretch**, the last 10% of the curve, **through Corium**, and hold until an hour after the coin graduates.

**Where to buy:** the trade panel on a Corium coin’s page, **Buy on Corium** on a pump.fun bounty card, a [finish link](/guide/finish-links), or `/finish` in the [Telegram bot](/guide/telegram). On a pump.fun coin it’s pump.fun’s own buy, at pump.fun’s own price and fees.

**What makes it count:** your buy is wrapped in two Corium instructions in the same transaction. The first reads the curve and your balance, the buy happens, and the second credits the SOL that landed past the 90% line and **locks the tokens bought there** in the program’s stretch vault. The part of your buy below the line is yours as normal.

**Holding:** the locked tokens are what “held” means. You can unlock them any time: before graduation your credit simply leaves the count; after graduation, during the one-hour hold, you give up your share. Once the hold is over you claim your share of every bounty on that coin, and your tokens come back to you.

**Your share** is your stretch credit (SOL past the line) divided by everyone’s. Buys made elsewhere, on pump.fun directly or through a bot, aren’t recorded, so they don’t count toward sponsored bounties. (A Corium coin’s own [supernova bounty](/rules/bounty) is scored differently and counts every buy.)

## When it ends

| What happens | Result |
|---|---|
| It graduates before the deadline | Within minutes, the fee (if any) goes to Corium and the rest is set aside for the finishers. Once the one-hour hold ends, claim your share from the **Bounties** tab on your profile or the bounty’s card, for 30 days. |
| It graduates, but nobody bought the stretch through Corium and held | The finishers’ share goes back to the sponsors, pro rata. (On a pump.fun coin the 5% fee has been taken by then, since the coin did graduate.) |
| It doesn’t graduate in time | A couple of minutes after the deadline, every sponsor can reclaim their SOL. No fee. |
| Finishers don’t claim within 30 days | What’s left goes back to the sponsors, not to Corium. |

Every step after graduation can be triggered by anyone; Corium’s crank does it within seconds. [Full rules →](/rules/pots)

## DUST

When a bounty’s coin graduates, its finishers earn **1,000 DUST per SOL** of stretch credit, and its sponsors earn **200 DUST per SOL** that went to finishers other than themselves. [DUST →](/earn/dust)

## Tips

- **For creators:** a bounty is the cheapest marketing that only costs you if it works. Post the [finish link](/guide/finish-links) everywhere.
- **For traders:** the Bounties board sorts live bounties by how close each coin is to graduating. That’s where a buy finishes a curve.
- **For sponsors:** a bounty on a coin at 30% rarely moves it. Bounties work best in the last third of the curve, with a deadline of days, not hours.
