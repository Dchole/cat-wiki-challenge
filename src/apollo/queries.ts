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
