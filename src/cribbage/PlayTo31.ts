/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import Card from "./Card";

export default class PlayTo31 {
  static readonly MAXIMUM_PLAY_COUNT: number = 31;

  private constructor(readonly cards: readonly Card[], readonly count: number) {
    if (this.count > PlayTo31.MAXIMUM_PLAY_COUNT) {
      throw new Error(`Invalid play to 31: cards = ${cards}, count = ${count}`);
    }
  }

  static create(): PlayTo31 {
    return new PlayTo31([], 0);
  }

  add(card: Card): PlayTo31 {
    return new PlayTo31([...this.cards, card], this.count + card.index.count);
  }
}
