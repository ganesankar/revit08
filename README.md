Revit 08 -   JJCET 2008 IT Batch Community Portal. Built on React.JS (Redux), Node.JS, Express.JS, MongoDB (Mongoose), Multer, Passport and Bootstrap. Optimized for Mobile devices. 

Heroku Deployment Link : https://revit08.herokuapp.com

<p>You will need to create a .env file in your root folder with the following info : </p>
<pre><code>
MONGO_URI = "YOUR_OWN_MONGO_URI"
SECRET_OR_KEY = "YOUR_OWN_SECRET"
googleClientID = "YOUR_GOOGLECLIENTID_SECRET"
googleClientSecret = "YOUR_GOOGLECLIENT_SECRET"
</code></pre>

Quick Start

# Install dependencies for server

npm install

# Install dependencies for client

npm run client-install

# Run the client & server with concurrently

npm run dev

# Run the Express server only

npm run server

# Run the React client only

npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
