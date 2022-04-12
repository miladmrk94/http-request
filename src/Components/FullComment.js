import React, { useEffect, useState } from "react";
import http from "./../Services/httpServices";

const FullComment = ({ fullComment, deleteHandler }) => {
  const [comment, setComment] = useState(null);

  const clickHandler = () => {
    deleteHandler();
    setComment(null);
  };

  useEffect(() => {
    if (fullComment) {
      const getFullComment = async () => {
        const { data } = await http.get(`comments/${fullComment}`);
        setComment(data);
      };
      getFullComment();
    }
  }, [fullComment]);

  const renderComment = () => {
    if (comment) {
      return (
        <div key={comment.id}>
          <h3>{comment.id}</h3>
          <h3>{comment.body}</h3>
          <button onClick={clickHandler}>Delete</button>
        </div>
      );
    } else {
      return <h3>chose Comment</h3>;
    }
  };

  return <div className="boxOne">{renderComment()}</div>;
};

export default FullComment;
