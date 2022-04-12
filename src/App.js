import React, { useState, useEffect } from "react";

import "./App.css";
import Comment from "./Components/Comment";
import FullComment from "./Components/FullComment";
import NewComment from "./Components/NewComment";
import toast, { Toaster } from "react-hot-toast";
import http from "./Services/httpServices";

function App() {
  const [comment, setComment] = useState(null);
  const [fullComment, setFullComment] = useState(null);

  const clickHandler = (id) => {
    // console.log("id:" + id);
    // const set = comment.filter((i) => {
    //   return i.id === id;
    // });
    // setFullComment(set);
    setFullComment(id);
  };

  const deleteHandler = () => {
    http
      .delete(`/comments/${fullComment}`)
      .then((res) => {
        http.get("/comments").then((res) => {
          setComment(res.data);
        });
      })
      .catch((err) => console.log(err));
  };

  const submitHandlerNewComment = (newComment) => {
    http
      .post("/comments", newComment)
      .then((res) =>
        http.get("/comments").then((res) => {
          setComment(res.data);
        })
      )
      .catch((err) => console.log(err));
  };

  console.log(comment);
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
        const allData = await http.get("/comments");
        toast.success("Hello Milad");

        setComment(allData.data);
      } catch (error) {
        toast.error("server madarkharabe!!.");
      }
    };
    getComment();
  }, []);

  console.log(fullComment);
  return (
    <div className="App">
      <Toaster />
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
      <FullComment fullComment={fullComment} deleteHandler={deleteHandler} />
      <NewComment submitHandlerNewComment={submitHandlerNewComment} />
    </div>
  );
}

export default App;
