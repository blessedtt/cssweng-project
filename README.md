# 9 Works Inventory Management System

Developed By Team 1 - CSSWENG S11
This is a project for 9 Works Hardware, also in fulfillment of the CSSWENG course.

Currently hosted at Render: https://nineworks-inventory.onrender.com/

This program is an inventory management system for use of 9 Works Hardware.

Developed in React and Express, this application allows the user to add, edit, search, and remove products.
Also includes user-based permission for pages.

For testing:
install all dependencies on both `client` and `server` folders using ``npm install`` on their directories.

On the client terminal:
> run `npm start`

On the server terminal:
> run `npx prisma generate` first, and then `npm run devStart`
> if you want to run without nodemon, build the ts files into js with `npm run build` and then `npm start`

Once installed, use `npm start` on the client terminal, and `npm run start` on the server terminal.

The Planetscale connection has been removed in order to protect access of the database.
