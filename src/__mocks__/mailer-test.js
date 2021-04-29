const nodemailer = require('nodemailer');
const transport = nodemailerMock.createTransport();

module.exports = {
  send: async () => {
    // create a transport
    const transport = nodemailer.createTransport({
      host: gmail,
      port: 25,
      secure: false,
      logger: true,
      debug: true,
      ignoreTLS: true // add this 
    });
    // send an email
    await transport.sendMail({ to: 'justin@to.com', from: 'justin@from.com' });
  },
};
