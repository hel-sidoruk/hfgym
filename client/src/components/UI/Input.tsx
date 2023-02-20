import styles from '../../styles/input.module.scss';

const Input = ({ label, register, error }) => {
  const labelValue = {
    name: {
      value: 'Имя *',
      placeholder: 'Введите Ваше имя',
      options: {
        required: 'Вы не ввели имя',
        minLength: {
          value: 2,
          message: 'Имя не может быть короче двух символов',
        },
      },
    },
    mail: {
      value: 'E-mail *',
      placeholder: 'Введите Ваш E-mail',
      options: {
        required: 'Вы не ввели e-mail',
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Некорректный email',
        },
      },
    },
  };

  const { value, placeholder, options } = labelValue[label];
  return (
    <>
      <label htmlFor={label}>{value}</label>
      <input
        {...register(label, options)}
        id={label}
        className={`${styles.input} ${error ? styles.error : ''}`}
        placeholder={placeholder}
        type="text"
      />
    </>
  );
};

export default Input;
