import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($data: UserdataInput!) {
    createUserdata(data: $data) {
      id
      name
      address
      phone
      email
      age
      gender
    }
  }
`;
