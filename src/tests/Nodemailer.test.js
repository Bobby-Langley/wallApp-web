"use strict";

const { mock } = require("nodemailer");

test("Send an email using the mocked nodemailer", async () => {
  const mailer = require("./lib/mailer-test");

  await mailer.send();

  const sentEmails = mock.getSentMail();

  expect(sentEmails.length).toBe(1);

  expect(sentEmails[0].to).toBe("justin@to.com");
});
