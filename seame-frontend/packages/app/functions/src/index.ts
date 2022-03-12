import * as functions from "firebase-functions";
import { request } from "@seame-frontend/core/api/search";

// FIXME
// eslint-disable-next-line @typescript-eslint/no-var-requires
const basicAuth = require("basic-auth-connect");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");

const app = express();

app.all(
  "/*",
  basicAuth(function (user: string, password: string) {
    return (
      user === functions.config().seame.basic_user &&
      password === functions.config().seame.basic_password
    );
  })
);
app.use(express.static(__dirname + "/../public/"));

exports.app = functions.https.onRequest(app);

exports.seame_search = functions
  .region("asia-northeast1")
  .https.onCall(async (data, context) => {
    const response = await request(
      data.query,
      functions.config().seame.algoria_app_id,
      functions.config().seame.algoria_api_key,
      "seame"
    );
    return response;
  });
