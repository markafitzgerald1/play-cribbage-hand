/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from "react";
import Card from "../cribbage/Card";
import Color from "../cribbage/Color";
import { PlayAction } from "../cribbage/PlayAction";
import Player from "../cribbage/Player";
import { card, redSuit, blackSuit } from "./Card.module.css";
import {
  playActionComponent,
  playedByPone,
  playedByDealer,
} from "./PlayActionComponent.module.css";

const PlayActionComponent: React.FunctionComponent<{
  playAction: PlayAction;
  player: Player;
}> = (props): JSX.Element => (
  <li
    className={`${card} ${
      props.player == Player.PONE ? playedByPone : playedByDealer
    } ${playActionComponent}${
      props.playAction instanceof Card
        ? " " +
          (props.playAction.suit.color === Color.RED ? redSuit : blackSuit)
        : ""
    }`}
  >
    {props.playAction.toString()}
  </li>
);

export default PlayActionComponent;
