import React from "react";

const Child3 = ({ meassage, person, users }) => {
  return (
    <div>
      {meassage && <p>Message From Parent Component :{meassage}</p>}
      {Object.keys(person).length > 0 && (
        <p>
          Person Details From Parent :{person.fname} - {person.lname}
        </p>
      )}
      {users.length > 0 && (
        <ul>
          {users.map((user, i) => {
            return <li key={i}>{user}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Child3;
