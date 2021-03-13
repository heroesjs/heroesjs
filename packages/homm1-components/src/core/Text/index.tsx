import React from "react";
import styled from "styled-components";

export type TextSize =
  | "tiny"
  | "small"
  | "medium"
  | "large";

export interface TextProps {
  readonly className?: string;
  readonly size: TextSize;
  readonly active?: boolean;
}

export function Text(props: React.PropsWithChildren<TextProps>) {
  return (
    <Root {...props} />
  );
}

const fontSizes: Record<TextSize, number> = {
  large: 14,
  medium: 12,
  small: 10,
  tiny: 6,
};

const Root = styled.span<TextProps>`
  font-size: ${(props) => fontSizes[props.size]}px;
  color: ${(props) => props.active ? '#c2eb0b' : '#fff'};
  white-space: pre;
`;
