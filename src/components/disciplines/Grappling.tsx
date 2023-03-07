import GroupItem from '../GroupItem';
import ImageAnimated from '../UI/ImageAnimated';
import SignLink from '../UI/SignLink';
import Subtitle from '../UI/Subtitle';
import Title from '../UI/Title';
import Text from '../UI/Text';

export const Grappling = () => {
  return (
    <>
      <div className="discipline__group discipline__centered">
        <GroupItem
          title={'Основная группа'}
          time={'20:00'}
          days={'Понедельник, среда, пятница'}
          trainer={'Евгений Рутко'}
          to="#evgeniy-rutko"
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
            src={'/images/disciplines/grappling7.webp'}
            className="discipline__image"
            alt={'Грэпплинг'}
          />
        </div>
        <Title>Что дают тренировки по бразильскому джиу-джитсу?</Title>
        <Subtitle>Уверенность в себе</Subtitle>
        <Text>
          Навыки, которые воспитывает бразильское джиу-джитсу, помогают научиться всецело владеть
          своим телом: стать ловким, быстрым и выносливым. Тренировки развивают такую форму, при
          которой привыкшее к боевому искусству тело в непредвиденной ситуации реагирует немедленно.
          Бразильское джиу-джитсу - это вера в себя, которую никто и никогда не сможет у вас
          отобрать.
        </Text>
        <div className="discipline__block">
          <ImageAnimated
            src={'/images/disciplines/grappling2.webp'}
            className="discipline__image discipline__imageLeft"
            alt={'Грэпплинг'}
          />
          <div>
            <Subtitle>Отличная фигура</Subtitle>
            <Text variant={'right'}>
              Огромное количество упражнений и техник, которые оттачиваются на тренировках, помогают
              привести в тонус мышцы всех частей тела без исключения. В разминке используются
              элементы динамической йоги, легкоатлетических, силовых упражнений. Мы работаем с
              разными снарядами - медицинбол, фитбол, борцовская резина. Всё это гораздо интереснее
              монотонности занятий в тренажерке, и уже через несколько месяцев занятий вы сможете
              увидеть в зеркале обновленное, подтянутое и гибкое тело.
            </Text>
          </div>
        </div>
        <Subtitle>Отдых и победа над стрессом</Subtitle>
        <Text>
          Энергичные, злые и весёлые тренировки по-настоящему расслабляют, дают вытолкнуть из себя
          негативную энергию, победить многочисленные стрессы и, в конце концов, получить
          заслуженный десерт из эндорфинов. Наш спорт учит отделять главное от второстепенного и
          будит так часто дремлющую силу любви к себе.
        </Text>
        <div className="discipline__block discipline__right">
          <div>
            <Subtitle>Сила</Subtitle>
            <Text variant={'right'}>
              Бразильское джиу-джитсу развивает в Вас силу. Силу мышц, силу интеллекта и личности,
              силу упорства и даже силу наших взглядов. Учит нас мастерству настойчивости - умению
              находить и использовать силу и вдохновение в самих себе и в окружающем мире. Главный
              секрет состоит в том, что у нашего спорта нет возрастных или половых ограничений.
              Любой человек в любом возрасте может начать заниматься бразильским джиу-джитсу и
              выступать на соревнованиях.
            </Text>
          </div>
          <ImageAnimated
            src={'/images/disciplines/grappling3.webp'}
            className="discipline__image"
            alt={'Грэпплинг'}
          />
        </div>
        <div className="discipline__block">
          <ImageAnimated
            src={'/images/disciplines/grappling4.webp'}
            className="discipline__image discipline__imageLeft"
            alt={'Грэпплинг'}
          />
          <div>
            <Subtitle>Дисциплина</Subtitle>
            <Text>
              Регулярное посещение тренировок, работа со своим физическим и психологическим
              состоянием заставляют нас стать собраннее. Тренируясь и наблюдая за результатами,
              собственным ростом, преодолением страхов и сомнений, даже проходя через целительный
              опыт поражений, мы становимся спокойнее и учимся внимательно относиться к своим делам
              в повседневной жизни. Когда ты на ковре, ты понимаешь, что результат в ближайшие пять
              минут - это ррезультат твоего упорства в предыдущие месяцы труда. Такой подход
              переносится в работу и другие сферы жизни. Приходит понимание, что для победы на пути
              к цели нужны настоящие старание, терпение, физический и душевный вклад в дело. Иначе
              руку в финале поднимут не вам.
            </Text>
          </div>
        </div>
        <Text>
          Каждый находит в бразильском джиу-джитсу что-то своё: кураж, самоуважение, огонёк в
          глазах, смелость, драйв – перечислять можно бесконечно. Именно это заставляет раз за разом
          приходить на тренировки в зал и натягивать рашгард или расшитое патчами ги.
        </Text>
        <Text variant={'fz-20'}>Тренируйтесь с нами и открывайте это в себе.</Text>
      </div>
    </>
  );
};
