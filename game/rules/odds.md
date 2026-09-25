# Odds & payouts

## Feeds never kill

While the star is under 1 SOL, every send is a feed. A feed has a nova threshold of zero, so it can never kill the star.

## The nova roll

For a last-hit push, once its mass has been absorbed:

1. `roll_ppb = sha256("soldust:roll" ‖ round.randomness ‖ push_id)[..16] mod 1_000_000_000`
2. `threshold_ppb = amount / (mass_before + amount)`: your stake's share of the mass it just created
3. The push is **lethal** if `threshold > 0` and `roll < threshold`

There is no base rate, no stage table, no compounding, and no cap. The chance is the ratio. It is computed at **settle** time from settled mass, so a queue that moves under you can't change what your push is worth.

### Examples

| Push | Into a star of | Chance |
|---|---|---|
| 0.01 SOL | 1 SOL | 0.99% |
| 1 SOL | 9 SOL | 10% |
| 20 SOL | 1 SOL | 95.2% |

The biggest chance available at mass `M` is `(21 − M) ÷ 21`, because the biggest legal push is the room left before 21 SOL. One-shots are cheap on a young star (95% at 1 SOL) and near-impossible next to the hole (4.8% at 20 SOL).

## The winner

The pusher who lands the lethal roll becomes the star's `killer`. Their `final_prize` is the whole prize pool, and they call `claim_prize` once to collect it.

## Why the ratio is the only fair curve

A kill pays `prize_pool`, measured after your push lands, and `prize_pool` is exactly 96.86% of mass. So:

```
EV = [a / (M + a)] × 0.9686 × (M + a) = 0.9686 × a
```

The `(M + a)` cancels. **Every push returns exactly 96.86% of its stake**, whether it's 0.01 SOL or 20 SOL, on a 1 SOL star or a 20 SOL one, at any stage. The 3.14% fee is the only edge in the game.

## Why the hole is 1 in 21

Surviving one push has probability `M / (M + a)`, so surviving a run of them telescopes:

```
M0/M1 × M1/M2 × … × M(n-1)/Mn  =  M0 / Mn
```

Star mass is a martingale. A star therefore travels from the 1 SOL nursery cap to the 21 SOL hole exactly `1/21` = **4.76%** of the time, however many people pushed and however big their pushes were.

Nursery feeders are taking fair 21:1 odds on that, which returns them the same 96.86%. Feeders and pushers sit on one book by construction, not by tuning.
