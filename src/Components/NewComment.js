import React from "react";
const NewComment = () => {
  return (
    <div className="boxOne">
      <form>
        <input placeholder="name" />
        <input placeholder="email" />
        <input placeholder="content" />
        <button>add</button>
      </form>
    </div>
  );
};

export default NewComment;
