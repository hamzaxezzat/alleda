import styles from './styles.module.scss';
import { BiAbacus, BiUser } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
import { IoKeyOutline } from 'react-icons/io5';
import { useField } from 'formik';

function LoginInput({ icon, placeholder, value, ...props }) {
  const [field, meta] = useField(props);
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
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        value={value}
        {...field}
        {...props}
      />
    </div>
  );
}

export default LoginInput;
