import { Story } from "@storybook/react";
import React from "react";

import { BaudMenu, BaudMenuProps } from "./index";

export default {
  component: BaudMenu,
  title: `Menu/${BaudMenu.name}`,
};

export const Default: Story<BaudMenuProps> = (args) => (
  <BaudMenu {...args} />
);
