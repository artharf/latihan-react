import React from 'react';
import { Table } from 'reactstrap';

const myTable = (props) => {
    const urut = props.movies.map ((val) => {
      return(
          <tr key={val.id}>
              <td scope="row">{val.id}</td>
              <td>{val.title}</td>
              <td>{val.releaseYear}</td>
          </tr>
      )
  })
    return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Release Year</th>
        </tr>
      </thead>
      <tbody>
        {urut}
      </tbody>
    </Table>
  );
}

export default myTable;