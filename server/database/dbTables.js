import pool from "./dbindex";

const databaseTables = () => {

    const usersTable = `
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(25) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL,
    first_name  VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    )`

    const messagesTable = `
    CREATE TABLE messages (
    Id SERIAL PRIMARY KEY,
    Create_on TIMESTAMP DEFAULT NOW(),
    Subject TEXT,
    Message TEXT NOT NULL,
    Sender_id INTEGER REFERENCES users(id),
    Receiver_id INTEGER REFERENCES users(id),
    Parent_message_id INTEGER REFERENCES messages(id),
    Status VARCHAR(10)
    )`

    const contactsTable = `
    CREATE TABLE contacts (
    Id SERIAL PRIMARY KEY,
    Email VARCHAR(25) NOT NULL,
    First_name VARCHAR(25) NOT NULL,
    Last_name VARCHAR(25) NOT NULL
    )`

    const groupsTable = `
    CREATE TABLE IF NOT EXISTS groups (
    group_id SERIAL NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    role VARCHAR(1500) NOT NULL,
    createdOn TIMESTAMP DEFAULT NOW()
    )`
    
    const groupMembersTable = `
    CREATE TABLE group_members (
    Group_id SERIAL PRIMARY KEY,
    Member_id INTEGER REFERENCES users(id
    )`

    const groupMessagesTable = `
    CREATE TABLE IF NOT EXISTS groupname (
    id SERIAL NOT NULL UNIQUE,
    messages_id INTEGER NOT NULL,
    role VARCHAR(1500) NOT NULL,
    createdOn TIMESTAMP DEFAULT NOW(),
    groupId INTEGER NOT NULL,
    FOREIGN KEY (groupId) REFERENCES groups(group_id) ON DELETE CASCADE,
    FOREIGN KEY (mail_id) REFERENCES mails(id) ON DELETE CASCADE
    )`

    const tableQuery = `

    ${usersTable};
    ${messagesTable};
    ${contactsTable};
    ${groupsTable};
    ${groupMembersTable};
    ${groupMessagesTable}
    
    `
    pool.query(tableQuery);

    export const deletingTables = () => {

        const usersTable = `DROP TABLE  IF EXISTS users`
        const messagesTable = `DROP TABLE IF EXISTS messages `
        const contactsTable = `DROP TABLE IF EXISTS contacts`
        const groupsTable = `DROP TABLE IF EXISTS groups`
        const groupMembersTable = `DROP TABLE IF EXISTS group_members`
        const groupMessagesTable = `DROP TABLE IF EXISTS  groupname`

}

const deletingTableQuery = `

    ${usersTable};
    ${messagesTable};
    ${contactsTable};
    ${groupsTable};
    ${groupMembersTable};
    ${groupMessagesTable}
    
    `
    pool.query(deletingTableQuery);

}