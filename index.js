import express from 'express';
import bodyParser from 'body-parser';
import messagesroutes from './server/routes/messagesroutes';
import usersroutes from './server/routes/usersroutes';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

// By instantiating express
const app = express();

// BY calling the swagger file
const swaggerDocument = YAML.load('./server/documenting/swaggerdoc.yml');


// By setting the port
const port = process.env.PORT || 7000;

// By configuring the app to user bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// By registering the routes in app
app.use('/api/v1/messages', messagesroutes);
app.use('/api/v1/auth', usersroutes)
app.use('/epicmail/api/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// By starting the server
app.listen(port, () => console.log('The App is live on port 7000...'));

// By exporting the app for the testing purposes
export default app;