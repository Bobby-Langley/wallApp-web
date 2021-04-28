import React, { useContext } from "react";
import { Menu, Layout, Row, Col, Typography } from "antd";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import Avatar from "antd/lib/avatar/avatar";
import { Header } from "antd/lib/layout/layout";
const { Paragraph } = Typography;
const rightStyle = { position: "absolute", top: 0, right: 0 };

function Navbar() {
  const { user, setUser, firebaseAuth } = useContext(UserContext);
  const history = useHistory();
  function signOut() {
    firebaseAuth
      .signOut()
      .then(() => {
        setUser(null);
        localStorage.setItem("user", null);
        return history.push("/");
      })
      .catch((error) => console.log(error));
  }
  const userName =
    !user || !user.displayName
      ? " user that didn't sign in with Google."
      : user.displayName;

  const userImage =
    !user || !user.photoURL ? (
      <Avatar
        size={36}
        src={
          "https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg"
        }
      />
    ) : (
      <Avatar size={32} src={user && user.photoURL} />
    );
  return (
    <>
      <Header style={{backgroundColor: "white"}}>
        <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8} style={{ float: "left" }}>
            <Link className="welcome" to="/">
              <img
                style={{ marginRight: "-15px", paddingBottom: "5px"}}
                width={75}
                height={75}
                src="\TSL-logo.png"
              ></img>
              <img width={170} height={40} src="\wallappLogo 2.png"></img>
            </Link>
          </Col>

          <Col span={8} style={{ float: "right" }}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={rightStyle}
            >
              {user ? (
                <Menu.Item
                  style={{ fontSize: "16px" }}
                  key="4"
                  onClick={() => signOut()}
                >
                  <Avatar size={36} src={userImage} /> Logout
                </Menu.Item>
              ) : (
                <>
                  <Menu.Item style={{ fontSize: "16px" }} key="2">
                    <Link to="/login">Log In</Link>
                  </Menu.Item>
                  <Menu.Item style={{ fontSize: "16px" }} key="3">
                    <Link to="/signup">Sign Up</Link>
                  </Menu.Item>
                </>
              )}
            </Menu>
          </Col>
        </Row>
      </Header>
    </>
  );
}

export default Navbar;
