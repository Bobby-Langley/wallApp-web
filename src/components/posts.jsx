import { Dropdown, Button, Card, Col, List, Row, Menu, Spin } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { UserOutlined, MenuOutlined, EditOutlined } from "@ant-design/icons";
import {getSinglePost} from "./editPost"



function deletePost(post, setPosts, setLoading) {
    {
      setLoading(true) ;
    }
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
        console.log("error updating item: ", err);
        setLoading(false);
      });
  }


function Posts({ posts, setPosts, loading, setLoading }) {
    const [post, setPost] = useState()
    const history = useHistory()
    const { id } = useParams()
  const { user } = useContext(UserContext);
useEffect(() => {
    getSinglePost(id)
})
  function handleMenuClick(e) {
    console.log("click", {e});
  }
 
  const menu = (
    <Menu onClick={handleMenuClick()}>
      <Menu.Item key="1" onClick={()=> {return history.push("/editPost/" + post.id)}} icon={<EditOutlined />} > Edit Post 
       {console.log({post})}
      </Menu.Item>
      <Menu.Item key="2" onClick={()=> deletePost(post, setPosts, setLoading )} icon={<UserOutlined />}>
        Delete Post
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        View Your Post
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row justify="center">
        <Col span={12} >
          <Col span={8}style={{ alignContent: "center" }}>
            <Title>Posts</Title>
            <br />
          </Col>
          {posts.map((post) => {
            return (
              <Col>
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
                          onClick={(e) => e.preventDefault(setPost(post)) }
                        >
                          <MenuOutlined />
                        </a>
                      </Dropdown>
                    ) : null
                }
                >
                </Card>
              </Col>
            );
        })}
        </Col>
      </Row>
    </>
  );
}

export default Posts;
