import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 507,
  site: "maria-teste",
  domains: ["maria-teste.deco.site"],
});