import { disciplinesByDay } from '@/utils/disciplines';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loader } from '../UI/Loader';
import Section from '../UI/Section';
import Subtitle from '../UI/Subtitle';
import Dropdown from './Dropdown';
import { FormSuccess } from './FormSuccess';

export const ApplicationForm = () => {
  const [day, setDay] = useState('');
  const [dayActive, setDayActive] = useState(false);
  const [discipline, setDiscipline] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disciplineActive, setDisciplineActive] = useState(false);
  const [errors, setErrors] = useState({
    nameError: '',
    emailError: '',
    dayError: '',
    disciplineError: '',
  });
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (day) setErrors((state) => ({ ...state, dayError: '' }));
    if (discipline) setErrors((state) => ({ ...state, disciplineError: '' }));
  }, [day, discipline]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return setErrors((state) => ({ ...state, nameError: 'Вы не ввели имя' }));
    if (name.length < 2)
      return setErrors((state) => ({
        ...state,
        nameError: 'Имя не может быть короче двух символов',
      }));
    if (!email) return setErrors((state) => ({ ...state, emailError: 'Вы не ввели e-mail' }));
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      return setErrors((state) => ({ ...state, emailError: 'Некорректный email' }));
    if (!day) return setErrors((state) => ({ ...state, dayError: 'Выберите день недели' }));
    if (!discipline)
      return setErrors((state) => ({ ...state, disciplineError: 'Выберите тренировку' }));
    setIsLoading(true);
    axios
      .post('api/application', { name, email, day, discipline })
      .then(({ data }) => data.success && setSuccess(true))
      .finally(() => setIsLoading(false));
  };

  const handleDayClick = () => {
    setDisciplineActive(false);
    discipline && setDiscipline('');
  };

  const reset = () => {
    setDiscipline('');
    setDay('');
    setName('');
    setEmail('');
    setSuccess(false);
  };

  const handleDisciplineClick = () => setDayActive(false);

  return (
    <Section sectionName="form__box">
      {success ? (
        <FormSuccess onClose={reset} info={discipline} day={day} />
      ) : (
        <Subtitle variant="form__title">
          Запишитесь на первую бесплатную тренировку, заполнив форму на сайте
        </Subtitle>
      )}
      {isLoading && (
        <div className="form__loader">
          <Loader />
        </div>
      )}
      <form className={`form ${success ? 'hidden' : ''}`} onSubmit={handleSubmit}>
        <div className="form__field">
          <label htmlFor="name">Имя *</label>
          <input
            id="name"
            className={`form__input ${errors.nameError ? 'form__input-error' : ''}`}
            placeholder="Введите Ваше имя"
            value={name}
            onChange={(e) => {
              if (errors.nameError) setErrors((state) => ({ ...state, nameError: '' }));
              setName(e.target.value);
            }}
          />
          {errors.nameError && <p className="text form__error">{errors.nameError}</p>}
        </div>
        <div className="form__field">
          <label htmlFor="mail">E-mail *</label>
          <input
            id="mail"
            className={`form__input ${errors.emailError ? 'form__input-error' : ''}`}
            placeholder="Введите Ваш E-mail"
            value={email}
            onChange={(e) => {
              if (errors.emailError) setErrors((state) => ({ ...state, emailError: '' }));
              setEmail(e.target.value);
            }}
          />
          {errors.emailError && <p className="text form__error">{errors.emailError}</p>}
        </div>
        <div className="form__field">
          <label>День недели *</label>
          <Dropdown
            onClick={handleDayClick}
            active={dayActive}
            setActive={(value: boolean) => setDayActive(value)}
            state={day}
            setState={(value: string) => setDay(value)}
            text="Выберите день недели"
            error={errors.dayError}
            values={['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']}
          />
          <p className="text form__error">{errors.dayError}</p>
        </div>
        <div className="form__field">
          <label>Тренировка *</label>
          <Dropdown
            onClick={handleDisciplineClick}
            active={disciplineActive}
            setActive={(value: boolean) => setDisciplineActive(value)}
            state={discipline}
            error={errors.disciplineError}
            setState={(value: string) => setDiscipline(value)}
            text="Выберите тренировку"
            values={disciplinesByDay[day] ? disciplinesByDay[day] : []}
          />
          <p className="text form__error">{errors.disciplineError}</p>
        </div>
        <button type="submit" className="btn btn-fill form__btn">
          Отправить
        </button>
      </form>
    </Section>
  );
};
