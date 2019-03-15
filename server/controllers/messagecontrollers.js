import messages from '../data/messagesRecords';
import Joi from 'joi';
import inbox from '../data/inbox';

// Create/Send an email

const sendMail = ((req, res) => {
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
        res.send(message);
    
    }).catch(error => res.send({
        status: 400,
        "error": {"message": error.details[0].message}
    }) )
    
    

})

// Fetch all received emails

const allMails = ((req, res) => {
    res.send(messages);
});

// Fetch all unread received emails

const unreadEmail = (req, res) => {
    let unreadmessages = [];
    inbox.forEach((inbox) => {
     const message = messages.find(m => m.messageId == inbox.messageId);
     oonsole.log('unreadmessage')
    //  if(message.status === 'sent'){
    //      unreadmessages.push(message);
    //      }
    //  })
  
    
   // const message = messages.find(m => m.status === 'unread');
    if(!message) 
    {
        return res.status(404).send('The message with the given ID was not found')
    }else{
        return res.send(unreadmessages);
    }
    }
  

// Fetch all sent emails

const sentMail = (req, res) => {
    const message = messages.find(m => m.status === 'sent');
    if(!message) 
    return res.status(404).send('The message with the given ID was not found')
    return res.send(message);
    };
  
// GET A specific message by ID

const specificEmail = (req, res) => {
    const message = messages.find(m => m.id === parseInt(req.params.id));
    if(!message) 
    return res.status(404).send('The message with the given ID was not found')
    return res.send(message);
    };
  
// DELETE a messsage

const deleteAmail = (req, res) => {
    const message = messages.find(m => m.id === parseInt(req.params.id));
    if(!message) 
    return res.status(404).send('The message with the given ID was not found')
    
    const index = messages.indexOf(message);
    messages.splice(index, 1);

    return res.send(message);

    
};

export default { specificEmail, deleteAmail, allMails, sentMail, unreadEmail, sendMail };