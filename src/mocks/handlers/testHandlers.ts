
import { rest } from "msw";
import { API_URL } from "../../constants";

export const testResponse = [
  {
    "uid": "uuid1",
  },
  {
    "uid": "uuid2",
  },
  {
    "uid": "uuid3",
  },
  {
    "uid": "uuid4",
  },
];

export const testHandlers = [
  rest.get(`${API_URL}/test`, (_, res, ctx) => {
    return res(
      ctx.delay(300),
      ctx.json(testResponse)
    );
  }),
];
