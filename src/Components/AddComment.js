import React, { useState } from "react";
const AddComment = () => {
  const [newData, setNewData] = useState("");

  const changeHandler = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newData);
    e.target.reset();
    if (newData === "") {
      alert("plz completed");
    } else {
      setNewData("");
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input placeholder="name..." name="name" onChange={changeHandler} />
        <input placeholder="phone..." name="phone" onChange={changeHandler} />
        <input placeholder="title..." name="title" onChange={changeHandler} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddComment;
