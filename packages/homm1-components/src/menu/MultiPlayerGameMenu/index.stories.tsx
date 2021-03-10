import { Story } from "@storybook/react";
import React from "react";

import { MultiPlayerGameMenu, MultiPlayerGameMenuProps } from "./index";

export default {
  component: MultiPlayerGameMenu,
  title: "Menu/MultiPlayerGameMenu"
};

export const Default: Story<MultiPlayerGameMenuProps> = (args) => (
  <MultiPlayerGameMenu {...args} />
);
