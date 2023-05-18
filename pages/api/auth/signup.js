import nc from 'next-connect';
import db from '../../../utils/db';
import User from '../../../models/User';
import { validateEmail } from '../../../utils/validation';
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
