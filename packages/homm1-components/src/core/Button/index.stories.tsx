import { Meta, Story } from "@storybook/react";
import React from "react";

import { assets } from "./assets";
import { Button, ButtonProps } from "./index";

export default {
  args: {
    assets,
  },
  argTypes: {
    assets: {
      control: false,
    },
  },
  component: Button,
  title: `Core/${Button.name}`,
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = (args) => (
  <Button {...args} />
);
