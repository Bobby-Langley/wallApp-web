import React, { useContext } from "react";
import { Menu, Layout, Row, Col, Typography } from "antd";

import { UserContext } from "../App";
import Paragraph from "antd/lib/typography/Paragraph";




function WelcomeLine(){
    const { user } = useContext(UserContext);
const userName =
    !user || !user.displayName
      ? " user (that didn't sign in with Google).."
      : user && user.displayName;

    return(
        <>
        <Col>
{!user ? (
              <Paragraph> Welcome, to the Wall App, Guest. </Paragraph>
            ) : (
              <Paragraph>Welcome, {userName}. </Paragraph>
            )}
          </Col>
</>
    )
}

export default WelcomeLine