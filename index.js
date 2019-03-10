import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const port = process.env.PORT || 7000;

app.listen(port, () => console.log('The App is live on port 7000...'));

export default app;