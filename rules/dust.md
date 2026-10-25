# DUST: the rules

<p class="lede">The exact rules behind the weekly leaderboard: what earns DUST, how the pool is sized and split, and why the numbers are what they are. The short version is <a href="/earn/dust">DUST & weekly payouts</a>.</p>

## Earning

| Action | DUST | Exactly |
|---|---|---|
| Finish a curve | 2,000 per SOL | Net SOL into the final stretch of a coin that graduates that week. On Corium coins, the stretch credit of the [supernova bounty](/rules/bounty#scoring): sells in the stretch cancel buys. On pump.fun coins with a bounty, the credit in the program’s [stretch ledger](/rules/pots#finishers-the-stretch-ledger); forfeited credit counts 0. |
| Buy a stretch | 300 per SOL | Every final-stretch buy through Corium, on a Corium coin or a pump.fun coin, the week it is made, whether or not the coin finishes; up to 600 DUST per wallet per UTC day. A creator earns none on their own coin. Finishing pays on top.
| Launch a coin | 300 and 1,000, then 500, then 5,000 | 300 once others have put 2 SOL into your coin's curve and 1,000 once 10 SOL, the week you launched it (your own buys don't count); 500 the week the coin first reaches its final stretch; 5,000 the week it graduates. |
| Win a request | 5,000 | To the creator of the winning coin, the week it wins. |
| Fund a bounty | 500 per SOL | The week its coin graduates, for the share of your contribution that went to finishers other than you. |
| Trade | 10 per SOL | Every trade on a Corium coin, up to 300 DUST per wallet per UTC day. A coin’s creator earns none for trading their own coin. |
| Referrals | 10% of theirs | Of each referral’s DUST that week, capped at 5,000 a week in total, and only in weeks the referral traded or did something on chain (referrals since 21 October 2026). Never taken from the referral. [Referrals →](/earn/referrals) |
| Conviction | 1,000 per SOL | SOL bought under a quarter of a Corium coin’s curve, times the share of those tokens still held when it graduates, the week it graduates. A coin’s creator earns none on their own coin. On-chain DUST. |
| Today’s twenty, crates, badges | See [Today’s twenty](/earn/play) | Twenty on-chain achievements a day, a crate on the first buy of each coin each day (up to ten), and ten one-time badges. Read from the chain alone. Community-board DUST: it does not count in the hunters’ pool, and it does not use the free weekly cap. |
| Genesis | 500 once per token, then 100 a week | A Seeker or Saga Genesis Token in a wallet on the account: the bonus once per token (by mint, whichever of the owner’s wallets holds it), the weekly grant every week the account opens its campaign, eligibility for free DUST without a follower count, and ×1.25 weight on on-chain DUST in the hunters’ pool. |
| Free DUST | See [Free DUST](/earn/dust#free-dust) | Welcome bonus 250 and one-time quests (connecting X or Discord 200 each, the Telegram bot 150, the Telegram group and alerts channel 100 each, following @corium_so and @corium_bounties on X 75 each), once per account; a post about Corium on X mentioning @corium_so, 150 a week; a daily star (20 to 500, times the streak, up to ×2) and three daily quests (30 each), together at most 1,500 a week; 150 per friend brought, at most 3,000 a week. Only with an eligible X or Discord account on yours, and each grant once per account and per identity. |

Linked wallets are one account: their DUST adds up, and the account’s caps apply once. Corium’s own wallets are excluded from the board.

### Badges

Some accounts carry a badge next to their name: **EARLY** (an early adopter), **SEEKER** or **SAGA** (a Genesis token), and badges Corium gives for things that don’t happen on chain, such as helping early, running an event or finding a bug. Hover a badge, or tap it in the app, to see what it means. A badge can give:

- **DUST once** or **DUST every week**, paid when you open Corium, like the early adopters’ 100. It counts on the community board.
- **A weight in the hunters’ pool** on your on-chain DUST. It multiplies with your hunter rank and a Genesis token, and all of them together stop at **×1.5**.
- **Extra draw tickets**, in any week you hold at least one ticket of your own.

Badges never touch on-chain DUST itself, and an account that farms or abuses the board can be taken off it.

## The week

- A week runs from **Monday 00:00 UTC to the next Monday**. When it closes, its board is frozen exactly as it stands and the next starts at zero.
- **Season 1** began on **Friday 2 October 2026**, so its first week runs ten days, to Monday 12 October. Every week after runs Monday to Monday.
- A **season** is four weeks, and the next begins the moment one ends. Lifetime DUST and ranks add up across every week and season.

## The pools

Two pools a week, each the larger of a floor and a share of Corium’s fees:

```
hunters’ pool   = max(3 SOL,   25% × Corium’s fees that week)
weekly draws    = 30% × the hunters’ pool, on top of it
community pool  = max(1.5 SOL, 10% × Corium’s fees that week)
```

The **hunters’ pool** is split by **on-chain DUST alone**: finishing, stretch buys, launches, bounties, requests and conviction. The **community pool** is the board as a whole: every kind of DUST, including free DUST and referrals. Corium’s fees are its share of curve trading fees on every coin plus the fees its locked pool positions earned that week; the floors are paid from the treasury when fees don’t cover them. Both pools land in one payout, to the same wallet. The shares are set per season and said here when they change.

## The split

1. **Qualify:** at least **1,000 DUST** that week, of which at least **500 earned** (finishing, launching, requests, bounties and free DUST). Trading DUST and the 10% referral share count toward your payout, but not toward the 500.
2. **Top 20:** the 20 qualifying accounts with the most DUST. An account that doesn’t qualify takes no place: the next qualifying one moves up.
3. **Pro rata:** each gets `pool × their DUST ÷ the top 20’s DUST`, capped as below.
4. **Cap:** no account takes more than **30%** of the community pool; what a capped account can’t take is shared among the rest. With three or fewer qualifying, 30% each can’t add up to the whole pool, so the cap rises to an equal share (a third, a half, all of it): **a pool is always paid out in full, never left over.**

**The hunters’ pool** is split separately, and the draws come on top of it:

- **All of it** goes to everyone with at least **100 on-chain DUST** that week, strictly pro rata by on-chain DUST, with **no cap**: on-chain DUST is SOL spent on stretches, launches and bounties, so the more you hunt, the more you take. On-chain DUST is weighted by your [hunter rank](/earn/play#hunter-ranks) (up to ×1.25) and a Genesis token (×1.25), together at most ×1.5, with any [badge](#badges) weight inside that limit.
- **On top of it, 30% more** is paid as **ten draws** by tickets: one per coin a day you buy 0.05 SOL or more of and hold that day, up to ten a day. Ten different accounts are drawn when the week closes, from a Solana blockhash kept with the week. With fewer ticket holders than ten, each holder wins once. The draws never take from what the hunters split. [Weekly draws →](/earn/play#weekly-draws)

Free DUST, play DUST and referral DUST don’t count toward it.

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
| Fake referrals | The referrals’ own activity | 50 a head until each referral trades; capped at 5,000 a week; can’t qualify you |
| Farm free DUST with many accounts | An aged X or Discord account each | Only eligible accounts earn it, each identity once; daily DUST is capped at 1,500 a week; payouts are checked by hand |

In weeks the fees drive the pool, it grows by about 0.00005 SOL per trading DUST, while a trading DUST costs about 0.0005 SOL in fees: volume farming loses ten to one.

## Ranks

Lifetime DUST (every week of every season, linked wallets included) sets a rank: Drifter 0, Ember 500, Kindler 2,500, Stoker 8,000, Forgehand 20,000, Starwright 50,000, Novabound 120,000, Heliarch 300,000, Singularity 750,000. Ranks never go down.

::: info What’s on chain and what isn’t
DUST is computed by Corium’s server from on-chain activity, and the weekly payouts are sent by hand from the treasury. Unlike bounties and prizes, the pool isn’t held by the program: it’s a promise from Corium, not something the chain enforces.
:::
