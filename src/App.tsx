import React from "react";
import { buildAuthorizationUrl } from "./auth";
import { Header } from "./Header";

export const App: React.FC = (): JSX.Element => {
  return (
    <main>
      <Header />

      <div className="mx-auto mt-10">
        <div className="border p-2">
          <a href={buildAuthorizationUrl()}>Start OAuth Flow</a>
        </div>
      </div>
    </main>
  );
};
