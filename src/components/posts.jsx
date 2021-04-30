import React, { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import NewPost from "./newPost";
import { DeleteTwoTone, MenuOutlined, EditTwoTone } from "@ant-design/icons";
import {
  Dropdown,
  Button,
  Card,
  Col,
  Row,
  Menu,
  message,
  Popconfirm,
} from "antd";

function confirm(post, setPosts, setLoading) {
  deletePost(post, setPosts, setLoading);
  message.success("Post Deleted.");
}

function cancel(e) {
  message.error("Possibly a sound decision.");
}

function deletePost(post, setPosts, setLoading) {
  setLoading(true);
  const API_URL = `https://wallapp-api-e7762.web.app/posts/${post.id}`;
  const params = {
    method: "DELETE",
  };
  fetch(API_URL, params)
    .then((res) => res.json())
    .then((data) => {
      setPosts(data);
      setLoading(false);
    })
    .catch((err) => {
      console.log("error deleting post: ", err);
      setLoading(false);
    });
}

function Posts({ posts, setPosts, loading, setLoading }) {
  const [post, setPost] = useState();
  const history = useHistory();
  const { id } = useParams();
  const { user } = useContext(UserContext);

  function handleMenuClick(e) {}

  const menu = (
    <Menu onClick={handleMenuClick()} loading={loading}>
      <Menu.Item
        key="1"
        onClick={() => {
          return history.push("/editPost/update/" + post.id);
        }}
        icon={<EditTwoTone />}
      >
        Edit Post
      </Menu.Item>
      <Menu.Item
        key="2"
        
      >
        <Popconfirm
          title="Are you sure about that? This can't be undone."
          onConfirm={() => confirm(post, setPosts, setLoading)}
          onCancel={cancel}
          okText="Yes, delete post."
          cancelText="No, I'm not sure."
        >
         <DeleteTwoTone /> Delete Post
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row type="flex" justify="center" >
        <Col span={14} >
          {user ? (
            <>
              <NewPost
                posts={posts}
                setPosts={setPosts}
                loading={loading}
                setLoading={setLoading}
              />
            </>
          ) : null}
          <br />
          <br />
          {posts &&
            posts.map((post) => {
              return (
                <Card
                  hoverable
                  bordered
                  style={{
                    background:
                      "linear-gradient(to right,rgba(40, 163, 208, .5), rgba(40, 163, 208, 0) )",
                    margin: "24px",
                  }}
                  key={post && post.id}
                  title={post && post.post}
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
                        <Button
                          style={{
                            background: "transparent",
                            border: "none",
                            boxShadow: "none",
                          }}
                          className="ant-dropdown-link"
                          onClick={(e) => e.preventDefault(setPost(post))}
                        >
                          <MenuOutlined />
                        </Button>
                      </Dropdown>
                    ) : null
                  }
                ></Card>
              );
            })}
        </Col>
      </Row>
    </>
  );
}

export default Posts;
