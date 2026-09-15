import { optimizely } from "./opimizely-client";

const homePageGuid =
  process.env.OPTIMIZELY_CONTENT_GUID ??
  "d1c333bbc5f14e7baf56e514cd420a20";

export async function getHomePage() {
  const data = await optimizely.GetContentByGuid({
    guid: homePageGuid,
  });

  return data;
}