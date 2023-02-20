import { useEffect, useState } from 'react';
import { disciplinesByDay } from '../utils/disciplines';
import Dropdown from './UI/Dropdown';
import styles from '../styles/form.module.scss';
import Section from './UI/Section';
import Subtitle from './UI/Subtitle';
import { useForm } from 'react-hook-form';
import Input from './UI/Input';

const RegistrationForm = ({ signRef }) => {
  const [day, setDay] = useState('');
  const [dayActive, setDayActive] = useState(false);
  const [discipline, setDiscipline] = useState('');
  const [disciplineActive, setDisciplineActive] = useState(false);
  const [dayError, setDayError] = useState('');
  const [disciplineError, setDisciplineError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (day) setDayError('');
    if (discipline) setDisciplineError('');
  }, [day, discipline]);

  const onSubmit = (data) => {
    if (!day || !discipline) {
      if (!day) setDayError('Выберите день недели');
      if (!discipline) setDisciplineError('Выберите тренировку');

      return;
    }
    alert(JSON.stringify(data));
  };

  const handleDayClick = () => {
    setDisciplineActive(false);
    discipline && setDiscipline('');
  };

  const handleDisciplineClick = () => {
    setDayActive(false);
  };

  return (
    <Section sectionName={styles.box}>
      <Subtitle variant={styles.title}>
        Запишитесь на первую бесплатную тренировку, заполнив форму на сайте
      </Subtitle>
      <form ref={signRef} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <Input label="name" register={register} error={errors.name} />
          {errors.name && <p className={`text ${styles.error}`}>{errors.name.message}</p>}
        </div>
        <div className={styles.field}>
          <Input label="mail" register={register} error={errors.mail} />
          {errors.mail && <p className={`text ${styles.error}`}>{errors.mail.message}</p>}
        </div>
        <div className={styles.field}>
          <label onClick={() => setDayActive(true)}>День недели *</label>
          <Dropdown
            onClick={handleDayClick}
            active={dayActive}
            setActive={setDayActive}
            state={day}
            setState={setDay}
            initialText={'Выберите день недели'}
            error={dayError}
            values={['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']}
          />
          <p className={`text ${styles.error}`}>{dayError}</p>
        </div>
        <div className={styles.field}>
          <label onClick={() => setDisciplineActive(true)}>Тренировка *</label>
          <Dropdown
            onClick={handleDisciplineClick}
            active={disciplineActive}
            setActive={setDisciplineActive}
            state={discipline}
            error={disciplineError}
            setState={setDiscipline}
            initialText={'Выберите тренировку'}
            values={disciplinesByDay[day] ? disciplinesByDay[day] : []}
          />
          <p className={`text ${styles.error}`}>{disciplineError}</p>
        </div>
        <button onClick={handleSubmit} type="submit" className={`btn btn-fill ${styles.btn}`}>
          Отправить
        </button>
      </form>
    </Section>
  );
};

export default RegistrationForm;
