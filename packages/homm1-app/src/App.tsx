import React from "react";

import { AdventureButtons, AdventureWindow, MainMenu, MainWindow, StatusWindow } from "@heroesjs/homm1-components";

export function App() {
  return (
    <>
      <MainWindow>
        <MainMenu />
      </MainWindow>
      <AdventureWindow
        renderStatus={renderStatus}
      />
    </>
  );
}

function renderStatus() {
  return (
    <>
      <AdventureButtons />
      <StatusWindow />
    </>
  )
}
