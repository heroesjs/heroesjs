import { Story } from "@storybook/react";
import React from "react";

import { HostGuestMenu, HostGuestMenuProps } from "./index";

export default {
  component: HostGuestMenu,
  title: `Menu/${HostGuestMenu.name}`,
};

export const Default: Story<HostGuestMenuProps> = (args) => (
  <HostGuestMenu {...args} />
);

export const Descriptive: typeof Default = Default.bind(this);

Descriptive.args = {
  descriptive: true,
};
