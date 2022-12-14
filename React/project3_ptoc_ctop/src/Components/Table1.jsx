import React from "react";

const Table1 = ({ filltextUsers }) => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {filltextUsers.map((user,i) => {
            return (
              <tr key={i}>
                <td>{user.userId}</td>
                <td>{user.id}</td>
                <td>{user.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table1;
