import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Login from './scenes/Login';

test(`Login`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<Login>Hi</Login>, div);
    console.log(div.querySelector('button'));
})