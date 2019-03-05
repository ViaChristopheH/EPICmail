import express from 'express';
import messagefx from '../controllers/'

const route = express.Router();

// create/send an email
route.post('/', messagefx.sendEmail);

// create a user account
route.post('/', messagefx.signUp);

// Login a user
route.post('/', messagefx.logIn );

// Fetch all received emails
route.get('/', messagefx.receivedEmails );

// Fetch all unread received emails
route.get('/', messagefx.unreadEmails );

// Fetch all sent emails
route.get('/', messagefx.sentEmails  );

// Fetch a specific email record
route.get('/:id', messagefx.specificEmails);

// Delete a specific email record
route.delete('/:id', messagefx.deleteEmail );

export default route;