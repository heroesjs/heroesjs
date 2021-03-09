import { Meta } from "@storybook/react"
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
  title: "Core/Button",
} as Meta<ButtonProps>;

export const Default = (args) => (
  <Button {...args} />
);
