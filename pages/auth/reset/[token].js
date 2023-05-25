import { BiLeftArrowAlt } from 'react-icons/bi';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import styles from '../../../styles/forget.module.scss';
import Link from 'next/link';
import CircledIconBtn from '../../../components/buttons/circledIconBtn';
import LoginInput from '../../../components/input/loginInput';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import BeatLoaderSpinner from '../../../components/loaders/dotLoader';
import axios from 'axios';
import { Context } from 'react-responsive';
import { JsonWebTokenError } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import { getSession, signIn } from 'next-auth/react';
import { Router } from 'next/router';

export default function reset({ user_id }) {
  console.log('user_id', user_id);

  const [password, setPassword] = useState('');
  const [conf_password, setConf_password] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState('');
  const passwordValication = Yup.object({
    password: Yup.string()
      .required('Please Enter your new password.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .max(36, 'Password is too long - should be under 36 chars.'),
    conf_password: Yup.string()
      .required('password Not Matched')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });
  const resetHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put('/api/auth/reset', {
        user_id,
        password,
      });
      let options = {
        redirect: false,
        email: data.email,
        password: password,
      };
      await signIn('credentials', options);
      window.location.reload(true);
    } catch (error) {
      setLoading(false);
      setSuccess();
      setError(error.response.data.message);
    }
  };
  return (
    <>
      {loading && <BeatLoaderSpinner loading={loading} />}

      <Header country="" />
      <div className={styles.forget}>
        <div>
          <div className={styles.forget__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Reset your password?<Link href="/"> Login Instead</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <Formik
              enableReinitialize
              initialValues={{
                password,
                conf_password,
              }}
              validationSchema={passwordValication}
              onSubmit={() => resetHandler()}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="password"
                    icon="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <LoginInput
                    type="password"
                    icon="password"
                    name="conf_password"
                    placeholder="Conform password"
                    onChange={(e) => setConf_password(e.target.value)}
                  />
                  <CircledIconBtn type="submit" text="Change" />
                  <div className={styles.res_message}>
                    {error && <span className={styles.error}>{error}</span>}
                    {success && (
                      <span className={styles.success}>{success}</span>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query, req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }
  const token = query.token;
  const user_id = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
  return {
    props: {
      user_id,
    },
  };
}
