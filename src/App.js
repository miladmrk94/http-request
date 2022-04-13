import React, { useEffect, useState } from "react";
import "./App.css";
import AddComment from "./Components/AddComment";
import Comment from "./Components/Comment";
import FullComment from "./Components/FullComment";
import http from "./Components/Services/httpServices";

const App = () => {
  const [data, setData] = useState(null);
  const [showFullData, setShowFullData] = useState(null);

  const clickHandler = (id) => {
    console.log("clicked:", id);
    setShowFullData(id);
  };

  const deleteHandler = () => {
    http
      .delete(`comments/${showFullData}`)
      .then(() => {
        http
          .get("comments")
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    console.log("hi");
  };

  const onSubmitHandler = (newData) => {
    http
      .post("/comments", newData)
      .then((res) => {
        http
          .get("/comments")
          .then((res) => {
            setData(res.data);
          })
          .catch();
      })
      .catch();
  };
  useEffect(() => {
    http
      .get("/comments")
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
        <AddComment onSubmitHandler={onSubmitHandler} />
      </div>
    </div>
  );
};

export default App;
