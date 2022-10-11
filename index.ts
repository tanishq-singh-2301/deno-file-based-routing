import { ConnInfo, serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(_req: Request, connInfo: ConnInfo) {
  const addr = connInfo.remoteAddr as Deno.NetAddr;
  const ip = addr.hostname;
  return new Response(`Your IP address is <b>${ip}</b>`, {
    headers: { "content-type": "text/html" },
  });
}

serve(handler);
