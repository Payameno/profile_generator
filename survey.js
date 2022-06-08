const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log(`Your Name is: ${answer}`);

  rl.question("What's an activity you like doing?", (answer2) => {
    console.log(`Your Favorite activity is: ${answer2}`);

    rl.question("What do you listen to while doing that?", (answer3) => {
      console.log(`You listen to ${answer3} doing your favorite activity`);

      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        (answer4) => {
          console.log(`Your favorite meal is ${answer4}`);

          rl.question(
            "What's your favourite thing to eat for that meal?",
            (answer5) => {
              console.log(`Your favorite thing to eat is ${answer5}`);

              rl.question(
                "Which sport is your absolute favourite?",
                (answer6) => {
                  console.log(`Your favorite sport is ${answer6}`);

                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!?",
                    (answer7) => {
                      console.log(`Your super power is ${answer7}`);

                      setTimeout(() => {
                        console.log(`${answer} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
                      }, 1000);

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
