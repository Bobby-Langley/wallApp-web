import { Card, Col, List } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function Posts({ posts, setPosts, loading, setLoading }) {
  const { user } = useContext(UserContext);
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  return (
    <>
      <Title>Posts</Title>
      {posts.map((post) => {
        return (
          <Col span={8}>
            <Card
              hoverable
              style={{ margin: "24px" }}
              key={post.id}
              title={<Link to={"/post/" + post.id}>{post.name}</Link>}
            ></Card>
          </Col>
        );
      })}
    </>
  );
}

export default Posts;
