import { handleRequestWithRemix } from "@remix-run/cloudflare-workers";

addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequestWithRemix(event.request, {
      getLoadContext() {
        // Whatever you return here will be passed as `context` to your loaders.
      },
    })
  );
});
