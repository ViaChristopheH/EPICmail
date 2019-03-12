import messages from '../data/messagesRecords'

// Create/Send an email

app.post('api/v1/messages', (req, res) => {
    
    const message = {
        id: messages.length + 1,
        createdOn: req.body.createdOn,
        subject: req.body.subject,
        message: req.body.message,
        parentMessageId: req.body.parentMessageId
    }
})

// Fetch all received emails

// Fetch all unread received emails

// Fetch all sent emails

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

export default { specificEmail, deleteAmail };