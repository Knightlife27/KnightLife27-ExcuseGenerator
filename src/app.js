/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function createExcuse() {
  // Who they are
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  // What they did
  let action = ["ate", "peed", "crushed", "broke"];
  // What are we avoiding
  let what = ["my homework", "the keys", "the car"];
  // When
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const partOne = who[Math.floor(Math.random() * who.length)];

  const partTwo = action[Math.floor(Math.random() * action.length)];

  const partThree = what[Math.floor(Math.random() * what.length)];

  const partFour = when[Math.floor(Math.random() * when.length)];

  let completeSentence = `${partOne} ${partTwo} ${partThree} ${partFour}`;

  return completeSentence;
}

document.getElementById("excuse").innerHTML = createExcuse();
