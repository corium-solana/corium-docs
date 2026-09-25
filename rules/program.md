# Program reference

## Addresses

::: info Mainnet addresses at launch
The launchpad runs on Solana devnet while it's being tested. The mainnet program, config and treasury addresses will be listed here at launch. Don't trust a mainnet address for the Corium launchpad from anywhere else.
:::

### Devnet

| | |
|---|---|
| Corium program (`corium_launch`) | `NovanpiewpH4zvYgtzAQN2zWQ94KcKWrHCTswWdZ1Y1` |
| Corium config (Meteora DBC) | `7QjxUbrRoZCJA4zX2wLcZMBMJikckzZsD5GrbQRKuHZS` |
| Fee claimer (the Corium vault) | `HdtdnxH8mqD4UhSKsA1gueo89DYNsc9QaoAXqWoZaodb` |
| Graduates at | 5 SOL (a test config; mainnet graduates at 85 SOL) |

### Meteora programs (same on mainnet and devnet)

| | |
|---|---|
| Dynamic Bonding Curve | `dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN` |
| DAMM v2 | `cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG` |

## The coin config

One Meteora DBC config for every coin:

| | |
|---|---|
| Quote | SOL |
| Supply | 1,000,000,000, 6 decimals, immutable mint and metadata |
| Migration threshold | 85 SOL (quote reserve) |
| Supply into the pool at migration | 20% |
| Base fee | 1%; exponential scheduler from 50% to 1% over 60 × 1 s periods |
| First buy by the creator | Pays the minimum fee |
| Fee split | 37% of the partner + creator share to the creator |
| Fee claimer | The Corium vault |
| Migrates to | DAMM v2, 1% fee, liquidity 50% creator / 50% Corium, all permanently locked |

## Accounts

All addresses are PDAs of the Corium program:

| Account | Seeds | Holds |
|---|---|---|
| `Config` | `["config"]` | Admin, crank, treasury, claim window |
| Vault | `["vault"]` | SOL for escrows and payouts; the DBC fee claimer; owner of Corium's DAMM v2 positions |
| `Route` | `["route", dbc_config]` | The config's bounty share in basis points (5000), fixed forever |
| `Bounty` | `["bounty", pool]` | A coin's escrow: `accrued` (lamports), `fees` (all partner fees claimed), `distributed` |
| `Distribution` | `["dist", pool]` | A posted payout: root, total, claimed, expiry, the IPFS URI of its scores |
| `ClaimRecord` | `["claim", distribution, wallet]` | Exists once a wallet has claimed |

## Instructions

| Instruction | Signer | Does |
|---|---|---|
| `initialize` | Upgrade authority, once | Sets admin, crank, treasury, claim window |
| `set_crank`, `set_treasury` | Admin | Rotate those addresses |
| `create_route` | Admin, once per config | Registers a DBC config and its bounty share |
| `claim_fees` | Anyone | Claims a pool's partner fees; route share to its escrow, the rest to the treasury |
| `create_distribution` | Crank | Posts a graduated coin's merkle root for exactly its escrow |
| `claim` | Winner | Pays a proven amount |
| `sweep_expired` | Anyone | After the window: unclaimed rest to the treasury |
| `release_bounty` | Anyone | No payout within the window after graduation: escrow to the treasury |
| `claim_lp_fees` | Anyone | DAMM v2 position fees to the treasury's token accounts |
| `claim_surplus` | Anyone | Curve surplus to the treasury's token account |

## Verifying a payout

Every `Distribution` carries the URI of a JSON report with each winner's stretch credit, stretch tokens, balance at the hold check, score, amount and merkle proof. To check one:

1. Fetch every swap on the coin's pool, oldest first, and score the final stretch with the rules on [the bounty page](/rules/bounty#scoring).
2. Read each scoring wallet's balance at the hold check, and scale its credit.
3. Split the `Bounty` escrow pro rata by score, rounding down, with the rounding dust to the top score.
4. Build the tree and compare its root with the one on chain.

The tree:

```
leaf = sha256("corium:leaf" ‖ distribution ‖ wallet ‖ amount as u64 little-endian)
node = sha256("corium:node" ‖ min(a, b) ‖ max(a, b))
```

The distinct prefixes keep an inner node from ever passing as a leaf, and sorting each pair means a proof is just the list of sibling hashes.
