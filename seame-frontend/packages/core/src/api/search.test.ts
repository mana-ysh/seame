import { request } from "./search";

// NOTE: Basically skip because this checks just integrations to search api.
test.skip("check search response", async () => {
  const response = await request(
    "rust",
    "DUMMY_APP_ID",
    "DUMMY_API_KEY",
    "seame"
  );
  console.log(response);
});
