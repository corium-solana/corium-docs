# DUST: the rules

<p class="lede">The exact rules behind the weekly leaderboard: what earns DUST, how the pool is sized and split, and why the numbers are what they are. The short version is <a href="/earn/dust">DUST & weekly payouts</a>.</p>

## Earning

| Action | DUST | Exactly |
|---|---|---|
| Finish a curve | 1,000 per SOL | Net SOL into the final stretch of a coin that graduates that week. On Corium coins, the stretch credit of the [supernova bounty](/rules/bounty#scoring): sells in the stretch cancel buys. On pump.fun coins with a bounty, the credit in the program’s [stretch ledger](/rules/pots#finishers-the-stretch-ledger); forfeited credit counts 0. |
| Launch a coin | 500, then 2,500 | 500 the week the coin first reaches its final stretch; 2,500 the week it graduates. |
| Win a request | 3,000 | To the creator of the winning coin, the week it wins. |
| Fund a bounty | 200 per SOL | The week its coin graduates, for the share of your contribution that went to finishers other than you. |
| Trade | 10 per SOL | Every trade on a Corium coin, up to 300 DUST per wallet per UTC day. A coin’s creator earns none for trading their own coin. |
| Referrals | 10% of theirs | Of each referral’s DUST that week, capped at 5,000 a week in total. Never taken from the referral. [Referrals →](/earn/referrals) |

Linked wallets are one account: their DUST adds up, and the account’s caps apply once. Corium’s own wallets are excluded from the board.

## The week

- A week runs from **Monday 00:00 UTC to the next Monday**. When it closes, its board is frozen exactly as it stands and the next starts at zero.
- **Season 1** began on **Friday 2 October 2026**, so its first week runs ten days, to Monday 12 October. Every week after runs Monday to Monday.
- A **season** is four weeks, and the next begins the moment one ends. Lifetime DUST and ranks add up across every week and season.

## The pool

```
pool = max(1.5 SOL, 25% × Corium’s fees that week)
```

Corium’s fees are its share of curve trading fees on every coin plus the fees its locked pool positions earned that week. The 1.5 SOL floor is paid from the treasury when fees don’t cover it.

## The split

1. **Qualify:** at least **1,000 DUST** that week, of which at least **500 earned** (finishing, launching, requests and bounties). Trading and referral DUST count toward your payout, but not toward the 500.
2. **Top 20:** the 20 qualifying accounts with the most DUST.
3. **Pro rata:** each gets `pool × their DUST ÷ the top 20’s DUST`.
4. **Cap:** no account takes more than **30%** of the pool. What a capped account can’t take is shared among the rest the same way. If fewer than four accounts qualify, what can’t be paid under the cap stays in the treasury.

Payouts are sent in SOL to each account’s main wallet from the treasury after the week closes.

## Why these numbers

Corium’s fee share is about 0.5% of volume. So:

| Week | Volume | Graduations | Pool | ≈ SOL per 1,000 DUST |
|---|---|---|---|---|
| Small | 1,000 SOL | 1 | 1.5 (floor) | 0.07 |
| Busy | 4,500 SOL | 2 | 3.8 | 0.06 |
| Very busy | 20,000 SOL | 4 | 12.9 | 0.15 |

Finishing earns roughly a 6% to 15% rebate on the SOL put into a graduating coin’s final stretch. A graduated launch is worth about 0.2 to 0.45 SOL of DUST, on top of creator fees.

### Farming doesn’t pay

| Attempt | Cost of 1,000 DUST | Why it fails |
|---|---|---|
| Wash-trade a coin (100 SOL of volume) | 0.5 SOL in fees | Trading DUST can’t qualify you, and costs ~10× what it pays |
| A creator washing their own coin | 0.35 SOL net of creator fees | Creators earn no trading DUST on their own coins |
| Fund a bounty and finish it yourself | ~0.25 SOL | Funding DUST counts only what went to other finishers |
| Graduate your own coin alone | Tens of SOL | Selling 80% of the supply into an 85 SOL pool |
| Fake referrals | The referrals’ own activity | Capped at 5,000 a week, and can’t qualify you |

In weeks the fees drive the pool, it grows by about 0.00005 SOL per trading DUST, while a trading DUST costs about 0.0005 SOL in fees: volume farming loses ten to one.

## Ranks

Lifetime DUST (every week of every season, linked wallets included) sets a rank: Drifter 0, Ember 500, Kindler 2,500, Stoker 8,000, Forgehand 20,000, Starwright 50,000, Novabound 120,000, Heliarch 300,000, Singularity 750,000. Ranks never go down.

::: info What’s on chain and what isn’t
DUST is computed by Corium’s server from on-chain activity, and the weekly payouts are sent by hand from the treasury. Unlike bounties and prizes, the pool isn’t held by the program: it’s a promise from Corium, not something the chain enforces.
:::
