/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    // Extract method, url and headers from the incoming request object.
    const { method, url, headers } = request;

    // Extract destination url from the query string.
    const destUrl = new URL(url).searchParams.get("url");

    // If the destination url is not present, return 400.
    if (!destUrl) {
      return new Response("Missing destination URL.", { status: 400 });
    }

    // If the request method is OPTIONS, return CORS headers.
    if (
      method === "OPTIONS" &&
      headers.has("Origin") &&
      headers.has("Access-Control-Request-Method")
    ) {
      const responseHeaders = {
        "Access-Control-Allow-Origin": headers.get("Origin"),
        "Access-Control-Allow-Methods": "*", // Allow all methods
        "Access-Control-Allow-Headers": headers.get("Access-Control-Request-Headers"),
        "Access-Control-Max-Age": "86400",
      };
      return new Response(null, { headers: responseHeaders });
    }

    const proxyRequest = new Request(destUrl, {
      method,
      headers: {
        ...headers,
        Origin: "",
      },
    });

    try {
      const response = await fetch(proxyRequest);
      const responseHeaders = new Headers(response.headers);
      responseHeaders.set("Access-Control-Allow-Origin", "*");
      responseHeaders.set("Access-Control-Allow-Credentials", "true");
      responseHeaders.set("Access-Control-Allow-Methods", "*");

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    } catch (error) {
      return new Response("Error occurred while fetching the resource.", {
        status: 500,
      });
    }
  },
};
