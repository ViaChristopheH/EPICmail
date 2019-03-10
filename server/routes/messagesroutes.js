import express from 'express';
import messagefx from '../controllers/specificMail'

const route = express.Router();

// create/send an email
route.post('/api/v1/messages/', messagefx.sendEmail);


// Fetch all received emails
route.get('/api/v1/messages', messagefx.receivedEmails );

// Fetch all unread received emails
route.get('/api/v1/messages/unread', messagefx.unreadEmails );

// Fetch all sent emails
route.get('/api/v1/messages/sent', messagefx.sentEmails  );

// Fetch a specific email record
route.get('/api/v1/messages/:id', messagefx.specificEmail);

// Delete a specific email record
route.delete('/api/v1/messages/:id', messagefx.deleteEmail );

export default route;