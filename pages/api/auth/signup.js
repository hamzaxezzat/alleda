import nc from 'next-connect';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
  res.send('Welcom from Sign up api');
  try {
  } catch (error) {
    res.statue(500).json({ message: error.message });
  }
});

export default handler;
