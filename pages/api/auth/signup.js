import nc from 'next-connect';
import bcrypt from 'bcrypt';
import db from '../../../utils/db';
import User from '../../../models/User';
import { validateEmail } from '../../../utils/validation';
import { createActivationToken } from '../../../utils/tokens';
import { sendEmail } from '../../../utils/sendEmails';
import { activateEmailTemplate } from '../../../emails/activateEmailTemplate';
const handler = nc();

handler.post(async (req, res) => {
  // res.send('Welcom from Sign up api');
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please fill in all fields.' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Please enter a valid email.' });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'This Email already exsits' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'This Password is short' });
    }
    const bcryptPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: bcryptPassword });
    // .save() : Add user to DB
    const addedUser = await newUser.save();

    // To generate Token to verify email
    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    });
    const url = `${process.env.BASE_URL}/activate/${activation_token}`;
    // res.send(url);
    sendEmail(email, url, '', 'Activate your account', activateEmailTemplate);
    await db.disconnectDb();
    res.json({
      message: 'Register Success! Please activate your email to start',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
