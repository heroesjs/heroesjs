import React from "react";
import styled from "styled-components";

import { ArtifactSlot, CrestSlot, PortraitSlot, TroopSlot } from "../../base";
import { Button, Screen, Text } from "../../core";
import { background, dismiss, exit } from "./assets";

const artifactSlotCount = 14;

export interface HeroWindowProps {
  readonly title?: string;
  readonly renderPortrait?: () => React.ReactNode;
  readonly renderSkill?: (index: number) => React.ReactNode;
  readonly renderCrest?: () => React.ReactNode;
  readonly renderTroop?: (index: number) => React.ReactNode;
  readonly dismissible?: boolean;
  readonly onDismissMouseEnter?: () => void;
  readonly onDismissMouseLeave?: () => void;
  readonly onDismissClick?: () => void;
  readonly renderArtifact?: (index: number) => React.ReactNode;
  readonly onExitMouseEnter?: () => void;
  readonly onExitMouseLeave?: () => void;
  readonly onExitClick?: () => void;
  readonly statusText?: string;
}

export function HeroWindow(props: HeroWindowProps) {
  return (
    <Root>
      <Title size="large">
        {props.title}
      </Title>
      <Portrait>
        {props.renderPortrait?.()}
      </Portrait>
      <Skills>
        {[...new Array(5).keys()].map((index) => (
          <Skill key={index}>
            {props.renderSkill?.(index)}
          </Skill>
        ))}
      </Skills>
      <Crest>
        {props.renderCrest?.()}
      </Crest>
      <Army>
        {[...new Array(5).keys()].map((index) => (
          <Troop key={index}>
            {props.renderTroop?.(index)}
          </Troop>
        ))}
      </Army>
      {props.dismissible && (
        <DismissButton
          assets={dismiss}
          onMouseEnter={props.onDismissMouseEnter}
          onMouseLeave={props.onDismissMouseLeave}
          onClick={props.onDismissClick}
        />
      )}
      <Artifacts>
        {[...new Array(artifactSlotCount).keys()].map((index) => (
          <Artifact key={index}>
            {props.renderArtifact?.(index)}
          </Artifact>
        ))}
      </Artifacts>
      <ExitButton
        assets={exit}
        onMouseEnter={props.onExitMouseEnter}
        onMouseLeave={props.onExitMouseLeave}
        onClick={props.onExitClick}
      />
      <StatusText size="large">
        {props.statusText}
      </StatusText>
    </Root>
  );
}

const Root = styled(Screen)`
  background: url(${background});
`;

const Title = styled(Text)`
  position: absolute;
  top: 68px;
  width: 100%;
  text-align: center;
`;

const Portrait = styled(PortraitSlot)`
  position: absolute;
  top: 101px;
  left: 49px;
`;

const Skills = styled.div`
  position: absolute;
  top: 101px;
  left: 156px;
`;

const Skill = styled.div`
  display: inline-block;
  width: 82px;
  height: 93px;
  margin-right: 6px;
`;

const Crest = styled(CrestSlot)`
  position: absolute;
  top: 200px;
  left: 49px;
`;

const Army = styled.div`
  position: absolute;
  top: 200px;
  left: 156px;
`;

const Troop = styled(TroopSlot)`
  display: inline-block;
  margin-right: 6px;
`;

const DismissButton = styled(Button)`
  position: absolute;
  top: 317px;
  left: 10px;
`;

const Artifacts = styled.div`
  position: absolute;
  top: 302px;
  left: 45px;
  display: flex;
  flex-wrap: wrap;
  width: ${79 * artifactSlotCount / 2 - 3}px;
`;

const Artifact = styled(ArtifactSlot)`
  margin-right: 3px;

  &:first-child {
    margin-bottom: 3px;
  }

  &:nth-child(${artifactSlotCount / 2}n) {
    margin-right: 0;
  }
`;

const ExitButton = styled(Button)`
  position: absolute;
  top: 317px;
  left: 602px;
`;

const StatusText = styled(Text)`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;
