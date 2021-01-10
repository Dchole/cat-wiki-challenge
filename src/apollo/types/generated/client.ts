import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  breeds: Array<Breed>;
  breed: Breed;
};


export type QueryBreedsArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<Sort>;
};


export type QueryBreedArgs = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  insertBreeds?: Maybe<Array<Maybe<StoredBreeds>>>;
};

export type Breed = {
  __typename?: 'Breed';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  temperament: Scalars['String'];
  origin: Scalars['String'];
  lifeSpan: Scalars['String'];
  adaptability: Scalars['Int'];
  affectionLevel: Scalars['Int'];
  childFriendly: Scalars['Int'];
  grooming: Scalars['Int'];
  intelligence: Scalars['Int'];
  healthIssues: Scalars['Int'];
  socialNeeds: Scalars['Int'];
  strangerFriendly: Scalars['Int'];
  image: Scalars['String'];
  photos: Array<Image>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  url: Scalars['String'];
};

export type StoredBreeds = {
  __typename?: 'StoredBreeds';
  _id: Scalars['ID'];
};

export enum Sort {
  Recent = 'RECENT',
  Popular = 'POPULAR'
}

export enum Order {
  Desc = 'DESC',
  Acs = 'ACS'
}

export type BreedQueryPartFragment = (
  { __typename?: 'Breed' }
  & Pick<Breed, 'id' | 'name' | 'description' | 'image'>
);

export type GetBreedNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBreedNamesQuery = (
  { __typename?: 'Query' }
  & { breeds: Array<(
    { __typename?: 'Breed' }
    & Pick<Breed, 'id' | 'name'>
  )> }
);

export type GetBreedQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetBreedQuery = (
  { __typename?: 'Query' }
  & { breed: (
    { __typename?: 'Breed' }
    & Pick<Breed, 'id' | 'name' | 'description' | 'image' | 'temperament' | 'origin' | 'lifeSpan' | 'adaptability' | 'affectionLevel' | 'childFriendly' | 'grooming' | 'intelligence' | 'healthIssues' | 'socialNeeds' | 'strangerFriendly'>
    & { photos: Array<(
      { __typename?: 'Image' }
      & Pick<Image, 'url'>
    )> }
  ) }
);

export type GetBreedsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<Sort>;
}>;


export type GetBreedsQuery = (
  { __typename?: 'Query' }
  & { breeds: Array<(
    { __typename?: 'Breed' }
    & Pick<Breed, 'id' | 'name' | 'image'>
  )> }
);

export type GetPopularBreedsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<Sort>;
}>;


export type GetPopularBreedsQuery = (
  { __typename?: 'Query' }
  & { breeds: Array<(
    { __typename?: 'Breed' }
    & Pick<Breed, 'id' | 'name' | 'description' | 'image'>
  )> }
);

export const BreedQueryPartFragmentDoc = gql`
    fragment BreedQueryPart on Breed {
  id
  name
  description
  image
}
    `;
export const GetBreedNamesDocument = gql`
    query GetBreedNames {
  breeds {
    id
    name
  }
}
    `;

/**
 * __useGetBreedNamesQuery__
 *
 * To run a query within a React component, call `useGetBreedNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBreedNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBreedNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBreedNamesQuery(baseOptions?: Apollo.QueryHookOptions<GetBreedNamesQuery, GetBreedNamesQueryVariables>) {
        return Apollo.useQuery<GetBreedNamesQuery, GetBreedNamesQueryVariables>(GetBreedNamesDocument, baseOptions);
      }
export function useGetBreedNamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBreedNamesQuery, GetBreedNamesQueryVariables>) {
          return Apollo.useLazyQuery<GetBreedNamesQuery, GetBreedNamesQueryVariables>(GetBreedNamesDocument, baseOptions);
        }
export type GetBreedNamesQueryHookResult = ReturnType<typeof useGetBreedNamesQuery>;
export type GetBreedNamesLazyQueryHookResult = ReturnType<typeof useGetBreedNamesLazyQuery>;
export type GetBreedNamesQueryResult = Apollo.QueryResult<GetBreedNamesQuery, GetBreedNamesQueryVariables>;
export const GetBreedDocument = gql`
    query GetBreed($name: String!) {
  breed(name: $name) {
    id
    name
    description
    image
    temperament
    origin
    lifeSpan
    adaptability
    affectionLevel
    childFriendly
    grooming
    intelligence
    healthIssues
    socialNeeds
    strangerFriendly
    photos {
      url
    }
  }
}
    `;

/**
 * __useGetBreedQuery__
 *
 * To run a query within a React component, call `useGetBreedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBreedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBreedQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetBreedQuery(baseOptions: Apollo.QueryHookOptions<GetBreedQuery, GetBreedQueryVariables>) {
        return Apollo.useQuery<GetBreedQuery, GetBreedQueryVariables>(GetBreedDocument, baseOptions);
      }
export function useGetBreedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBreedQuery, GetBreedQueryVariables>) {
          return Apollo.useLazyQuery<GetBreedQuery, GetBreedQueryVariables>(GetBreedDocument, baseOptions);
        }
export type GetBreedQueryHookResult = ReturnType<typeof useGetBreedQuery>;
export type GetBreedLazyQueryHookResult = ReturnType<typeof useGetBreedLazyQuery>;
export type GetBreedQueryResult = Apollo.QueryResult<GetBreedQuery, GetBreedQueryVariables>;
export const GetBreedsDocument = gql`
    query GetBreeds($limit: Int, $page: Int, $sortBy: Sort) {
  breeds(limit: $limit, page: $page, sortBy: $sortBy) {
    id
    name
    image
  }
}
    `;

/**
 * __useGetBreedsQuery__
 *
 * To run a query within a React component, call `useGetBreedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBreedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBreedsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetBreedsQuery(baseOptions?: Apollo.QueryHookOptions<GetBreedsQuery, GetBreedsQueryVariables>) {
        return Apollo.useQuery<GetBreedsQuery, GetBreedsQueryVariables>(GetBreedsDocument, baseOptions);
      }
export function useGetBreedsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBreedsQuery, GetBreedsQueryVariables>) {
          return Apollo.useLazyQuery<GetBreedsQuery, GetBreedsQueryVariables>(GetBreedsDocument, baseOptions);
        }
export type GetBreedsQueryHookResult = ReturnType<typeof useGetBreedsQuery>;
export type GetBreedsLazyQueryHookResult = ReturnType<typeof useGetBreedsLazyQuery>;
export type GetBreedsQueryResult = Apollo.QueryResult<GetBreedsQuery, GetBreedsQueryVariables>;
export const GetPopularBreedsDocument = gql`
    query GetPopularBreeds($limit: Int, $page: Int, $sortBy: Sort) {
  breeds(limit: $limit, page: $page, sortBy: $sortBy) {
    id
    name
    description
    image
  }
}
    `;

/**
 * __useGetPopularBreedsQuery__
 *
 * To run a query within a React component, call `useGetPopularBreedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularBreedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularBreedsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetPopularBreedsQuery(baseOptions?: Apollo.QueryHookOptions<GetPopularBreedsQuery, GetPopularBreedsQueryVariables>) {
        return Apollo.useQuery<GetPopularBreedsQuery, GetPopularBreedsQueryVariables>(GetPopularBreedsDocument, baseOptions);
      }
export function useGetPopularBreedsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPopularBreedsQuery, GetPopularBreedsQueryVariables>) {
          return Apollo.useLazyQuery<GetPopularBreedsQuery, GetPopularBreedsQueryVariables>(GetPopularBreedsDocument, baseOptions);
        }
export type GetPopularBreedsQueryHookResult = ReturnType<typeof useGetPopularBreedsQuery>;
export type GetPopularBreedsLazyQueryHookResult = ReturnType<typeof useGetPopularBreedsLazyQuery>;
export type GetPopularBreedsQueryResult = Apollo.QueryResult<GetPopularBreedsQuery, GetPopularBreedsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    