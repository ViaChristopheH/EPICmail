import messages from '../data/messagesRecords';
import sent from '../data/sentmessages';
import inbox from '../data/inbox';
import Joi from 'joi';

// Create/Send an email

const sendMail = (req, res) => {
    const schema = {
        subject: Joi.string().required().min(3),
        message: Joi.string().min(3).required(),
    }

    Joi.validate(req.body, schema).then(() => {
        const message = {
            id: messages.length + 1,
            createdOn: req.body.createdOn,
            subject: req.body.subject,
            message: req.body.message,
            parentMessageId: req.body.parentMessageId
        };
    
        messages.push(message);
        res.status(201).send({
            status: 201,
            data: [message]
        });
    
    }).catch(error => res.status(400).send({
        status: 400,
        error: {"message": error.details[0].message}
    }) )
 
}

// Fetch all received mails

const allMails = (req, res) => {
    const allReceived = [];
    inbox.forEach((inbox) => {
     const message = messages.find(m => m.id == inbox.messageId);   
    
    if(message) 
    {
        allReceived.push(message) 
    }
    })
    if(allReceived.length == 0) {
        res.send({
            status: 404,
            error: "You have no received message"
        })
    }
    res.send({
        status: 200,
        data: allReceived
    })
};

// Fetch all received unread emails

const unreadEmails = (req, res) => {
    const unreadmessages = [];
    inbox.forEach((inbox) => {
     const message = messages.find(m => m.id == inbox.messageId);   
    if(message) 
    {
     if(message.status == 'sent') {
        unreadmessages.push(message) 
     }
    }
    })

    if(unreadmessages.length == 0) {
        res.send({
            status: 404,
            error:"Message not found!"
        })
    }
    res.send({
        status: 200,
        data: unreadmessages
    })
}

// Fetch all sent emails

const sentMails = (req, res) => {
    const allSent = [];
    sent.forEach((sent) => {
     const message = messages.find(m => m.id == sent.messageId);   
    if(message) 
    {
        allSent.push(message) 
    }
    })
    if(allSent.length == 0) {
        res.send({
            status: 404,
            error: "You have no sent message"
        })
    }
    res.send({
        status: 200,
        data: allSent
    })
};
// Fetch a specific email record

const specificEmail = (req, res) => {
    const message = messages.find(m => m.id == parseInt(req.params.id));
    if(!message) {
        return res.status(404)
        .send({
            status: 404,
            error: 'The message with the given ID was not found'
        });
    }
    return res.status(200).send({
        status: 200,
        data: [{
            id: 6,
            createdOn : 'Nov 7, 2018',
            subject : 'Completion of the work',
            message :'I would like to kindly let you know that the requested work is now completed. Thank you!',
            parentMessageId : 3,
            status : 'sent'

        }]
    });
    };
  
// DELETE a specific email record

const deleteAmail = (req, res) => {
    const message = (messages.find(m => m.id === parseInt(req.params.id)));
    if(!message) 
    return res.status(404).send({
        status: 404,
        error:'The message with the given ID was not found'   
    })
    
    const index = messages.indexOf(message);
    messages.splice(index, 6);

    return res.send({
        status: 200,
        data:[message]
    });

    
};

export default { sendMail, allMails, unreadEmails, sentMails, specificEmail,deleteAmail }