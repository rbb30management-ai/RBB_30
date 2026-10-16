
export default async () => {
  return new Response(
    JSON.stringify({
      message:
        "RBB_30 Twitch integration endpoint is installed. Authorization is the next step."
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
