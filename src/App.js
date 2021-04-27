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

  return (
    <>
      <UserContext.Provider value={{ user, setUser, firebaseAuth }}>
        <Router>
          <Layout>
            <Navbar />
            <Content style={{ padding: "0 50px", minHeight: "80vh" }}>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/editPost/:mode/:id" component={UpdatePost} />
                <Route path="/" component={Home} />
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center", color: "#FFF" }}>
              ©2021 Created by Bobby Langley
            </Footer>
          </Layout>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
