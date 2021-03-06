import React from "react";
import styled from "styled-components";

export interface ButtonAssets {
  readonly enabled: string;
  readonly disabled: string;
}

export interface ButtonProps {
  readonly className?: string;
  readonly assets: ButtonAssets;
  readonly disabled?: boolean;
  readonly onMouseEnter?: () => void;
  readonly onMouseLeave?: () => void;
  readonly onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <Root
      className={props.className}
      type="button"
      disabled={props.disabled}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      <img
        className="enabled"
        src={props.assets.enabled}
      />
      <img
        className="disabled"
        src={props.assets.disabled}
      />
    </Root>
  );
}

const Root = styled.button`
  font-size: 0;
  background: none;
  border: none;
  padding: 0;
  outline: none;

  .disabled {
    display: none;
  }

  &:active,
  &:disabled {
    .enabled {
      display: none;
    }

    .disabled {
      display: block;
    }
  }
`;
