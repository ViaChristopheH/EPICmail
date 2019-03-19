import express from 'express';
import messagefx from '../controllers/messagecontrollers';

const route = express.Router();

// create/send an email
route.post('/', messagefx.sendMail);

// Fetch all received emails
route.get('/', messagefx.allMails);

// Fetch all unread received emails
route.get('/unread', messagefx.unreadEmails);

// Fetch all sent emails
route.get('/sent', messagefx.sentMails);

// Fetch a specific email record
route.get('/:id', messagefx.specificEmail);

// Delete a specific email record
route.delete('/:id', messagefx.deleteAmail );

export default route;