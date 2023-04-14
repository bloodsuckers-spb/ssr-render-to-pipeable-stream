import { rest } from 'msw';

import { fetch, Headers, Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

import { baseUrl } from '../constants';
import { MOCK_DATA } from './data';

export const handlers = [
  rest.get(`${baseUrl}/character`, (req, res, ctx) => {
    const name = req.url.searchParams.get('name') ?? '';
    return res(
      ctx.status(200),
      ctx.json(MOCK_DATA.filter((elem) => elem.name.includes(name)))
    );
  }),

  rest.get(`${baseUrl}/character/:id`, (req, res, ctx) => {
    const { id } = req.params;
    const cardWithId = MOCK_DATA.find((card) => card.id === Number(id));
    return !cardWithId
      ? res(ctx.status(404))
      : res(ctx.status(200), ctx.json(cardWithId));
  }),
];
