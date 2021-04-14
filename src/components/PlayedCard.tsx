import React from "react";
import Card from "../cribbage/Card";
import Color from "../cribbage/Color";
import { card, redSuit, blackSuit } from "./Card.module.css";
import { playedCard } from "./PlayedCard.module.css";

const PlayedCard: React.FunctionComponent<{
  card: Card;
}> = (props): JSX.Element => (
  <li
    className={`${card} ${
      props.card.suit.color === Color.RED ? redSuit : blackSuit
    } ${playedCard}`}
  >
    {props.card.toString()}
  </li>
);

export default PlayedCard;