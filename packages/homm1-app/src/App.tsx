import React from "react";

import { AdventureButtons, AdventureWindow, MainMenu, MainWindow } from "@heroesjs/homm1-components";

export function App() {
  return (
    <>
      <MainWindow>
        <MainMenu />
      </MainWindow>
      <AdventureWindow
        renderStatus={() => <AdventureButtons />}
      />
    </>
  );
}
