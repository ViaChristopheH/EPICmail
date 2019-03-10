

// GET A specific message by ID

specificEmail = (req, res) => {
    const message = messages.find(m => m.id === parseInt(req.params.id));
    if(!message) 
    return res.status(404).send('The message with the given ID was not found')
    return res.send(message);
    };

    export default specificEmail;

// DELETE a messsage

app.delete('/api/v1/messages/:id', (req, res) => {
    const message = messages.find(m => m.id === parseInt(req.params.id));
    if(!message) return res.status(404).send('The message with the given ID was not found')
    res.send(message);

    const index = messages.indexOf(message);
    messages.splice(index, 1);
});