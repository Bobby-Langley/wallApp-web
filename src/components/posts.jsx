import { Dropdown, Button, Card, Col, List, Row, Menu, Spin } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { DeleteOutlined, MenuOutlined, EditOutlined } from "@ant-design/icons";
import {getSinglePost} from "./patchApiCall"



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

  function handleMenuClick(e) {
    console.log("click", {e});
  }
 
  const menu = (
    <Menu onClick={handleMenuClick()}>
      <Menu.Item key="1" onClick={()=> {return history.push("/editPost/update/" + post.id)}} icon={<EditOutlined />} > Edit Post 
       {console.log({post})}
      </Menu.Item>
      <Menu.Item key="2" onClick={()=> deletePost(post, setPosts, setLoading )} icon={<DeleteOutlined />}>
        Delete Post
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row type="flex" align="middle" justify="center" className="alignColumn">
        <Col span={12} className="alignColumn" >
            <Row type="flex" align="middle">
          <Col >
            <Title style={{ textAlign: "center" }} >Posts</Title>
            </Col>
            </Row>
          { !posts ? (loading) : (posts.map((post) => {
            return (
          
                <Card
                className="cardEffect"
                  hoverable
                  bordered
                  style={{ background: "linear-gradient(to right,rgba(40, 163, 208, .5), rgba(40, 163, 208, 0) )", margin: "24px"}}
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
                        <Button style={{background: "transparent", border: "none", boxShadow: "none"}}
                          className="ant-dropdown-link"
                          onClick={(e) => e.preventDefault(setPost(post)) }
                        >
                          <MenuOutlined/>
                        </Button>
                      </Dropdown>
                    ) : null
                }
                >
                </Card>
            );
        }))}
        </Col>
      </Row>
    </>
  );
}

export default Posts;
