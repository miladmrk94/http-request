import React from "react";
const FullComment = ({ fullComment }) => {
  return (
    <div className="boxOne">
      {fullComment ? (
        fullComment.map((i) => {
          return (
            <div key={i.id}>
              <h3>{i.userId}</h3>
              <h3>{i.body}</h3>
            </div>
          );
        })
      ) : (
        <h3>loding...</h3>
      )}
    </div>
  );
};

export default FullComment;
