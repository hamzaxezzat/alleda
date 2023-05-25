import { BiLeftArrowAlt } from 'react-icons/bi';
import Footer from '../../components/footer';
import Header from '../../components/header';
import styles from '../../styles/forget.module.scss';
import Link from 'next/link';
import CircledIconBtn from '../../components/buttons/circledIconBtn';
import LoginInput from '../../components/input/loginInput';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import BeatLoaderSpinner from '../../components/loaders/dotLoader';
import axios from 'axios';

export default function forget() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState('');
  const emailValidation = Yup.object({
    email: Yup.string()
      .required('Not a Valid email')
      .email('Enter valid email'),
  });
  const forgetHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/auth/forget', {
        email,
      });
      setError('');
      setSuccess(data.message);
      setLoading(false);
      setEmail('');
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
              Forget your password?<Link href="/"> Login Instead</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <Formik
              enableReinitialize
              initialValues={{
                email,
              }}
              validationSchema={emailValidation}
              onSubmit={() => forgetHandler()}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    icon="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <CircledIconBtn type="submit" text="Sign in" />
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
