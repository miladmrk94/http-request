import React, { useState, useEffect } from "react";

import "./App.css";
import Comment from "./Components/Comment";
import FullComment from "./Components/FullComment";
import NewComment from "./Components/NewComment";
import axios from "axios";

function App() {
  const [comment, setComment] = useState(null);
  const [fullComment, setFullComment] = useState([]);

  const clickHandler = (id) => {
    console.log("id:" + id);
    const set = comment.filter((i) => {
      return i.id === id;
    });
    setFullComment(set);
  };

  useEffect(() => {
    // هندل کردن با تن و کش
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => {
    //     setComment(res.data.slice(0, 4));
    //   })
    //   .catch((eer) => {
    //     console.log(eer);
    //   });

    // هندل کردن با ایسینگ اویت
    const getComment = async () => {
      try {
        const allData = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setComment(allData.data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, []);

  console.log(fullComment);
  return (
    <div className="App">
      <section className="boxTwo">
        {comment ? (
          comment.map((i) => {
            return (
              <Comment
                key={i.id}
                name={i.title}
                email={i.id}
                onClick={() => clickHandler(i.id)}
              />
            );
          })
        ) : (
          <h3>Loding...</h3>
        )}
      </section>
      <FullComment fullComment={fullComment} />
      <NewComment />
    </div>
  );
}

export default App;
