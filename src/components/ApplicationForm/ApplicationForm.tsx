import { useApplicationForm } from '@/hooks/useApplicationForm';
import { useApplicationSubmit } from '@/hooks/useApplicationSubmit';
import { disciplinesByDay } from '@/utils/disciplines';
import React, { useState } from 'react';
import { Loader } from '../UI/Loader';
import Section from '../UI/Section';
import Subtitle from '../UI/Subtitle';
import Dropdown from './Dropdown';
import { FormSuccess } from './FormSuccess';
import { InputField } from './InputField';

export const ApplicationForm = () => {
  const [
    values,
    errors,
    setName,
    setEmail,
    setDay,
    setDiscipline,
    setNameError,
    setEmailError,
    checkValues,
  ] = useApplicationForm();
  const [dayActive, setDayActive] = useState(false);
  const [disciplineActive, setDisciplineActive] = useState(false);
  const [sendApplication, resetSuccess, success, isLoading] = useApplicationSubmit();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = checkValues();
    if (error) return;
    sendApplication(values);
  };

  const handleDayClick = () => {
    setDisciplineActive(false);
    values.discipline && setDiscipline('');
  };

  const reset = () => {
    setDiscipline('');
    setDay('');
    setName('');
    setEmail('');
    resetSuccess();
  };

  const handleDisciplineClick = () => setDayActive(false);

  return (
    <Section sectionName="form__box">
      {success ? (
        <FormSuccess onClose={reset} info={values.discipline} day={values.day} />
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
        <InputField
          label="name"
          error={errors.nameError}
          value={values.name}
          setValue={(str: string) => {
            if (errors.nameError) setNameError('');
            setName(str);
          }}
        />
        <InputField
          label="email"
          error={errors.emailError}
          value={values.email}
          setValue={(str: string) => {
            if (errors.emailError) setEmailError('');
            setEmail(str);
          }}
        />
        <div className="form__field">
          <label>День недели *</label>
          <Dropdown
            onClick={handleDayClick}
            active={dayActive}
            setActive={(value: boolean) => setDayActive(value)}
            state={values.day}
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
            state={values.discipline}
            error={errors.disciplineError}
            setState={(value: string) => setDiscipline(value)}
            text="Выберите тренировку"
            values={disciplinesByDay[values.day] ? disciplinesByDay[values.day] : []}
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
