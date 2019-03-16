 const generateUserToken = (user) => {
    const token = jwt.sign({userid: user.id }, process.env.JSONWT_SECRET, { expiresIn: '1d' });
    return token;
 }