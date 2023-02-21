import { useEffect, useState } from 'react';

type Errors = { nameError: string; emailError: string; dayError: string; disciplineError: string };
type Values = { name: string; email: string; day: string; discipline: string };
type SetFn = (s: string) => void;
type ReturnType = [Values, Errors, SetFn, SetFn, SetFn, SetFn, SetFn, SetFn, () => boolean];
const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function useApplicationForm(): ReturnType {
  const [errors, setErrors] = useState<Errors>({
    nameError: '',
    emailError: '',
    dayError: '',
    disciplineError: '',
  });
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    day: '',
    discipline: '',
  });
  const setName = (name: string) => setValues((state) => ({ ...state, name }));
  const setEmail = (email: string) => setValues((state) => ({ ...state, email }));
  const setDay = (day: string) => setValues((state) => ({ ...state, day }));
  const setDiscipline = (discipline: string) => setValues((state) => ({ ...state, discipline }));
  const setNameError = (err: string) => setErrors((state) => ({ ...state, nameError: err }));
  const setEmailError = (err: string) => setErrors((state) => ({ ...state, emailError: err }));
  const setDayError = (err: string) => setErrors((state) => ({ ...state, dayError: err }));
  const setDisciplineError = (err: string) =>
    setErrors((state) => ({ ...state, disciplineError: err }));

  const checkValues = () => {
    let error = false;
    if (!values.name) {
      setNameError('Вы не ввели имя');
      error = true;
    }
    if (values.name.length < 2) {
      setNameError('Имя не может быть короче двух символов');
      error = true;
    }
    if (!values.email) {
      setEmailError('Вы не ввели e-mail');
      error = true;
    }
    if (!values.email.match(regex)) {
      setEmailError('Некорректный email');
      error = true;
    }
    if (!values.day) {
      setDayError('Выберите день недели');
      error = true;
    }
    if (!values.discipline) {
      setDisciplineError('Выберите тренировку');
      error = true;
    }
    return error;
  };

  useEffect(() => {
    if (values.day) setDayError('');
    if (values.discipline) setDisciplineError('');
  }, [values.day, values.discipline]);

  return [
    values,
    errors,
    setName,
    setEmail,
    setDay,
    setDiscipline,
    setNameError,
    setEmailError,
    checkValues,
  ];
}
