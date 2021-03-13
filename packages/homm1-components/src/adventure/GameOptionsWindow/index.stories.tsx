import { Meta, Story } from "@storybook/react";
import React from "react";

import { Placeholder } from "../../core";
import { GameOptionsWindow, GameOptionsWindowProps } from "./index";

export default {
  args: {
    renderOption: (index: number) => <Placeholder name={`Option ${index}`} />,
  },
  component: GameOptionsWindow,
  title: `Adventure/${GameOptionsWindow.name}`,
} as Meta<GameOptionsWindowProps>;

export const Default: Story<GameOptionsWindowProps> = (args) => (
  <GameOptionsWindow {...args} />
);
