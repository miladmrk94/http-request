import React from "react";
const FullComment = ({ showFullData, onClickForDelete }) => {
  const showData = () => {
    if (showFullData) {
      return (
        <>
          <h1>{showFullData.name}</h1>
          <h4>{showFullData.title}</h4>
          <button onClick={() => onClickForDelete(showFullData.id)}>
            Delete
          </button>
        </>
      );
    }
    return <h2>chose a user</h2>;
  };

  return <div>{showData()}</div>;
};

export default FullComment;
