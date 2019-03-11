import { join } from "path";

// GET A specific user by ID

app.post('/api/v1/users', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user)res.status(404).send('The user with the given ID was not found')
    res.send(user)
});

// POST/ADD a user (create an account)

app.post('/api/v1/users', (req, res) => {
    
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