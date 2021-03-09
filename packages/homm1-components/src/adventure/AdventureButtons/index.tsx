import React from "react";
import styled from "styled-components";

import { Button } from "@heroesjs/homm1-components";

import { adventureOptions, endTurn, gameOptions, kingdomOverview, move, nextHero } from "./assets";

export interface AdventureButtonsProps {
  readonly nextHeroDisabled?: boolean;
  readonly onNextHeroClick?: () => void;
  readonly moveDisabled?: boolean;
  readonly onMoveClick?: () => void;
  readonly onKingdomOverviewClick?: () => void;
  readonly onEndTurnClick?: () => void;
  readonly onAdventureOptionsClick?: () => void;
  readonly onGameOptionsClick?: () => void;
}

export function AdventureButtons(props: AdventureButtonsProps) {
  return (
    <Root>
      <Button
        assets={nextHero}
        disabled={props.nextHeroDisabled}
        onClick={props.onNextHeroClick}
      />
      <Button
        assets={move}
        disabled={props.moveDisabled}
        onClick={props.onMoveClick}
      />
      <Button
        assets={kingdomOverview}
        onClick={props.onKingdomOverviewClick}
      />
      <Button
        assets={endTurn}
        onClick={props.onEndTurnClick}
      />
      <Button
        assets={adventureOptions}
        onClick={props.onAdventureOptionsClick}
      />
      <Button
        assets={gameOptions}
        onClick={props.onGameOptionsClick}
      />
    </Root>
  );
}

const Root = styled.div`
  width: 144px;
  font-size: 0;
`;
