import React from 'react';

const inputsInfo = {
  name: 'Введите Ваше имя',
  email: 'Введите Ваш E-mail',
};
interface Props {
  label: 'email' | 'name';
  error: string;
  value: string;
  setValue: (s: string) => void;
}
export const InputField = ({ label, error, value, setValue }: Props) => {
  return (
    <div className="form__field">
      <label htmlFor={label}>E-mail *</label>
      <input
        id={label}
        className={`form__input ${error ? 'form__input-error' : ''}`}
        placeholder={inputsInfo[label]}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && <p className="text form__error">{error}</p>}
    </div>
  );
};
