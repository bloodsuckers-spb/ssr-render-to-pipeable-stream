import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import { baseUrl } from 'app/constants';

import { Character, ResponseApi } from 'app/types/API';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ['Characters', 'Character'],
  endpoints: (builder) => ({
    getCharactersByName: builder.query<ResponseApi, string>({
      query: (name) => `character?name=${name}`,
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersByNameQuery, useLazyGetCharacterByIdQuery } =
  charactersApi;
