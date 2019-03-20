const createTablesQuery = 

`
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(25) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL,
    first_name  VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    id_group INT);
    
    CREATE TABLE messages (
    Id SERIAL PRIMARY KEY,
    Create_on TIMESTAMP DEFAULT NOW(),
    Subject TEXT,
    Message TEXT NOT NULL,
    Sender_id INTEGER REFERENCES users(id),
    Receiver_id INTEGER REFERENCES users(id),
    Parent_message_id INTEGER REFERENCES messages(id),
    Status VARCHAR(10));
    
    CREATE TABLE contacts (
    Id SERIAL PRIMARY KEY,
    Email VARCHAR(25) NOT NULL,
    First_name VARCHAR(25) NOT NULL,
    Last_name VARCHAR(25) NOT NULL);
    CREATE TABLE group_members (
    Group_id SERIAL PRIMARY KEY,
    Member_id INTEGER REFERENCES users(id),
    Message Input`;