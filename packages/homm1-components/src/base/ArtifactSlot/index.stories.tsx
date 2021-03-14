import { Story } from "@storybook/react";
import React from "react";

import { Placeholder } from "../../core";
import { ArtifactSlot, ArtifactSlotProps } from "./index";

export default {
  component: ArtifactSlot,
  title: `Base/${ArtifactSlot.name}`,
};

export const Default: Story<ArtifactSlotProps> = (args) => (
  <ArtifactSlot {...args}>
    <Placeholder name="Content" />
  </ArtifactSlot>
);
