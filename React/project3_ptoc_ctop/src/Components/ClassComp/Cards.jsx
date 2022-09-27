import React from "react";

const Cards = ({filltextusers}) => {
  return (
    <div>
      {filltextusers.map((user, i) => {
        return (
          <div className="usserInfo" key={i}>
            <p>{user.postId}</p>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
