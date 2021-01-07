import { gql } from "@apollo/client";

export const GET_BREED = gql`
  query getBreed($name: String!) {
    breed(name: $name) {
      id
      image
      photos {
        url
      }
    }
  }
`;

export const GET_BREEDS = gql`
  query getBreeds($limit: Int, $page: Int) {
    breeds(limit: $limit, page: $page) {
      id
      name
      image
    }
  }
`;
