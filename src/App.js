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
const { firebaseConfig } = require("./config");

firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();
export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <>
      <UserContext.Provider value={{ user, setUser, firebaseAuth }}>
        <Router>
          <Layout>
            <Header style={{ color: "black" }}>
              <Row justify="space-between">
                <Col span={7}>  <h1 >
                    <Link className="welcome" to="/" style={{fontSize:"26px"}} > <img style={{marginRight: "7px"}} width={24} height={24} src="\circle-cropped.png"></img> TSL Wall App </Link>
                  </h1>
                  </Col>
            
            <Col span={17} style={{float:"right"}}>
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
                    <Route path="/" component={Home} />
                  </Switch>
                </Content>
              </Col>
            </Row>
            <Footer style={{ textAlign: "center" }}>
              ©2021 Created by Bobby Langley
            </Footer>
          </Layout>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
