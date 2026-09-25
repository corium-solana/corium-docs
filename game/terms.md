# Corium Game: terms of use

**Version 16.** This page mirrors the terms you agree to when you sign in at [corium.so](https://www.corium.so). The in-app version is authoritative.

CORIUM is a game of chance. You send SOL. You can lose it. This site is only the board: the program decides every outcome.

**Program:** `CoriumcqGZW3cdnAiyWz6jHHveMUmdrw9RC1KXfMsF8S`

## Odds

These are compiled into the program. Under 1 SOL, a send can't explode. From 1 SOL, your chance to go nova is your own share of the mass your push creates: amount ÷ (star + amount). 0.01 SOL at a 1 SOL star is about 1%; 20 SOL at a 1 SOL star is about 95%. There is no cap and no minimum beyond 0.01 SOL, and every push must be a whole multiple of 0.01 SOL. Because a kill pays 96.86% of that same mass, every push is worth 96.86% of what you sent, whatever its size. If the star reaches 21 SOL without a nova, it collapses, and early feeds split the pot instead of a last hit. Over many stars, that happens 1 time in 21.

## Split

96.86% of a settled send goes to the prize. 3.14% goes to the protocol. Dust is a score, not money. If the star dies before your last hit settles, that SOL is refunded.

## Randomness

Randomness comes from an on-chain oracle (MagicBlock VRF). Pushes are grouped into short rounds and one draw is bought per round, and each push in that round derives its own independent roll from it. Your roll depends only on that draw and your own push number, so nobody (including us) can single you out. If a round's draw doesn't arrive, anyone can void that round after a fixed timeout, and every push in it is refunded. A round whose draw has already landed can't be voided, so a void can never be used to discard an unfavourable result.

## Costs

A feed is the stake plus a tiny network fee. A last hit signs the stake plus a small push-account rent that comes back when that account closes. Nothing is charged to you for randomness: pushes are grouped into rounds, one verifiable random draw is bought per round rather than per push, and the protocol pays for it out of its own fee. If the star is destroyed while your push is still queued, or if a round's draw doesn't arrive and the round is voided, your stake is refunded in full in a single transaction.

## Control

There is no admin instruction, no pause, and no number on chain that can retune the odds. Those are compiled in. The upgrade authority is held at launch, on purpose: if the oracle breaks or a post-launch audit finds something, an upgrade is the only way to get money moving again. That is the one thing you have to trust. It will be dropped to `None`. Until it is, treat the program as ours to change. The oracle's fee for a draw is set by the oracle, not us. The program pays whatever it actually charged out of the protocol's own cut, never out of your stake.

## Sign-in, age & agreement

Connecting a wallet isn't agreement, and it doesn't sign you in. To play, you sign in with your wallet: one signature, no transaction, no fee. The first time, that same signature confirms that you are **21 or older** and that you agree to these terms. Your age confirmation is recorded on its own and stays valid if these terms change. A new version of the terms is agreed at your next sign-in. A sign-in lasts up to 30 days, or 14 days without use. If you don't agree, disconnect. You can review both, or withdraw them, under **Settings**. Withdrawing signs this wallet out everywhere.

## Contact

Official contact is [@corium_so](https://x.com/corium_so) and [corium.so@proton.me](mailto:corium.so@proton.me). We will not message you first. Anyone asking for a seed phrase or a private key is not us.

How the program works in full: [Rules](/game/rules/).
