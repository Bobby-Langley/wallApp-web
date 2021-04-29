const test = require("firebase-functions-test")();
import {sendWelcomeEmail} from '../functions/index'
// Mock the configuration
test.mockConfig({
  gmail: {
    email: "testsender@test.com",
    password: "testpassword"
  }
});

// Mock nodemailer
const nodemailer = require("nodemailer");

const sendEmailMock = jest.fn(mailOptions => {
  console.log("sendMail mock called with", mailOptions);
  return Promise.resolve();
});
nodemailer.createTransport = jest.fn(address => {
  console.log(`createTransport mock called with ${address}`);
  return {
    sendMail: sendEmailMock
  };
});

const mockEvent = {
  data: {
    email: "test@test.com",
    displayName: "Test User"
  }
};

const myFunctions = require('../functions/index');

describe("Correct emails", () => {
  beforeEach(() => {
    sendEmailMock.mockClear();
  });
  it("Should send welcome email", () => {
    myFunctions.sendWelcomeEmail(mockEvent).then(() => {
      expect(sendEmailMock).toHaveBeenCalled();
      const argumentToMock = sendEmailMock.mock.calls[0][0];
      expect(mockEvent.data.email).toEqual(argumentToMock.to);
      expect(argumentToMock.subject).toEqual(
        expect.stringContaining("Welcome")
      );
      expect(argumentToMock.text).toEqual(
        expect.stringContaining(mockEvent.data.displayName)
      );
    });
  });

  
});

test('<insert your method name> that calls firebase.auth().getRedirectResult', async () => {
  const result = await sendWelcomeEmail.getRedirectResult() // (i.e. your method that calls firebase.auth().getRedirectResult)
  expect(result).toEqual({
    user: {
      displayName: 'redirectResultTestDisplayName',
      email: 'redirectTest@test.com',
      emailVerified: true
    }
  })
  expect(firebase.auth).toHaveBeenCalled()
  
})