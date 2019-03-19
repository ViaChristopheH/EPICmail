 import jwt from 'jsonwebtoken';

 const generateUserToken = (user) => {
    console.log(process.env.JSONWT_SECRET);
    const token = jwt.sign({userid: user.id }, process.env.JSONWT_SECRET, { expiresIn: '1d' });
    return token;
 }

 export default generateUserToken;