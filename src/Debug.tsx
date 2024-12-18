import React from "react";
import { useCookies } from "react-cookie";
import { useSearchParams } from "react-router";
import { useLocalStorage } from "./storage";

const Cookies: React.FC = (): JSX.Element => {
  const [cookies] = useCookies();
  return (
    <>
      <h3>Cookies</h3>
      <ul>
        {Object.entries(cookies).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </>
  );
};

const LocalStorage: React.FC = (): JSX.Element => {
  const [location] = useLocalStorage<any>("location-storage", null);
  return (
    <>
      <h3>Local Storage</h3>
      <code>{JSON.stringify(location)}</code>
      <ul>
        {Object.entries(window.localStorage).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </>
  );
};

const SearchParams: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  return (
    <>
      <h3>Search Params</h3>
      <ul>
        {Array.from(searchParams).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </>
  );
};

type DebugProps = {
  readonly showCookies?: boolean;
  readonly showLocalStorage?: boolean;
  readonly showSearchParams?: boolean;
};

export const Debug: React.FC<DebugProps> = ({
  showCookies = false,
  showLocalStorage = false,
  showSearchParams = false,
}: DebugProps): JSX.Element => {
  const showNothing = !showCookies && !showLocalStorage && !showSearchParams;

  if (showNothing) {
    return <></>;
  }

  return (
    <div className="flex">
      {showCookies && (
        <div className="flex-1">
          <Cookies />
        </div>
      )}
      {showLocalStorage && (
        <div className="flex-1">
          <LocalStorage />
        </div>
      )}
      {showSearchParams && (
        <div className="flex-1">
          <SearchParams />
        </div>
      )}
    </div>
  );
};
