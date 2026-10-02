# Finish links & Blinks

<p class="lede">A finish link is one URL that lets anyone buy a coin’s final stretch from wherever you post it. On a phone it opens in their wallet; on X it can show up as a Blink with buy buttons right in the post.</p>

## The link

Every coin with a bounty, and every entry in a request, has a finish link:

```
corium.so/f/<coin, bounty or request>
```

Get it with **Copy finish link** on a bounty card, or share the coin page. The page shows the coin, its curve, the bounties on it and three buy buttons: **0.1**, **0.5** and **1 SOL**, or any amount.

- **On a phone**, outside a wallet app, it offers to open itself in **Phantom** or **Solflare**, where you sign the buy.
- **On a desktop** with a wallet extension, it works like any page on corium.so.
- **For pump.fun coins** the buy is the [finishing buy](/earn/bounties#finish-one): pump.fun’s own buy, with the part past the 90% line recorded and locked until an hour after graduation.
- **For a request**, `?coin=<entry>` on the end picks one of its entries.
- **`?amount=0.5`** pre-fills the amount, and **`?r=yourcode`** adds your [referral](/earn/referrals).

## Blinks

Corium serves [Solana Actions](https://solana.com/docs/advanced/actions), so wallets and apps that support **Blinks** turn a finish link into a card with buy buttons, inline, wherever it’s posted: on X with Phantom, Backpack or Dialect’s extension, and anywhere else that unfurls Actions.

| Shared link | Unfurls as |
|---|---|
| `corium.so/f/<id>` | The finish card: a coin and its bounties, or a request’s leading entries |
| `corium.so/coin/<mint>` | One coin, Corium or pump.fun |
| `corium.so/request/<id>` | A request’s leading entries |

The mapping is published at `corium.so/actions.json`.

A Blink builds the same transaction as the finish page; your wallet shows it in full before you approve.

## Telegram

In the [Corium bot](/guide/telegram), `/finish HDOG` (a ticker) or `/finish <pump.fun link>` answers with the coin’s curve, its bounties, and buttons that open its finish page in your wallet with the amount filled in.

::: tip Links never trade on their own
A finish link, a Blink or a Telegram button only builds a transaction. Nothing happens until you approve it in your own wallet, and Corium never sees your keys.
:::
