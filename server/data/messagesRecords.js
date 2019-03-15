const messagesRecords = [
    {
        id : 6,
        createdOn : 'Nov 7, 2018',
        subject : 'Completion of the work',
        message :'I would like to kindly let you know that the requested work is now completed. Thank you!',
        parentMessageId : 3,
        status : 'sent'
    },
    
    {
        id : 7,
        createdOn : 'Nov 18, 2018',
        subject : 'Request for approval',
        message : 'I would like to kindly check out the authenticity of the herewith attached documents and then aprove it for a final signature',
        parentMessageId : 11,
        status : 'draft'
    },
    
    {
        id : 8,
        createdOn : 'Nov 25, 2018',
        subject : 'Preparation of the next boot camp',
        message : 'Since the time is against us, we should wrap up with the preparations of the next boot camps. Thank you',
        parentMessageId : 13,
        status : 'read'
    },
    
    {
        id : 9,
        createdOn : 'Dec 17, 2018',
        subject : 'Confirmation of the participation',
        message : 'We will be there on time',
        parentMessageId : 20,
        status : 'draft'
    },
    
    {
        id : 10,
        createdOn : 'Dec 27, 2018',
        subject : 'Welcome',
        message : 'Welcome to ANDELA',
        parentMessageId : 26,
        status : 'unread'
    },

    {
        id : 11,
        createdOn : 'Dec 28, 2018',
        subject : 'Congratulations',
        message : 'The company would like to congratulate you for the achievements made despite of all circumstances. Keep it up!',
        parentMessageId : 25,
        status : 'sent'
    }
    
    ]
    
    export default messagesRecords;