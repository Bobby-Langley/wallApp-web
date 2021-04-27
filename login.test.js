import React from 'react';
import { shallow } from 'enzyme';
import Login from './src/scenes/Login';
// import { validateEmailAndPasswordPresence } from '../extra/validations';
    describe('Login component tests', ()=> {
        const wrapper = shallow(<Login />);

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('Button')).toHaveLength(1);

            //Button should be of type button
            expect(wrapper.find('Button')
            .type().defaultProps.type)
            .toEqual('button');

            //Button should have matching text
            expect(wrapper.find('Button').text()).toEqual('LOGIN');
        });

        // it('should have input for email and password', ()=> {
        //     //Email and password input field should be present
        //     expect(wrapper.find('input#email')).toHaveLength(1);
        //     expect(wrapper.find('input#password')).toHaveLength(1);
        // });


        

        // it('should have an empty email and password state var', ()=> {
        //     //Optionally test to check if password and email are empty strings on 
        //        setup
        //     expect(wrapper.state('email')).toEqual('');
        //     expect(wrapper.state('password')).toEqual('');
        // });

        // it('should test email and password presence', () => {

        //      //should return true 
        //      expect(validateEmailAndPasswordPresence('email@email.com', 
        //      'password').toEqual(true);

        //      //should return false
        //       expect(validateEmailAndPasswordPresence('', 
        //      '').toEqual(false)
        // })

    })