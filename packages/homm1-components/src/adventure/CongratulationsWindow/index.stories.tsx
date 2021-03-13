import { Story } from "@storybook/react";
import React from "react";

import { Placeholder } from "../../core";
import { CongratulationsWindow, CongratulationsWindowProps } from "./index";

export default {
  component: CongratulationsWindow,
  title: `Adventure/${CongratulationsWindow.name}`,
};

export const Default: Story<CongratulationsWindowProps> = (args) => (
  <CongratulationsWindow {...args}>
    <Placeholder name="Content" />
  </CongratulationsWindow>
);
