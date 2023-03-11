import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Formik, Form } from "formik";
import LoginInput from "../components/inputes/loginInput";

export default function signin() {
  let country = {
    name: "Germany",
    flag: "https://aux2.iconspalace.com/uploads/424097756.png",
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
              We'd be Happy to Join us ! <Link href="/">Go to Store </Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>Get access to one of the best shopping services in the world.</p>
            <Formik>
              {(form) => {
                <Form>
                  <LoginInput />
                </Form>;
              }}
            </Formik>
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}
