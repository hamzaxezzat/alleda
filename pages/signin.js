import Header from '../components/header';
import Footer from '../components/footer';
import LoginInput from '../components/input/loginInput';
import styles from '../styles/signin.module.scss';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const initalValues = {
  login_email: '',
  login_password: '',
};
export default function signin() {
  const [user, setUser] = useState(initalValues);
  const { login_email, login_password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required('Email address is required')
      .email('Please Enter a valid email address'),
    login_password: Yup.string('Password is required').required(
      'Please Enter a Strong password'
    ),
  });
  const country = {
    flag: 'https://cdn.ipregistry.co/flags/emojitwo/de.svg',
    name: 'Germany',
  };
  return (
    <>
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}
