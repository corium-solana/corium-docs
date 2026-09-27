# Trading

## On the bonding curve

Until it graduates, every coin trades against its own **bonding curve** (Meteora DBC). There is no order book and no counterparty: you buy from the curve and sell back into it.

- **Buying** puts SOL into the curve and pushes the price up.
- **Selling** takes SOL out and pushes it down.
- The **market cap** shown is price × total supply, in dollars at the live SOL price.
- The **curve bar** shows how much SOL is in the curve out of the 85 SOL it takes to graduate.

Every trade pays a **1% fee** (50% in the first 60 seconds after launch, decaying to 1%). [Where it goes →](/rules/fees)

## The trade panel

| | |
|---|---|
| Buy | Enter SOL, or pick 0.1, 0.5, 1 or 5 SOL |
| Sell | Enter tokens, or pick 25%, 50%, 75% or Max of your bag |
| You receive | The quote, after fees and price impact |
| Price impact | How far your own trade moves the price |
| Slippage | 1%, 5% or 10%. If the price moves more than this before your trade lands, it fails instead of filling at a worse price. |

Selling Max sells your exact balance, so nothing is left behind as dust.

## The chart and terminal mode

The chart shows **market cap or price**, in **USD or SOL**, in candles from **1 second to 4 hours**, with volume underneath. Arrows mark the **dev's** trades and **yours**; dashed lines mark the **final stretch** and **supernova** levels. Hover a candle for its open, high, low, close and volume.

**Terminal mode** (the ⛶ button, or <kbd>F</kbd>) turns the coin page into a full-screen trading terminal: a big chart, the star small beside the trade panel, trades and chat underneath, and a strip of coins across the top (your watchlist, coins you opened lately, then the hottest). Switch coins with <kbd>[</kbd> and <kbd>]</kbd>, search with <kbd>/</kbd>, leave with <kbd>Esc</kbd>. It stays on until you turn it off.

## Trading from Telegram

The [Corium bot](/guide/telegram) puts **Buy** and **Sell** buttons on its alerts, and `/buy HDOG 0.5` or `/sell HDOG 50` makes one for any coin. A button opens the coin in Phantom or Solflare with the trade already filled in; you check it and approve it in your wallet. The bot never trades by itself and never has your keys.

## Near the top of the curve

A buy bigger than the room left before 85 SOL is **filled partially**: you get tokens up to the graduation price, and the rest of your SOL stays in your wallet. The trade panel tells you in advance when this will happen and how much comes back.

## Graduation

When the curve reaches 85 SOL, the coin **graduates**:

1. Its star goes **supernova**, live on every screen that shows it.
2. Its liquidity (the SOL in the curve and 20% of the supply) moves into a **Meteora DAMM v2** pool, **locked forever**: nobody can pull it.
3. The final-stretch buyers who hold through the next 10 minutes split the [supernova bounty](/rules/bounty).

Migration usually lands within moments of graduation. While it runs, the coin page shows *Moving to Meteora*.

## After graduation

You keep trading the coin on Corium, now against its DAMM v2 pool. The trade panel says which venue you are on. The pool charges a 1% fee that goes to its liquidity, which the creator and Corium own 50/50 and can never withdraw.

## Your positions

**Portfolio** shows your coins with their value and profit, your bounties (pending in a final stretch, or ready to claim), the coins you launched, and your trade history. Profit is measured against your average cost.

::: warning Know what you're buying
Anyone can launch a coin. A coin on Corium is not endorsed by Corium, and most memecoins go to zero. Check the creator's trades, the holder list and the socials before you buy.
:::

**Next:** [Stars →](/guide/stars)
