'use strict'
const functions = require("firebase-functions");
const admin = require("firebase-admin")
admin.initializeApp()
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const APP_NAME = 'The Wall App'

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
   
      const email = user.email;
      const displayName = user.displayName;
      
    
      return sendWelcomeEmail(email, displayName);
    });

    async function sendWelcomeEmail(email, displayName) {
        const mailOptions = {
          from: `${APP_NAME} <noreply@firebase.com>`,
          to: email,
        };
      
        
        mailOptions.subject = `Welcome to ${APP_NAME}!`;
        mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}.` 

        "In order to post on the wall, you must be signed in. To edit or delete your posts, look for the hamburger menu icon to the right of your text." 
        
       "For any questions, comments, or concerns please forward your query to TSlWallApp2021@gmail.com." 
       
       "Thanks!";
        await mailTransport.sendMail(mailOptions);
        functions.logger.log('New welcome email sent to:', email);
        return null;
      }

