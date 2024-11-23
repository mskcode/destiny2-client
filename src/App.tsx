import React from "react";
import { Debug } from "./Debug";

export const App: React.FC = (): JSX.Element => {
  return (
    <main>
      <Debug showCookies showLocalStorage showSearchParams />
      <h1>Title</h1>
    </main>
  );
};
