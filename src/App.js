import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase";
import "./App.css";
import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import Login from "./scenes/Login";
import SignUp from "./scenes/Signup";
import Home from "./scenes/Home";
import Navbar from "./components/navbar";
import WelcomeLine from "./components/welcomeLine";
import UpdatePost from "./scenes/UpdatePost";
import Title from "antd/lib/typography/Title";
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
            <Navbar style={{ backgroundColor: "white" }} />
            <Content style={{ padding: "0 50px", minHeight: "80vh" }}>
              <Title style={{ textAlign: "center", padding: "10px" }}>
                <WelcomeLine />
              </Title>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/editPost/:mode/:id" component={UpdatePost} />
                <Route path="/" component={Home} />
              </Switch>
            </Content>
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
