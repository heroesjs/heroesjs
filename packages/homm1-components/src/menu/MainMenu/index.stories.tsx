import { Story } from "@storybook/react";
import React from "react";

import { MainMenu, MainMenuProps } from "./index";

export default {
  component: MainMenu,
  title: "Menu/MainMenu",
};

export const Default: Story<MainMenuProps> = (args) => (
  <MainMenu {...args} />
);
