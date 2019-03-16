import express from 'express';
import bodyParser from 'body-parser';
import messagesroutes from './server/routes/messagesroutes';
import usersroutes from './server/routes/usersroutes';

// By instantiating express
const app = express();

// By setting the port
const port = process.env.PORT || 7000;

// By configuring the app to user bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// By registering the routes in app
//app.use(messagesroutes);
app.use('/', messagesroutes);
//app.use(usersroutes);
app.use('/', usersroutes)

// By starting the server
app.listen(port, () => console.log('The App is live on port 7000...'));

// By exporting the app for the testing purposes
export default app;