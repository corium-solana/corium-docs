# Refunds & safety

The short version: **the game can end, but it can't get stuck.** Stakes come back on a five-minute timer, the pot comes back on a weekly one, and neither needs us to be alive.

## Nothing can freeze

If a draw never arrives, whether from an oracle outage, a crank that dies mid-round, or a round that never gathered enough stake, **anyone** can call `expire_round` once the round has stalled for 750 slots (about five minutes).

Every member is then refunded through `resolve_push` in order, like any other resolution, with no randomness needed. The star carries on with a fresh round.

Two properties make this safe rather than exploitable:

- `expire_round` **refuses if the draw has already landed**, so it can never be used to discard an unfavourable roll.
- While a draw is pending, nobody knows its value, so voiding is always blind.

The worst case for a lone 0.01 SOL push on a dead star is a five-minute wait and a full refund. No stake is ever held without one of those two exits.

## Your queue can't be jammed

Pending pushes resolve strictly in order. The program's cursor counts refunds and nursery feeds as well as settles, so a voided round drains through the queue instead of wedging everything behind it.

If the star has already finished when your push resolves, or your round was voided, you get a **full refund**. Neither path needs the oracle.

## If the game dies

A refund isn't mass. If the oracle stopped answering for good, rounds would keep expiring and refunding, but nothing would ever roll again. The star would never die, never reach the hole, and the prize inside it would have no way out. The same thing would happen with nothing broken at all, if everyone simply stopped playing.

So **anyone** can finish a star that stops moving. Once it has gone **7 days** without gaining mass (**24 hours** if it never left the nursery), with nothing left in its queue, `collapse_stalled_star` ends it, and the pot pays out on one rule:

> Feeders get back what their own feeds put in, less the same 3.14% every push pays. Whatever is left over endows the next star.

If you fed 1 SOL into a star that then went quiet for a week, you claim 0.9686 SOL. That's not a profit: you paid the same fee a pusher pays and gave up the 21:1 hole ticket you were holding. A collapse is always *worse* for you than the star carrying on, and that's deliberate. Nobody, including us, can make money by waiting for a stall, so nobody has a reason to want one. The house takes nothing here either. The leftover is prize money, and prize money can't be withdrawn, only recycled into the next star.

A stall collapse **can't** do two things:

- It can't touch a push that still has a roll coming, because the queue has to be empty first.
- It can't reach a star anyone is playing, because the clock restarts on every push that settles and every feed that lands. Only a week of genuine silence gets there.

## Nothing is withheld from you

Everything except `feed`, `request_push` and the two claims is **permissionless bookkeeping**. If our crank stops, anyone can run those instructions and the queue keeps draining. See the [program reference](/rules/program).

## What you do have to trust

**The upgrade authority is held at launch**, and that's the one thing you have to trust. Everything else in these docs is enforced by the deployed code, but code can be replaced, so an upgrade is the one mechanism that could change any of it.

It's held on purpose, for one reason. If the oracle we depend on breaks, or a post-launch audit finds something, an upgrade is the only way to get people's money moving again. Dropping it to `None` on day one would make the program honest and also unfixable.

Today, the upgrade authority is a **Squads multisig** (`9BfEudxsWmyPP6uGHRyyMHptShK6DVufZSkYd8aaHAdx`), not a single key. The deployed program is [verified by OtterSec](https://verify.osec.io/status/CoriumcqGZW3cdnAiyWz6jHHveMUmdrw9RC1KXfMsF8S) to match the public source, so you can read exactly what is running.

It will be dropped to `None`. Until it is, treat the program as ours to change, and size your pushes accordingly.
