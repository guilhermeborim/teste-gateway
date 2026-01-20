import { gql } from "@apollo/client";

export const GET_PROPERTY_ID = gql`
  query Enterprise($id: ID!) {
    enterprise(id: $id) {
      id
      name
      listingType
      price
      gallery
      user {
        id
        name
      }
    }
  }
`;
