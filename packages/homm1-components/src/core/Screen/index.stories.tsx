import React from "react";

import { Placeholder } from "../Placeholder";
import { Screen } from "./index";

export default {
  component: Screen,
  title: `Core/${Screen.name}`,
};

export const Default = () => (
  <Screen>
    <Placeholder name="Content" />
  </Screen>
);
