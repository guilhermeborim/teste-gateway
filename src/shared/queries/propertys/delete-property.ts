import { gql } from "@apollo/client";

export const DELETE_PROPERTY = gql`
  mutation DeleteEnterprise($id: ID!) {
    deleteEnterprise(id: $id) {
      id
    }
  }
`;
