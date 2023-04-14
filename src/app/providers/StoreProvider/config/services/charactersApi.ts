import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from 'app/constants';

import { Character } from 'pages/home/models';

type ResponseApi = {
  results: Character[];
};

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
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
