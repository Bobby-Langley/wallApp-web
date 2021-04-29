import * as firebase from 'firebase'
import { render, screen, container } from '@testing-library/react';
import Login from '../src/scenes/Login'
const onAuthStateChanged = jest.fn()
import React, { useContext } from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { UserContext } from "./App";
Enzyme.configure({ adapter: new Adapter() });


export const MyComponent = () => {
  const { setUser } = useContext(UserContext);

  return <div data-test="my-component">{setUser}</div>;
};

it("renders the correct text", () => {
  const wrapper = shallow(
    <MyContext.Provider value={{ myVal: "foobar" }}>
      <MyComponent />
    </MyContext.Provider>
  ).dive();
  expect(wrapper.text()).toEqual("foobar"); // expected "foobar" received ""
});
test("displays name of current user", function test() {
  render(
    <Login></Login>
  )
  expect(screen.getByText("Bobby Langley")).toBeVisible()
})

const getRedirectResult = jest.fn(() => {
  return Promise.resolve({
    user: {
      displayName: 'redirectResultTestDisplayName',
      email: 'redirectTest@test.com',
      emailVerified: true
    }
  })
})

const sendEmailVerification = jest.fn(() => {
  return Promise.resolve('result of sendEmailVerification')
})

const sendPasswordResetEmail = jest.fn(() => Promise.resolve())

const createUserWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of createUserWithEmailAndPassword')
})

const signInWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of signInWithEmailAndPassword')
})

const signInWithRedirect = jest.fn(() => {
  return Promise.resolve('result of signInWithRedirect')
})

const initializeApp = jest
  .spyOn(firebase, 'initializeApp')
  .mockImplementation(() => {
    return {
      auth: () => {
        return {
          createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          currentUser: {
            sendEmailVerification
          },
          signInWithRedirect
        }
      }
    }
  })

jest.spyOn(firebase, 'auth').mockImplementation(() => {
  return {
    onAuthStateChanged,
    currentUser: {
      displayName: 'testDisplayName',
      email: 'test@test.com',
      emailVerified: true
    },
  }
})



