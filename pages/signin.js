import Header from '../components/header';
import Footer from '../components/footer';
import LoginInput from '../components/input/loginInput';
import styles from '../styles/signin.module.scss';
import { BiLeftArrowAlt } from 'react-icons/bi';
import CircledIconBtn from '../components/buttons/circledIconBtn';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useCallback, useState } from 'react';
import { Provider } from 'react-redux';
import { getProviders, signIn } from 'next-auth/react';
import axios, { Axios } from 'axios';
import BeatLoaderSpinner from '../components/loaders/dotLoader';
import Router from 'next/router';

const initalValues = {
  login_email: '',
  login_password: '',
  name: '',
  email: '',
  password: '',
  conf_password: '',
  success: '',
  error: '',
  login_error: '',
};
export default function signin({ providers }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initalValues);
  const {
    login_email,
    login_password,
    name,
    email,
    password,
    conf_password,
    success,
    error,
    login_error,
  } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required('Email address is required')
      .email('Please Enter a valid email address'),
    login_password: Yup.string('Password is required').required(
      'Please Enter a Strong password'
    ),
  });
  const registerValidation = Yup.object({
    name: Yup.string()
      .min(2, 'Your name should be between 2-16 Characters')
      .max(16, 'Your name should be between 2-16 Characters')
      .required('Please Enter Your Full name')
      .matches(/^[aA-zZ]/, 'Names should be only characters'),
    email: Yup.string()
      .required('Not a Valid email')
      .email('Enter valid email'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .max(36, 'Password is too long - should be under 36 chars.'),
    conf_password: Yup.string()
      .required('password Not Matched')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });
  const country = {
    flag: 'https://cdn.ipregistry.co/flags/emojitwo/de.svg',
    name: 'Germany',
  };
  const signUpHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });
      setUser({ ...user, error: '', success: data.message });
      setLoading(false);
      setTimeout(async () => {
        let options = {
          redirect: false,
          email: email,
          password: password,
        };
        const res = await signIn('credentials', options);
        Router.push('/');
      }, 1200);
    } catch (error) {
      setLoading(false);
      setUser({ ...user, success: '', error: error.response.data.message });
    }
  };
  const signInHandler = async () => {
    setLoading(true);

    setUser({ ...user, success: '', error: '' });
    setLoading(false);
    if (res?.error) {
      setLoading(false);
      setUser({ ...user, login_error: res?.error });
    } else {
      return Router.push('/');
    }
  };
  return (
    <>
      {loading && <BeatLoaderSpinner loading={loading} />}
      <Header country={country} />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We Happy to join us <Link href="./store">Go Store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>
              Get Access to one of the best Eshopping services in th world!.
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
              onSubmit={() => signInHandler()}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    icon="email"
                    name="login_email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    icon="password"
                    name="login_password"
                    placeholder="Email password"
                    onChange={handleChange}
                  />
                  <CircledIconBtn type="submit" text="Sign in" />
                  {login_error && (
                    <span className={styles.error}>{login_error}</span>
                  )}
                  <div className={styles.forgot}>
                    <Link href="/forget">Forget Password ?</Link>
                  </div>
                </Form>
              )}
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or continue with.</span>
              <div className={styles.login__socials_wrap}>
                {providers.map((provider) => (
                  <div key={provider.name}>
                    <button
                      className={styles.social__btn}
                      onClick={() => signIn(provider.id)}
                    >
                      <img src={`../../icons/${provider.name}.png`} />
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign up</h1>
            <p>
              Get Access to one of the best Eshopping services in th world!.
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                name,
                email,
                password,
                conf_password,
              }}
              validationSchema={registerValidation}
              onSubmit={() => {
                signUpHandler();
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    icon="user"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="text"
                    icon="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    icon="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    icon="password"
                    name="conf_password"
                    placeholder="Re-Type password"
                    onChange={handleChange}
                  />
                  <CircledIconBtn type="submit" text="Sign in" />
                </Form>
              )}
            </Formik>
            <div>{error && <span className={styles.error}>{error}</span>}</div>
            <div>
              {success && <span className={styles.success}>{success}</span>}
            </div>
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  // const providers = await getProviders();
  return {
    props: { providers },
  };
}
