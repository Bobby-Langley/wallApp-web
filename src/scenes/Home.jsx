import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Spin } from "antd";
import Title from "antd/lib/typography/Title";
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

  const userName =
    !user || !user.displayName
      ? " user that didn't sign in with Google."
      : user.displayName;

  return (
    <>
      <Row justify="center">
        <Col span={24}>
          {!user ? (
            <Col> <h1> Welcome, to the Wall App, Guest. </h1>
            <h3>In order to post on the wall, please either
              <Link to="/login"> Login </Link>
              or
              <Link to="/signup"> sign up </Link>.
              </h3>
            </Col>
          ) : (
            <Col span={14}>
              <h1>
                Welcome, {userName}
              </h1>
              <NewPost
                posts={posts}
                setPosts={setPosts}
                loading={loading}
                setLoading={setLoading}
              />
            </Col>
          )}
        </Col>

        <Col span={24}>
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
        </Col>
      </Row>
    </>
  );
}

export default Home;
