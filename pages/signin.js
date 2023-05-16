import Header from '../components/header';
import Footer from '../components/footer';
import LoginInput from '../components/input/loginInput';
import styles from '../styles/signin.module.scss';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import { Formik, Form } from 'formik';
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
    console.log(user);
  };
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
            <Formik>
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    icon="email"
                    name="login_email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    value={user.value}
                  />
                  {/* <LoginInput icon="email" placeholder="Helo" />
                  <LoginInput icon="password" placeholder="Helo" /> */}
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
