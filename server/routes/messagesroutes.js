import express from 'express';
import messagefx from '../controllers/messagecontrollers';

const route = express.Router();

// create/send an email
route.post('/api/v1/messages/', messagefx.sendMail);

// Fetch all received emails
route.get('/api/v1/messages', messagefx.allMails);

// Fetch all unread received emails
route.get('/api/v1/messages/unread', messagefx.unreadEmail);

// Fetch all sent emails
route.get('/api/v1/messages/sent', messagefx.sentMail);

// Fetch a specific email record
route.get('/api/v1/messages/:id', messagefx.specificEmail);

// Delete a specific email record
route.delete('/api/v1/messages/:id', messagefx.deleteAmail );

export default route;