# Welcome

Welcome to my Wall App! 

The SilverLogic gave the assignment of creating an app that that allows users to register, login, and write on a wall.

# About

So here it is...

This is a web app made with the intention of meeting all the requirements of the assignment. The initial idea was just to "create" and "read" posts from the database, however I took it one step further and made it so authenticated users could also update and delete their posts.

## Requirements

The app needed to meet a few requirements:

    -Registration and Login: Anonymous users can create a new user and this new user receives a welcome email. New users can then log in.

    -Wall (authed):  After logging in, a user can post messages on the site-wide wall, similar to a facebook wall except there is only 1 wall for the entire site.  

    -Wall (guest): Guests as well as authed users can see all of the messages on the wall.

    -Write automated tests to confirm the functionality of the above requirements.  


## What went in...

The app is written in Javascript, HTML, and CSS using node, express, and react. The frontend and backend API are deployed and hosted using Firebase. Authentication is handled through Firebase and the app is connected to a Firestore database. Ant Design was used for styling and additional components.

The app is fully deployed so you can access this app from anywhere, so feel free to use it on desktop, tablet, phone, etc. but at this point in time it is best viewed via desktop.


# How To

The app was purposely made to be fairly simple to use. 

When you go to the domain (https://wallapp-web.web.app/) for the first time you will be presented with the main home page. From here you can view all posts created on the app and you're given the links to sign up or log in.

In order to post on the Wall, first log in or sign up with username/password or Google login. Both are secure and your password will be encrypted and never revealed. If you log in with Google, however, you will be shown more personalization, as your Google metadata (such as your name and google photo) can be imported and shown on the site.

After logging in, you will be redirected back to the homepage that shows all posts, however now you've gained access to add a post of your own.

Posting on the app is fairly self-explanatory. Type what you'd like in the input field and then click "Post".

Your own posts will have a hamburger menu on the right side of each post that gives you the options to edit or delete each post. 

When you click "edit" you will be redirected to an update page that preloads your post in the input field so you can see what you're editing. The edit functionality is fairly self-explanatory, as well.

When you click "delete" you will be queried with whether or not you truly want to delete the post, as it can not be undone.


## By the way 

You will notice that you can only edit and delete your own posts, and can't alter others' posts. 

Log out when finished, but don't feel like you have to, as your log in state is saved in persistence so you won't have to log back in the next time you visit from the same browser.


Enjoy.

