import React from "react";
import styled from "styled-components";

import { Button } from "../../core";
import { background, castSpell, dig, okay, viewPuzzle, viewWorld } from "./assets";

export interface AdventureOptionsWindowProps {
  readonly onViewWorldClick?: () => void;
  readonly onViewPuzzleClick?: () => void;
  readonly onCastSpellClick?: () => void;
  readonly onDigClick?: () => void;
  readonly onOkayClick?: () => void;
}

export function AdventureOptionsWindow(props: AdventureOptionsWindowProps) {
  return (
    <Root>
      <ViewWorldButton
        assets={viewWorld}
        onClick={props.onViewWorldClick}
      />
      <ViewPuzzleButton
        assets={viewPuzzle}
        onClick={props.onViewPuzzleClick}
      />
      <CastSpellButton
        assets={castSpell}
        onClick={props.onCastSpellClick}
      />
      <DigButton
        assets={dig}
        onClick={props.onDigClick}
      />
      <OkayButton
        assets={okay}
        onClick={props.onOkayClick}
      />
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  width: 322px;
  height: 236px;
  background: url(${background});
`;

const ViewWorldButton = styled(Button)`
  position: absolute;
  top: 31px;
  left: 46px;
`;

const ViewPuzzleButton = styled(Button)`
  position: absolute;
  top: 31px;
  left: 179px;
`;

const CastSpellButton = styled(Button)`
  position: absolute;
  top: 107px;
  left: 46px;
`;

const DigButton = styled(Button)`
  position: absolute;
  top: 107px;
  left: 179px;
`;

const OkayButton = styled(Button)`
  position: absolute;
  top: 184px;
  left: 112px;
`;
