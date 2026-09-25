# Supernova bounty

Every coin carries a bounty. When the coin graduates, the bounty is split between the wallets that **bought its final stretch** and **still held** shortly after graduation.

## Where the bounty comes from

Every trade on the curve pays a 1% fee. After Meteora's share and the creator's share, the rest is Corium's. **Half of Corium's share on a coin is that coin's bounty**, for the coin's whole life on the curve, from its first trade to graduation. That comes to about **0.25% of all curve volume**.

The split is enforced by the Corium program: every time Corium's fees are claimed from a coin's pool, half goes straight into that coin's **escrow**, in the same transaction. Nobody holds bounty money in a wallet. [How the fee router works →](/rules/fee-router)

The bounty shown on a coin page is the escrow so far, plus half of the fees still waiting in the pool.

## The final stretch

The final stretch is the **last 10% of the curve**: from 76.5 SOL to 85 SOL. The coin's star turns **critical** when it enters.

## Scoring

Each wallet's score is its **net SOL into the final stretch**:

- **A buy** earns credit for the SOL it put in *above* the stretch line. A buy that starts at 70 SOL and ends at 80 SOL earns credit for the part from 76.5 to 80 SOL only.
- **A sell** made while the curve is in the stretch takes its SOL back out of the seller's credit. Sell as much as you bought and your credit is gone.
- Credit is linear in SOL, so splitting a buy across several wallets gains nothing.

### The hold check

**10 minutes after graduation**, each scoring wallet's balance of the coin is checked. Your credit is scaled by the share of your stretch tokens you still hold:

`score = stretch credit × min(1, tokens held ÷ stretch tokens bought)`

Hold everything and you keep your full credit. Sell or move half and you keep half. Dump everything at graduation and you score nothing.

## The payout

The escrow is split **pro rata by score**, in lamports, rounded down. The few lamports of rounding go to the top score, so the payout adds up to **exactly** the escrow; the program refuses anything else.

The scores, each wallet's amount and its merkle proof are published to IPFS with every payout, and the scoring code is public. Anyone can recompute a payout from chain data and check it against what was posted. [Verifying a payout →](/rules/program#verifying-a-payout)

## Claiming

Your bounty shows in **Portfolio → Bounties** and on the coin page. It is *settling* until the payout is posted, shortly after the 10-minute hold check, then **Claim** sends it to your wallet.

| | |
|---|---|
| Claim window | 30 days from the payout |
| After the window | Whatever nobody claimed goes to the Corium treasury. Anyone can trigger that. |
| Nobody held | If no wallet scores, no payout is posted. 30 days after graduation, anyone can release the escrow to the treasury. |

## Coins that never graduate

A coin's escrow stays in the program until the coin graduates. A coin that collapses into a black hole keeps its escrow: if one buy revives it and it later graduates, its bounty is still there.

::: info What stays off chain
The program enforces where the money is, how much a payout is, and that it can only be posted after graduation. **Who** wins is scored off chain by the Corium crank. That scoring is public and checkable, and the crank can only split a coin's escrow between wallets; it cannot take any of it.
:::
