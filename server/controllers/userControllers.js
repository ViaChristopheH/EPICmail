

// GET A specific user by ID

app.post('/api/v1/users', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user)res.status(404).send('The user with the given ID was not found')
    res.send(user)
});

// POST/ADD a user (create an account/signup)

app.post('api/v1/users', (req, res) => {
    const schema = {
        subject: Joi.string().required().min(3),
        message: Joi.string().min(3).required(),
    }
    
    const message = {
        id: messages.length + 1,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    };

    users.push(user);
    res.send(user);


})


// UPDATE a user
app.post('/api/v1/users', (req, res) => {

})

// DELETE a user

app.delete('/api/v1/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('The user with the given ID was not found')
    res.send(user);

    const index = users.indexOf(user);
    users.splice(index, 1);
});