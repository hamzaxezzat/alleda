import NextAuth from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import Auth0 from 'next-auth/providers/auth0';
import CredentialsProvider from 'next-auth/providers/credentials';

import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from './lib/mongodb';
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import db from '../../../utils/db';
db.connectDb();
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email });
        if (user) {
          return SignInUser({ password, user });
        } else {
          throw new Error('This email does not exist.');

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Auth0({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.JWT_SECRET,
});
const SignInUser = async ({ password, user }) => {
  if (!user.password) {
    throw new Error('Please enter your password.');
  }
  const testPassword = bcrypt.compare(password, user.password);
  if (!testPassword) {
    throw new Error('Incorrect Email or password!');
  }
  return user;
  // if(user.password!==password){
  //   throw new Error('Password is incorrect.')
  // }
};
