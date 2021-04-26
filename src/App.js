import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "firebase";
import "./App.css";
import { Col, Layout, Row } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Login from "./scenes/Login";
import SignUp from "./scenes/Signup";
import Home from "./scenes/Home";
import Navbar from "./components/navbar";
import UpdatePost from "./scenes/UpdatePost";
const { firebaseConfig } = require("./config");

firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();
export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const userName =
    !user || !user.displayName
      ? " user that didn't sign in with Google."
      : user.displayName;

  return (
    <>
      <UserContext.Provider value={{ user, setUser, firebaseAuth }}>
        <Router>
          <Layout>
            <Header >
              <Row justify="space-between">
                <Col span={6} style={{color:"grey"}}>  <h1 >
                    <Link className="welcome" to="/" > <img style={{marginRight: "-15px"}} width={75} height={75} src="\TSL-logo.png"></img> <img  width={170} height={40} src="\wallappLogo.png"></img>   </Link>
                  </h1>
                  </Col>
                  <Col className="welcome" span={6} style={{float:"center"}}>
                  {!user ? (
            <h1> Welcome, to the Wall App, Guest. </h1>   
          ) : (           
              <h1>
                Welcome, {userName}
              </h1>
              )}
        </Col>
              
            
            <Col span={6}  style={{float:"right"}}>
                  <Navbar />
                </Col>
                </Row>
            </Header>
            <Row justify="space-around">
            <Col span={24}>
                <Content style={{ padding: "24px", minHeight: "80vh"  }}>
                  <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/editPost/:mode/:id" component={UpdatePost}/>
                    <Route path="/" component={Home} />
                  </Switch>
                </Content>
              </Col>
            </Row>
            <Footer flex="1" style={{textAlign: "center", color: "#FFF", flex: "1", marginTop: "auto"}}>
              ©2021 Created by Bobby Langley
            </Footer>
          </Layout>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
