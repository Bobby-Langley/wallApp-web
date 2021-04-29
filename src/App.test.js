import { render, screen, container } from '@testing-library/react';
import React, {useContext} from 'react'
import * as ReactDOM from 'react-dom'
import App from './App';
import Posts from './components/posts';
const UserContext = React.createContext()

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
}



test("displays name of current user", function test() {
  render(
    <UserContext.Provider value={{ user: { displayName: "Bobby Langley" } }}>
      <UserDisplayName />
    </UserContext.Provider>
  )
  expect(screen.getByText("Bobby Langley")).toBeVisible()
})


it('renders', () => {
  const user = null
  render(
    <Posts/>
  )
  expect(screen.getByText("Bobby Langley")).toBeVisible()
  expect(user).toBeNull();
  expect(NewPost).toBeHidden();
});



function UserDisplayName() {
  const { user } = useContext(UserContext)
  return <p>{user.displayName || null}</p>
}



