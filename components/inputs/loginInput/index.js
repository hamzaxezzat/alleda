import { useField } from 'formik';
import styles from './styles.module.scss';
import { BiUser } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
import { IoKeyOutline } from 'react-icons/io5';

export default function InputLogin({ icon, placeholder, ...props }) {
  const [filed, meta] = useField(props);
  return (
    <div className={styles.input}>
      {icon == 'user' ? (
        <BiUser />
      ) : icon == 'email' ? (
        <SiMinutemailer />
      ) : icon == 'password' ? (
        <IoKeyOutline />
      ) : (
        ''
      )}
      <input
        type={filed.type}
        name={filed.name}
        placeholder={placeholder}
        {...filed}
        {...props}
      />
    </div>
  );
}
