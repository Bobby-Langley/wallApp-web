import { Spin } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import NewPost from "../components/addPost";
import Posts from "../components/posts";

function Home() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  // console.log(user)
  useEffect(() => {
    setLoading(true);

    fetch("https://wallapp-api-e7762.web.app/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log({ data });
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, [user]);
  return (
    <>
      {!user ? (
        <>
          <Link to="/login"> Login </Link>
          <Link to="/signup"> sign up </Link>
        </>
      ) : (
        <h1>Welcome, {user.displayName} </h1>
      )}
          <NewPost
            posts={posts}
            setPosts={setPosts}
            loading={loading}
            setLoading={setLoading}
          />
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <Spin style={{ textAlign: "center" }} size="large" />{" "}
        </div>
      ) : (
        <>
          <br />


          <Posts
            posts={posts}
            setPosts={setPosts}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      )}
    </>
  );
}

export default Home;
