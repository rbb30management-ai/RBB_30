
export default async (request) => {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const redirectUri = process.env.TWITCH_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return new Response("Missing Twitch configuration.", {
      status: 500
    });
  }

  const state = crypto.randomUUID();

  const url = new URL(
    "https://id.twitch.tv/oauth2/authorize"
  );

  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set(
    "scope",
    "moderator:read:followers"
  );
  url.searchParams.set("state", state);

  return Response.redirect(url.toString(), 302);
};
