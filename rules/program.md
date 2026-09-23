# Program reference

| | |
|---|---|
| Program ID | `CoriumcqGZW3cdnAiyWz6jHHveMUmdrw9RC1KXfMsF8S` |
| Network | Solana mainnet |
| Framework | Anchor |
| Randomness | MagicBlock VRF |
| Source | [github.com/corium-solana/corium-core](https://github.com/corium-solana/corium-core) |

All game numbers are compiled into the program. The on-chain `Config` account stores **no tunables at all**, only accounting and the treasury address, so there's nothing an admin could point at. A live star copies its lifecycle at birth.

## Instructions

| Instruction | Who signs | What it does |
|---|---|---|
| `feed` | Player | Nursery send. |
| `request_push` | Player | Escrow the stake and join the star's open round. No oracle, no prepayment. |
| `draw_round` | Anyone (crank) | Seal a round to new entrants, derive its seed, and request its one VRF draw, all in one transaction. Paid from `protocol_accrued`, and the caller is reimbursed in the same transaction. |
| `consume_randomness` | MagicBlock VRF only | The oracle's callback. Writes the draw onto the round. Only the identity the VRF program signs for, scoped to this program, can call it. |
| `expire_round` | Anyone | Void a round that has stalled past the timeout, so its members can be refunded. Refuses if the draw has already landed. |
| `resolve_push` | Anyone | Settle or refund the next pending push. |
| `close_push` | Fee payer | Close a finished pending account. Rent goes to the player. |
| `close_round_account` | Anyone | Close a round whose members have all resolved. Rent goes to whoever opened it. |
| `claim_prize` | The star's killer | Pay out `final_prize` on a dead star, once. |
| `claim_hole_share` | Feeder | Pay out that wallet's share on a black-hole or stalled star, once. |
| `collapse_stalled_star` | Anyone | Finish a star that has gone 7 days without gaining mass (24 hours in the nursery) with nothing queued. |
| `create_next_star` | Anyone | Start the next star once the current one is dead, a black hole, stalled, or has 21 SOL committed. |
| `create_first_star` | Anyone | Once, after `initialize`. |
| `fund_protocol` | Anyone | One-way donation into `protocol_accrued`. Needed once at genesis: the fee can't accrue until a push settles, and a push can't settle until a draw has been paid for. |
| `withdraw_protocol_fees` | Anyone | Move accrued protocol SOL to the treasury that was fixed at launch. |

## No admin, and no pause

`initialize` runs once, at deploy, and records nothing but the treasury and the genesis seed. There's no `update_config`, no `set_authority`, and no pause. They aren't disabled; they don't exist.

`initialize` is also the only gated instruction: it must be signed by the program's upgrade authority. That isn't an admin power. It stops whoever front-runs the deploy transaction from claiming the treasury, and it's used up the first time it runs.

Everything except `feed`, `request_push` and the two claims is **permissionless bookkeeping**. None of it can be withheld from you: if our crank stops, anyone can run those instructions and the queue keeps draining.

## What is not on-chain

History, the archive, leaderboards, chat, profiles, these docs, and the HUD are the **interface**. Claims and sends are the **program**.
