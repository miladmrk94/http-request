import React, { useState } from "react";
const AddComment = ({ onSubmitHandler }) => {
  const [newData, setNewData] = useState(null);

  const changeHandler = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (newData) {
      console.log(newData);
      onSubmitHandler(newData);
      e.target.reset();
      setNewData(null);
    } else {
      alert("plz complete");
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
