import React, { useContext } from "react";
import * as ReactDOM from "react-dom";
import { UserContext } from "../App";
import Login from "../scenes/UpdatePost"; 

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
      <UpdatePost />
    </UserContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
