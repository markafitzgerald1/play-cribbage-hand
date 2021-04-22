/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from "react";
import PlayToInfiniteCount from "../cribbage/PlayToInfiniteCount";
import PlayedCard from "./PlayedCard";

const PlayedCards: React.FunctionComponent<{
  playToInfiniteCount: PlayToInfiniteCount;
}> = (props): JSX.Element => (
  <div>
    <h2>The Play</h2>
    <h3>
      Count ={" "}
      {props.playToInfiniteCount.cards
        .map((card) => card.index.count)
        .reduce((prevCount, currCount) => prevCount + currCount, 0)}
    </h3>
    <ul>
      {props.playToInfiniteCount.cards.map((card) => (
        <PlayedCard card={card} key={card.toString()}></PlayedCard>
      ))}
    </ul>
  </div>
);

export default PlayedCards;
