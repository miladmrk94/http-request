import axios from "axios";
import React, { useState } from "react";

const NewComment = ({ submitHandlerNewComment }) => {
  const [comment, setComment] = useState({
    userId: Date.now(),
    title: "",
    body: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    submitHandlerNewComment(comment);
  };
  return (
    <div className="boxOne">
      <form onSubmit={submitHandler}>
        <input placeholder="name" onChange={changeHandler} name="name" />
        <input placeholder="title" onChange={changeHandler} name="title" />
        <input placeholder="body" onChange={changeHandler} name="body" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewComment;
