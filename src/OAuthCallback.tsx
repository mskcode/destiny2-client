import { useSearchParams } from "react-router";

export const OAuthCallback: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  // TODO: validate that state matches to the one in local storage

  // TODO: fetch access token using the code

  // TODO: save the access token in local storage

  return (
    <main>
      <h1>OAuth Callback</h1>
      <div>
        <p>
          <strong>Code:</strong> {code}
        </p>
        <p>
          <strong>State:</strong> {state}
        </p>
      </div>
    </main>
  );
};
