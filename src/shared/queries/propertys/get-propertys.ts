import { gql } from "@apollo/client";

export const GET_PROPERTYS = gql`
  query Enterprises($filter: EnterpriseFilter) {
    enterprises(filter: $filter) {
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
