import { useEffect, useState } from 'react';
import { disciplinesByDay } from '../utils/disciplines';
import Dropdown from './UI/Dropdown';
import styles from '../styles/form.module.scss';
import Section from './UI/Section';
import Subtitle from './UI/Subtitle';
import InputField from './UI/InputField';

const RegistrationForm = ({ signRef }: { signRef: React.RefObject<HTMLFormElement> }) => {
  const [day, setDay] = useState('');
  const [dayActive, setDayActive] = useState(false);
  const [discipline, setDiscipline] = useState('');
  const [disciplineActive, setDisciplineActive] = useState(false);
  const [errors, setErrors] = useState({
    nameError: '',
    emailError: '',
    dayError: '',
    disciplineError: '',
  });

  useEffect(() => {
    if (day) setErrors((state) => ({ ...state, dayError: '' }));
    if (discipline) setErrors((state) => ({ ...state, disciplineError: '' }));
  }, [day, discipline]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!day) setErrors((state) => ({ ...state, dayError: 'Выберите день недели' }));
    if (!discipline) setErrors((state) => ({ ...state, disciplineError: 'Выберите тренировку' }));
    if (!discipline) setErrors((state) => ({ ...state, disciplineError: 'Выберите тренировку' }));
    if (!discipline) setErrors((state) => ({ ...state, disciplineError: 'Выберите тренировку' }));
  };

  const handleDayClick = () => {
    setDisciplineActive(false);
    discipline && setDiscipline('');
  };

  const handleDisciplineClick = () => setDayActive(false);

  return (
    <Section sectionName={styles.box}>
      <Subtitle variant={styles.title}>
        Запишитесь на первую бесплатную тренировку, заполнив форму на сайте
      </Subtitle>
      <form ref={signRef} className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <InputField label="name" error={errors.nameError} />
          {errors.nameError && <p className={`text ${styles.error}`}>{errors.nameError}</p>}
        </div>
        <div className={styles.field}>
          <InputField label="mail" error={errors.emailError} />
          {errors.emailError && <p className={`text ${styles.error}`}>{errors.emailError}</p>}
        </div>
        <div className={styles.field}>
          <label onClick={() => setDayActive(true)}>День недели *</label>
          <Dropdown
            onClick={handleDayClick}
            active={dayActive}
            setActive={(value: boolean) => setDayActive(value)}
            state={day}
            setState={(value: string) => setDay(value)}
            initialText={'Выберите день недели'}
            error={errors.dayError}
            values={['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']}
          />
          <p className={`text ${styles.error}`}>{errors.dayError}</p>
        </div>
        <div className={styles.field}>
          <label onClick={() => setDisciplineActive(true)}>Тренировка *</label>
          <Dropdown
            onClick={handleDisciplineClick}
            active={disciplineActive}
            setActive={(value: boolean) => setDisciplineActive(value)}
            state={discipline}
            error={errors.disciplineError}
            setState={(value: string) => setDiscipline(value)}
            initialText={'Выберите тренировку'}
            values={disciplinesByDay[day] ? disciplinesByDay[day] : []}
          />
          <p className={`text ${styles.error}`}>{errors.disciplineError}</p>
        </div>
        <button type="submit" className={`btn btn-fill ${styles.btn}`}>
          Отправить
        </button>
      </form>
    </Section>
  );
};

export default RegistrationForm;
