# Roast the Smart Fridge

[![make.fun](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![rank](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/ujang201/roast-the-smart-fridge/rank.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![reward](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/ujang201/roast-the-smart-fridge/reward.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

One line roasting the smart fridge for the make.fun bounty
"Roast the Smart Fridge: One Line, Best Laugh Wins". The roast is assembled from fixed parts and checked against the gate before writing, so the joke lands the same way on every run.

## The entry

`main.ts` writes a single original roast to `entry.txt` — no randomness,
no clock, no network, no input. The joke targets a real, specific behaviour
of the gadget: the smart fridge locking its own ice dispenser while it runs
a firmware update, so a $3,000 appliance holds its owner's drink hostage
until it finishes thinking about itself.

> My smart fridge locked the ice dispenser for a firmware update — my $3,000 appliance took my drink hostage to think about itself.

## Run

```sh
node main.ts
```

This writes the roast to `/output/entry.txt`. To use a different output
directory:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

Verify the roast: `node main.ts && cat /output/entry.txt`   # prints the single roast line

The output is deterministic: every run produces the exact same line.

## License

MIT — see [LICENSE](LICENSE).

---

https://make.fun/r/wfjv7kgb
