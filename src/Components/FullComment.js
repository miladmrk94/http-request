import axios from "axios";
import React, { useEffect, useState } from "react";
const FullComment = ({ showFullData, onClickForDelete }) => {
  console.log(showFullData, "=id");
  const [checkData, setCheckData] = useState(null);

  const onClick = () => {
    onClickForDelete();
    setCheckData(null);
  };

  useEffect(() => {
    console.log(showFullData, "EEE");
    if (showFullData) {
      const myData = async () => {
        await axios
          .get(`/comments/${showFullData}`)
          .then((res) => {
            setCheckData(res.data);
          })
          .catch((err) => console.log(err));
      };
      myData();
    }
  }, [showFullData]);

  return (
    <div>
      {checkData ? (
        <div key={checkData.id}>
          <h1>{checkData.name}</h1>
          <h4>{checkData.title}</h4>
          <button onClick={onClick}>Delete</button>
        </div>
      ) : (
        <h2>chose a user</h2>
      )}
    </div>
  );
};

export default FullComment;
