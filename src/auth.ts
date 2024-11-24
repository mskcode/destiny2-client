const OAUTH_AUTHORIZE_URL = "https://www.bungie.net/en/oauth/authorize";
const OAUTH_CLIENT_ID = "invalid"; // TODO read from the environment

export const buildAuthorizationUrl = () => {
  const state = globalThis.crypto.randomUUID();

  // TODO the state should be stored in the local storage

  const queryParams = new URLSearchParams({
    client_id: OAUTH_CLIENT_ID,
    response_type: "code",
    state: state,
  });
  return `${OAUTH_AUTHORIZE_URL}?${queryParams.toString()}`;
};
