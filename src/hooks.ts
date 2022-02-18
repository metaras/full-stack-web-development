import type { Handle } from "svelte/internal";

export const handle: Handle = async ({ event, resolve }) => {

  if  (event.url.searchParams.has("_method")) {
    event.request.method = event.url.searchParams.get("_method").toUpperCase();
  }
  return await resolve(event);
}