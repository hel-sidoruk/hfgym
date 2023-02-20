import GroupItem from './GroupItem';
import styles from '../styles/discipline.module.scss';
import Text from './UI/Text';
import ImageAnimated from './UI/ImageAnimated';
import SignLink from './UI/SignLink';

const MuaiThai = () => {
  return (
    <>
      <div className={`${styles.group} ${styles.centered}`}>
        <GroupItem
          title={'Основная группа'}
          time={'20:00'}
          days={'Понедельник, среда, пятница'}
          trainer={'Виктор Никонов'}
          to={'#viktor-nikonov'}
        />
      </div>
      <SignLink />
      <div className="discipline-info">
        <div className={`${styles.block} ${styles.right}`}>
          <Text variant={'fz-20'}>
            <b>Тайский бокс</b> - это боевое искусство Таиланда, произошедшее из
            древнего тайского боевого искусства муай боран и схожее с другими
            индокитайскими боевыми искусствами, такими как прадал серэй
            (Камбоджа), томой (Малайзия), лэхвей (Мьянма) и муай лао (Лаос). В
            современном муай-тай можно наносить удары кулаками, голенями,
            локтями и коленями — из-за этого муай-тай называют «боем восьми
            конечностей». За пределами Таиланда популярность тайского бокса
            продолжает расти, во многом благодаря развитию смешанных боевых
            искусств, интенсивно применяющих муай-тай для боя в стойке.
          </Text>
          <ImageAnimated
            priority={true}
            src={'/images/disciplines/thai4.webp'}
            className={styles.image}
            alt={'Тайский бокс'}
          />
        </div>
        <div className={styles.block}>
          <ImageAnimated
            src={'/images/disciplines/thai6.webp'}
            className={`${styles.image} ${styles.imageLeft}`}
            alt={'Тайский бокс'}
          />
          <div>
            <Text>
              Клубы муай-тай сегодня существуют практически в каждом городе,
              этот вид спорта довольно популярен, ведь муай-тай – это
              классический вид единоборств, который является отличным средством
              физического воспитания и развития.
            </Text>
            <Text>
              Занятия муай-тай подходят людям любого уровня физической
              подготовки. Это спорт для тех, кто стремиться к успеху и развитию.
              Практика поединка учит творчески подходить к любой жизненной
              ситуации, искать подходы и нестандартные решения.
            </Text>
          </div>
        </div>
        <div className={`${styles.block} ${styles.right}`}>
          <Text>
            Многие считают муай-тай жестоким видом спорта, путая его с банальной
            дракой. Однако, муай-тай – это техничный и красивый вид спорта.
            Занятия муай-тай научат не драться, а побеждать. Выброс энергии,
            происходящий во время контактного боя, понижает раздражительность
            бойца, укрепляя его дух.
          </Text>
          <ImageAnimated
            src={'/images/disciplines/thai2.webp'}
            className={styles.image}
            alt={'Тайский бокс'}
          />
        </div>
        <div className={styles.block}>
          <ImageAnimated
            src={'/images/disciplines/thai5.webp'}
            className={`${styles.image} ${styles.imageLeft}`}
            alt={'Тайский бокс'}
          />
          <div>
            <Text>
              Самой важной победой в муай-тай считается победа над собой: поиск
              и устранение собственных недостатков, борьба с негативными
              реакциями и привычками, умение достойно принять поражение. Школа
              муай-тай — отличная возможность самосовершенствования. Этот вид
              спорта позволит вам научиться контролировать не только свое тело,
              но и разум.
            </Text>
            <Text>
              Приходите к нам в зал на тренировки по тайскому боксу, и
              почувствуйте на себе все вышесказанное. Занятия ведет опытный
              тренер, который много лет подряд тренировался в лагерях тайского
              бокса в Таиланде
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default MuaiThai;
