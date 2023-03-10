import GroupItem from '../GroupItem';
import Text from '../UI/Text';
import Title from '../UI/Title';
import ImageAnimated from '../UI/ImageAnimated';
import SignLink from '../UI/SignLink';

export const BjjKids = () => {
  return (
    <>
      <div className="discipline__group">
        <GroupItem
          title={'Детская группа (4-10 лет)'}
          time={'18:30'}
          days={'Понедельник, среда, пятница'}
          trainer={'Никита Сахно'}
          to={'#nikita-sachno'}
        />
        <GroupItem
          title={'Детская группа (10-14 лет)'}
          time={'19:00'}
          days={'Понедельник, среда, пятница'}
          trainer={'Евгений Акулич'}
          to={'#evgeniy-akulich'}
        />
      </div>
      <SignLink />
      <div className="discipline-info">
        <div className="discipline__block discipline__right">
          <Text variant="fz-20">
            <b>Бразильское джиу-джитсу</b> — это боевое искусство и международное спортивное
            единоборство. Его основа - борьба в партере, использование принципов рычагов, углов,
            давления и тайминга. В отличие от других боевых искусств, которые сосредотачиваются на
            ударах и/или ударах ногами, джиу-джитсу фокусируется на контактных захватах и контроле
            противника, а также на применении удушающих и болевых приемов.
          </Text>
          <ImageAnimated
            priority={true}
            src={'/images/disciplines/bjjkids4.webp'}
            className="discipline__image"
            alt={'Бразильское джиу-джитсу'}
          />
        </div>
        <Title>Почему ребенку полезно заниматься бразильским джиу-джитсу?</Title>
        <div className="discipline__block">
          <ImageAnimated
            src={'/images/disciplines/bjjkids5.webp'}
            className="discipline__image discipline__imageLeft"
            alt={'Бразильское джиу-джитсу'}
          />
          <div>
            <Text>
              Бразильское джиу-джитсу поможет проявить уникальные черты и способности вашего
              ребенка.
            </Text>
            <Text>
              Занимаясь в секции бразильского джиу-джитсу ребенок становится физически сильнее,
              координированее, быстрее учится техникам борьбы. Здесь дети учатся шагать навстречу
              своим страхам, борясь с сильным соперником. Тренируя технические действия они учатся
              терпению, ведь только благодаря длительной и кропотливой работе технический прием
              сработает - он должен быть доведен до автоматизма.
            </Text>
          </div>
        </div>
        <div className="discipline__block discipline__right">
          <div>
            <Text variant={'right'}>
              Бразильское джиу-джитсу развивает базовые спортивные навыки. Это такой вид спорта,
              который требует очень серьезного контроля над своим телом. В секции бразильского
              джиу-джитсу активно практикует элементы акробатики во время разминки. На тренировках
              используются множество элементов из гимнастики, акробатики и динамической йоги.
            </Text>
            <Text variant={'right'}>
              Бразильское джиу-джитсу развивает психологическую устойчивость. Выступление на
              турнирах и в тренировочных схватках, в которых ваш ребенок учится справляться с
              сильным сопреником, учат его не пасовать перед трудностями и сражаться до победы.
            </Text>
          </div>
          <ImageAnimated
            src={'/images/disciplines/bjjkids2.webp'}
            className="discipline__image discipline__imageLeft"
            alt={'Бразильское джиу-джитсу'}
          />
        </div>

        <div className="discipline__block">
          <ImageAnimated
            src={'/images/disciplines/bjjkids1.webp'}
            className="discipline__image"
            alt={'Бразильское джиу-джитсу'}
          />
          <Text>
            В основе детских тренировок лежит соревновательно-игровой метод. Это один из основных
            методов обучения детей в борьбе. Соревновательно-игровой метод исключает принуждение:
            обучение идет через игру и соревнование. Он вызывает у детей радость, способствует
            движению вперед, обеспечивает постепенное развитие волевых качеств, личной
            ответственности, веру в возможность преодолеть трудности. Обновление физического
            воспитания немыслимо без коренного изменения отношения к нему. Инструкторам
            предоставляется широкая возможность более разнообразно использовать средства и методы,
            которые позволяют выполнять большинство физически трудных упражнений легко, как бы играя
            и соревнуясь. Таким образом преодолевается монотонность занятий, присутствие которой
            делает скучным и однообразным процесс закрепления технических действий в борьбе.
          </Text>
        </div>
        <div className="discipline__block discipline__right">
          <div>
            <Text>
              Бразильское джиу-джитсу развивает дисциплину. Регулярное посещение тренировок требует
              от ребенка проявления сознательности и дисциплины и формирует его как личность,
              которая учится ответственно решать повседневные вопросы.
            </Text>
            <Text>
              Бразильское джиу-джитсу объединяет и развивает прочность товарищества. Дети
              поддерживают своих одноклубников в учебных схватках, переживают за них и поддерживают.
              Дружба зародившееся в спортивном зале- это дружба на всю жизнь.
            </Text>
          </div>
          <ImageAnimated
            src={'/images/disciplines/bjjkids3.webp'}
            className="discipline__image discipline__imageLeft"
            alt={'Бразильское джиу-джитсу'}
          />
        </div>
      </div>
    </>
  );
};
