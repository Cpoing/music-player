//api calls
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', 'ce17817db1msh0324966812d1a73p112faejsna2d68b6a41d5');

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/track' }),
            getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}&locale=en-US` }),
            getSongRelated: builder.query({ query: ({ songid }) =>`songs/list-recommendations?key=${songid}&locale=en-US` }), 
            getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}&l=en-US` }),
        })
    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
    } = shazamCoreApi;

    