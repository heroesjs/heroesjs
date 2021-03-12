import { Story } from "@storybook/react";
import React from "react";

import { GameTypeMenu, GameTypeMenuProps } from "./index";

export default {
  component: GameTypeMenu,
  title: `Menu/${GameTypeMenu.name}`,
};

export const Default: Story<GameTypeMenuProps> = (args) => (
  <GameTypeMenu {...args} />
);
