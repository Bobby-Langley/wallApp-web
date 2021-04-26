import React, { useContext } from "react";
import { Menu, Layout, Divider } from "antd";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import Avatar from "antd/lib/avatar/avatar";
import { 
  UserOutlined 
} from "@ant-design/icons";
const { Sider } = Layout;
const rightStyle = {position: 'absolute', top: 0, right: 0}

function Navbar() {
  const { user, setUser, firebaseAuth } = useContext(UserContext);
  const history = useHistory();
  function signOut() {
    firebaseAuth
      .signOut()
      .then(() => {
        setUser(null);
        localStorage.setItem("user", null) 
        return history.push("/")
      })
      .catch((error) => console.log(error));
  }
  const userImage =
    !user || !user.photoURL ? (
      <Avatar size={36} src={"https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg"} />
    ) : (
      <Avatar size={32} src={user && user.photoURL} />
    );
  return (
    <>
      <Menu mode="horizontal" defaultSelectedKeys={["1"]} style={rightStyle}>
         
        { user ? (<Menu.Item style={{fontSize:"16px"}} key="5" icon={<UserOutlined />}>
          <Link  to="/user/">Your Posts</Link>
        </Menu.Item>) : ( <Menu.Item></Menu.Item> )}
        
        {user ? (
          <Menu.Item style={{fontSize:"16px"}} key="4" onClick={() => signOut() }>
            {<Avatar size={36} src={userImage} />} Logout
          </Menu.Item>
        ) : (
          <>
            <Menu.Item style={{fontSize:"16px"}} key="2">
              <Link  to="/login">Log In</Link>
            </Menu.Item>
            <Menu.Item style={{fontSize:"16px"}} key="3">
              <Link to="/signup">Sign Up</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </>
  );
}

export default Navbar;