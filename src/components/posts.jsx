import { Dropdown, Button, Card, Col, List, Row, Menu } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { UserOutlined, MenuOutlined, EditOutlined } from "@ant-design/icons";

function Posts({ posts, setPosts, loading, setLoading }) {
  const { user } = useContext(UserContext);

  function handleMenuClick(e) {
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<EditOutlined />}>
        Edit Post
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Delete Post
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        View Post
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row justify="center">
        <Col justify="center">
          <Title>Posts</Title>
          <br />
        </Col>
        {posts.map((post) => {
          return (
            <Col span={8}>
              <Card
                hoverable
                bodyStyle={{ visibility: "hidden" }}
                style={{ margin: "24px" }}
                key={post.id}
                title={post.post}
                extra={
                  user && user.uid == post.userId ? (
                    <Dropdown
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      overlay={menu}
                      trigger={["click"]}
                    >
                      <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        <MenuOutlined />
                      </a>
                    </Dropdown>
                  ) : null
                }
              >
                {" "}
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Posts;
