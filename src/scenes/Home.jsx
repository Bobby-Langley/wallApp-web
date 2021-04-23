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

  return (
    <>
      <Row justify="center">
        <Col>
          <h3>
            In order to post on the wall, please either
            <Link to="/login"> Login </Link>
            or
            <Link to="/signup"> sign up </Link>.
          </h3>
        </Col>
      </Row>
      
      <Row justify="center">
        <Col>
          {user ? (
            <NewPost
              posts={posts}
              setPosts={setPosts}
              loading={loading}
              setLoading={setLoading}
            />
          ) : null}
        </Col>
      </Row>

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
    </>
  );
}

export default Home;
