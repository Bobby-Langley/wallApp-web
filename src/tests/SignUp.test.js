import React, { useContext } from "react";
import * as ReactDOM from "react-dom";
import { UserContext } from "../App";
import SignUp from "../scenes/Signup"; 

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <UserContext.Provider value={false}>
      <SignUp />
    </UserContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
