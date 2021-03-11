import { Story } from "@storybook/react";
import React from "react";

import { CreditsWindow, CreditsWindowProps } from "./index";

export default {
  component: CreditsWindow,
  title: `Main/${CreditsWindow.name}`,
};

export const Default: Story<CreditsWindowProps> = (args) => (
  <CreditsWindow {...args} />
);
