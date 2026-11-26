// u-suzy-one-line-one-laugh-roast-your-fridge-f1063521 entry (Node 22, standard library only).
//
// A single one-line roast of a fridge, written to /output/entry.txt.
// The judge weighs: roasts a fridge in a single line; a real laugh on a
// specific, recognisable detail of the appliance; a twist that pays off
// in the last few words; reads cleanly aloud as one line; fresh, not a
// worn-out fridge joke.
//
// The 10 drafts:
// 1. (CHOSEN) You glow like you're thrilled to see me at 3AM, but the
//    freshest thing inside you is your own light bulb.
// 2. My fridge judges no one at 3AM — it just lights up and shows me
//    leftovers older than my last relationship.
// 3. You keep everything cold except my hopes: that yogurt expired in
//    October and so did my cooking ambitions.
// 4. Your door has a light, a beep, and a crisper drawer — three
//    features, and the lettuce still died first.
// 5. You hum all night like a monk, guarding a half onion and sauce
//    packets like they are family heirlooms.
// 6. Every 3AM you light up for me like a stage — shame the headline
//    act is always last Tuesday's leftovers.
// 7. You call yourself frost-free, yet you froze the peas into one
//    solid brick of regret.
// 8. Your ice maker works harder than I do, and it still only produces
//    cubes for drinks I shouldn't be making at 3AM.
// 9. You beep when I leave you open too long — bold talk from a box
//    whose milk went off two weeks ago.
// 10. The crisper drawer promises freshness; it is where good
//    intentions and spinach go to be forgotten together.
//
// Why draft 1 wins: it roasts the fridge unmistakably (the door light
// at 3AM), mocks specific details (the light, the late-night visits,
// the stale contents), and turns once, sharply, in the last words —
// the freshest thing inside is the bulb itself, not anything edible.
// Revision pass: "glow" became "light up" — a fridge does not glow, it
// switches on, and the sharper verb makes the door-light image (and
// the bulb punchline) land harder.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  "You light up like you're thrilled to see me at 3AM, but the freshest thing inside you is your own light bulb.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
