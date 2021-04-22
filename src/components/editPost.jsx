import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Col, Row, Space } from "antd";
import Search from "antd/lib/input/Search";

function UpdatePost({ post, setPosts, setLoading }) {
  const [updatedPost, setUpdatedPost] = useState(null);
  const { user } = useContext(UserContext);
  function updatePost() {
    if (updatedPost && updatedPost.post && updatedPost.post.trim()) {
      setLoading(true);
      fetch("https://wallapp-api-e7762.web.app/posts/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      })
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          console.log("error:", e);
        });
    }
    setUpdatedPost(null);
  }
  return (
    <>
      <Row justify="center">
        <Col span={10}>
          <Space direction="vertical">
            <Search
              placeholder="Add posts here"
              allowClear
              enterButton="Post"
              style={{ width: 400 }}
              size="large"
              onSearch={updatePost}
              value={updatedPost ? updatedPost.post : null}
              onChange={(e) =>
                setUpdatedPost({ post: e.target.value, userId: user.uid })
              }
            />
          </Space>
        </Col>
      </Row>
    </>
  );
}

export default UpdatePost;
