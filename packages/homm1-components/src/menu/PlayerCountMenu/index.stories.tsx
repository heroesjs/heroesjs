import { Story } from "@storybook/react";
import React from "react";

import { PlayerCountMenu, PlayerCountMenuProps } from "./index";

export default {
  component: PlayerCountMenu,
  title: `Menu/${PlayerCountMenu.name}`,
};

export const Default: Story<PlayerCountMenuProps> = (args) => (
  <PlayerCountMenu {...args} />
);
