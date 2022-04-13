import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import AddComment from "./Components/AddComment";
import Comment from "./Components/Comment";
import FullComment from "./Components/FullComment";

const App = () => {
  const [data, setData] = useState(null);
  const [showFullData, setShowFullData] = useState(null);

  const clickHandler = (id) => {
    console.log("clicked:", id);
    axios
      .get(`http://localhost:3002/comments/${id}`)
      .then((res) => {
        setShowFullData(res.data);
      })
      .catch();
  };

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:3002/comments/${id}`)
      .then(() => {
        axios
          .get("http://localhost:3002/comments")
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    console.log("hi");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/comments")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="box">
      <div className="divs">
        {data ? (
          data.map((i) => {
            return (
              <Comment
                key={i.id}
                name={i.name}
                phone={i.phone}
                onClick={() => clickHandler(i.id)}
              />
            );
          })
        ) : (
          <h2>Loding...</h2>
        )}
      </div>
      <div className="divs">
        <FullComment
          showFullData={showFullData}
          onClickForDelete={deleteHandler}
        />
      </div>
      <div className="divs">
        <AddComment />
      </div>
    </div>
  );
};

export default App;
