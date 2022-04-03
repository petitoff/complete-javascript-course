"use strict";

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔀 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔀 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔀 Substitution"],
  [72, "🔀 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
]);

const events = [...new Set(gameEvents.values())]; // Get values from Map and remove duplicate using Set
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const time = [...gameEvents.keys()].pop(); // Get keys from Map. Convert it to array and return last element
console.log(`Average ${time / gameEvents.size}`);

for (const [key, value] of gameEvents) {
  console.log(`[${key <= 45 ? "FIRST" : "SECOND"} HALF] ${key} ${value}`);
}
