# Play Cribbage Hand

Simulate and analyze the play of cribbage hands between two opponents.

## Setup

- Install Python 3.9.0
- `pip install -r requirements.txt` _(may require local admin to install black globally... or use a [virtualenv](https://virtualenv.pypa.io/en/latest/) instead!)_

## Test

- Check for type errors - should only find one about `runstats` module not having type hints: `mypy simulateCribbageGames.py`

## Use

- Simulate one hand from deal to end of hand counting: `python simulateCribbageGames.py`
- Help on additional simulation options: `python simulateCribbageGames.py --help`

## Smoke Tests and Usage Examples

All of the following should exit with status code 0 and no raised exception:

- Simulate play of 10 reasonably well discarded and played hand pairs: `python simulateCribbageGames.py --game-count 10`;
- Simulate and summarize play of 5,000 reasonably well discarded and played hand pairs: `python simulateCribbageGames.py --game-count 5000 --hide-pone-hand --hide-dealer-hand --hide-play-actions`;
- Simulate a fixed pone hand and discard against random reasonably well discarded and played dealer hands: `python simulateCribbageGames.py --pone-dealt-cards AC,2D,3H,4S,5C,6D --pone-kept-cards 2D,3H,4S,5C --hide-pone-hand --hide-dealer-hand --hide-play-actions --game-count 5000`;
- Simulate a fixed pone hand and discard against random reasonably discarded and played dealer hands with two parallel processes: `python simulateCribbageGames.py --pone-dealt-cards AC,2D,3H,4S,5C,6D --pone-kept-cards 2D,3H,4S,5C --hide-pone-hand --hide-dealer-hand --hide-play-actions --game-count 5000 --process-count 2`;
- Simulate to the end of single hand play a fixed dealer hand and discard against random pone hands: `python simulateCribbageGames.py --dealer-dealt-cards AC,2D,3H,4S,5C,6D --dealer-kept-cards AC,2D,3H,4S --hide-pone-hand --hide-dealer-hand --hide-play-actions --game-count 5000`;
- Simulate all possible discards from a fixed pone hand against random dealer hands: `python simulateCribbageGames.py --pone-dealt-cards AC,2D,3H,4S,5C,6D --pone-select-each-possible-kept-hand --hide-pone-hand --hide-dealer-hand --hide-play-actions --games-per-update 10000 --game-count 10000`;
- Simulate all possible discards from a fixed dealer hand against random pone hands: `python simulateCribbageGames.py --dealer-dealt-cards AC,2D,3H,4S,5C,6D --dealer-select-each-possible-kept-hand --hide-pone-hand --hide-dealer-hand --hide-play-actions --games-per-update 10000 --game-count 10000`;
- Simulate all possible discards from a fixed dealer hand against random pone hands at a greater than 0-0 game score: `python simulateCribbageGames.py --dealer-dealt-cards JH,TS,6S,6C,4C,AD --dealer-select-each-possible-kept-hand --initial-pone-score 105 --initial-dealer-score 117 --hide-pone-hand --hide-dealer-hand --hide-play-actions --game-count 20000`;
- Simulate all possible leads from a fixed pone hand and discard against random dealer hands: `python simulateCribbageGames.py --pone-dealt-cards JH,TS,6S,6C,4C,AD --pone-kept-cards TS,6S,4C,AD --select-each-post-initial-play --hide-pone-hand --hide-dealer-hand --hide-play-actions --game-count 30000`;
- Simulate all possible pone plays from a mid-play position against partly known dealer hands: `python simulateCribbageGames.py --pone-dealt-cards KC,QD,TC,8S,4D,AH --pone-kept-cards QD,TC,4D,AH --dealer-dealt-cards 8H --initial-played-cards 4D,8H --select-each-post-initial-play --hide-pone-hand --hide-dealer-hand --hide-play-actions --game-count 20000`;
- Simulate all possible dealer plays from a mid-play position against partly known pone and fully known dealer hands: `python simulateCribbageGames.py --dealer-dealt-cards 8C,4D,TH,9S,KC,KD --dealer-kept-cards 8C,4D,TH,9S --pone-dealt-cards 4C --initial-played-cards 4C --select-each-post-initial-play --hide-pone-hand --hide-dealer-hand --hide-play-actions --game-count 20000`; and
- Simulate from late in the third leg all possible dealer discards to end of game against reasonable opponent play: `python simulateCribbageGames.py --dealer-dealt-cards AC,2S,6C,TD,JD,KC --dealer-select-each-possible-kept-hand --hide-pone-hand --hide-dealer-hand --hide-play-actions --unlimited-hands-per-game --infinite-game-count --initial-pone-score 87 --initial-dealer-score 85`.


## Long-term project goal

Provide efficient discard and play analysis factoring
in the expected game points differential (and play points differential if no game points differential) to end of hand(s) or game above opponent
for different possible discards or plays.

## Current short to medium term goals

- Add play decision analysis support by allowing the set of the initial simulation state to all post-discard, post-initial play states and then simulating all possible next plays to the end of the hand (or multiple hands);
- Increase confidence in implementation by adding further type hints (Python), type checking and unit tests.

## Past project goals

- Add multiple played hands or played hands to end of game simulation support.
- Add play decision analysis support by allowing the set of the initial simulation state to a post-discard, start or middle of first play to 31 state and then simulating all possible initial plays to the end of the hand (or multiple hands).
- Provide efficient discard and play analysis factoring
  in the expected play points differential - to end of hand - above opponent
  for different possible discards or plays. (Extended to multi-hand or end of game with _game_ points differential also added as ultimate goal is winning - scored hand/play points is just a proxy for ultimately scored _game_ points.)
- Add endgame analysis support by allowing the initial simulation score to be set to non-zero and recording win percentages to end of hand (or multiple hands);
- Improve realism and usefulness/credibility of simulated discards by adding higher-scoring discard and play strategy options; and
- Select best language with which to implement this
  given the longer term goal of providing discard and play analysis factoring
  in the expected play points differential - to end of hand - above opponent
  for different possible discards or plays. (_Result:_ decided to go with Python to start then reimplement in Node.js when and/or if reimplementation cost is less than the time spent waiting for Python-based simulations to complete.)

## Technology stack

### Currently tested project toolchain versions

#### Main implementation

- Python 3.9.0

#### Backup, partial implementation

- Node.js 14.5.0

#### Prototype benchmarking implementations

- Java OpenJDK 14.0.1,
- GCC 8.1.0 (non-parallel),
- GCC 10.2.0 (parallel),
- C#.NET Core 3.1.302.
