import React from "react";
import "./Comment.css";
const Comment = ({ name, email, onClick }) => {
  return (
    <div className="box" onClick={onClick}>
      <div className="boxOne">
        <h3>{name}</h3>
        <h3>{email}</h3>
      </div>
    </div>
  );
};

export default Comment;
