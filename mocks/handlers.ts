import { rest } from "msw";

import sampleResponse from "./sampleResponse.json";

export const handlers = [

  rest.get(
    "https://jsonplaceholder.typicode.com/posts",
    (_req, res, ctx) => {
      return res( ctx.status(200), ctx.json(sampleResponse) );
    }
  ),
];
