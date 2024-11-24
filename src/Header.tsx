import { DarkModeToggle } from "./DarkModeToggle";
import { Debug } from "./Debug";

export const Header: React.FC = (): JSX.Element => {
  return (
    <header className="">
      <div className="flex">
        <div className="flex flex-auto flex-row">
          <h1>Destiny 2 API Client</h1>
        </div>
        <div className="flex flex-auto flex-row-reverse">
          <DarkModeToggle />
        </div>
      </div>
      <div className="mt-5">
        <Debug showCookies showLocalStorage showSearchParams />
      </div>
    </header>
  );
};
