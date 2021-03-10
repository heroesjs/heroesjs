import { Story } from "@storybook/react";
import React from "react";

import { ComPortMenu, ComPortMenuProps } from "./index";

export default {
  component: ComPortMenu,
  title: "Menu/ComPortMenu",
};

export const Default: Story<ComPortMenuProps> = (args) => (
  <ComPortMenu {...args} />
);
