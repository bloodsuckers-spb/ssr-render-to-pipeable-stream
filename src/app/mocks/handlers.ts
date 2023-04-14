import { rest } from 'msw';

import { charactersLink } from '../constants';

import { MOCK_DATA, MOCK_CHARACTER } from './data';

export const handlers = [
  rest.get(charactersLink, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: MOCK_DATA,
      })
    );
  }),
  rest.get(`${charactersLink}/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: MOCK_CHARACTER,
      })
    );
  }),
];
