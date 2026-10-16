export default async (request) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error) {
    return new Response("Twitch authorization was cancelled.", {
      status: 400
    });
  }

  if (!code) {
    return new Response("Callback is ready. Open Twitch authorization first.", {
      status: 200
    });
  }

  return new Response(
    "Twitch returned an authorization code. Token exchange is the next step.",
    { status: 200 }
  );
};
