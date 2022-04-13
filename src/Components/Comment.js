import React from "react";
import "./Comment.css";
const Comment = ({ name, phone, onClick }) => {
  return (
    <div className="boxTwo" onClick={onClick}>
      <h2>{name}</h2>
      <h3>{phone}</h3>
    </div>
  );
};

export default Comment;
