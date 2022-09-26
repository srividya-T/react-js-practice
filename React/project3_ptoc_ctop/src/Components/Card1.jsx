import React from "react";

const Card1 = ({filltextUsers}) => {
  return (
    <div>
      {filltextUsers.map((user,i) => {
        return (
          <div className="usserInfo" key={i}>
            <p>{user.userId}</p>
            <p>{user.id}</p>
            <p>{user.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card1;
