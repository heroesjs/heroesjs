import { Meta, Story } from "@storybook/react";
import React from "react";

import { Placeholder } from "../../core";
import { HeroWindow, HeroWindowProps } from "./index";

export default {
  args: {
    title: "Title",
    renderPortrait: () => <Placeholder name="Portrait" />,
    renderSkill: (index) => <Placeholder name={`Skill ${index}`} />,
    renderCrest: () => <Placeholder name="Crest" />,
    renderTroop: (index: number) => <Placeholder name={`Troop ${index}`} />,
    renderArtifact: (index: number) => <Placeholder name={`Artifact ${index}`} />,
    statusText: "Status Text",
  },
  component: HeroWindow,
  title: `Adventure/${HeroWindow.name}`,
} as Meta<HeroWindowProps>;

export const Default: Story<HeroWindowProps> = (args) => (
  <HeroWindow {...args} />
);

export const Dismissible: typeof Default = Default.bind({});

Dismissible.args = {
  dismissible: true,
};
