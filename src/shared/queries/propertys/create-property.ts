import { gql } from "@apollo/client";

export const CREATE_PROPERTY = gql`
  mutation CreateEnterprise($input: EnterpriseInput!) {
    createEnterprise(input: $input) {
      id
      name
      listingType
      price
      gallery
    }
  }
`;
