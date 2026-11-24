# One Word, First Thought

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/Krwanz/u-0xkianno-one-word-first-thought-106abaf8/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/Krwanz/u-0xkianno-one-word-first-thought-106abaf8/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)

An entry for the [One Word, First Thought](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8) bounty on [make.fun](https://make.fun).

## The entry

One word, the first that comes to mind:

> **petrichor**

The smell of rain on dry earth. Few people know the word, but everyone
knows the feeling — surprising, vivid, and with a sound that rewards a
second look. One breath of it calls up a whole summer storm: dust, heat,
and the first drops on warm ground.

## How it works

`main.ts` (Node 22) writes exactly that one word to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then
re-reads the file and verifies it against the gate: 1–24 characters,
exactly one word, not only white space. It exits non-zero if the check
fails.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt  # petrichor
```

## Play

Use referral code `a15ed58m` on make.fun.
