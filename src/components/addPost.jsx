import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Col, Row, Space } from "antd";
import Search from "antd/lib/input/Search";

function NewPost({ setPosts, setLoading }) {
  const [newPost, setNewPost] = useState(null);
  const { user } = useContext(UserContext);
  function addPost() {
    if (newPost && newPost.post && newPost.post.trim()) {
      setLoading(true);
      fetch("https://wallapp-api-e7762.web.app/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
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
    setNewPost(null);
  }
  
  return (
    <>
      <Row justify="center">
        <Col span={10}>
          <Space direction="vertical">
            <Search
              placeholder="Add posts here"
              allowClear
              hoverable
              enterButton="Post"
              style={{ width: 400 }}
              size="large"
              onSearch={addPost}
              value={newPost ? newPost.post : null}
              onChange={(e) =>
                setNewPost({ post: e.target.value, userId: user.uid })
              }
            />
          </Space>
        </Col>
      </Row>
    </>
  );
}

export default NewPost;
