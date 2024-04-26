// UserDataTable.js

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const GET_USER_DATA = gql`
  query {
    userdatas {
      data {
        id
        attributes {
          name
          address
          phone
          email
          age
          gender
        }
      }
    }
  }
`;

const UserDataTable = () => {
  const { loading, error, data } = useQuery(GET_USER_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='container col-xl-10 mx-auto my-auto py-5'>
      <div className='clarifix mb-5'>
        <div className='float-start'>
        <h2>User List</h2>
        </div>
        <div className='float-end'>
          <Link to="/add-user" className='btn btn-primary'>Add User</Link>
        </div>
      </div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.userdatas.data.map((userData, index) => (
            <tr key={userData.id}>
              <td>{index + 1}</td>
              <td>{userData.attributes.name}</td>
              <td>{userData.attributes.address}</td>
              <td>{userData.attributes.phone}</td>
              <td>{userData.attributes.email}</td>
              <td>{userData.attributes.age}</td>
              <td>{userData.attributes.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataTable;
