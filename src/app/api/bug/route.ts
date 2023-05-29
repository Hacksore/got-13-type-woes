import got from "got";

export async function GET(_request: Request) {
  const response = await got("https://api.github.com/repos/vercel/next.js");
  return new Response(response.body);
}
