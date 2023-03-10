import GroupItem from '../GroupItem';
import Text from '../UI/Text';
import ImageAnimated from '../UI/ImageAnimated';
import SignLink from '../UI/SignLink';

export const Wrestling = () => {
  return (
    <>
      <div className="discipline__group">
        <GroupItem
          title={'Утренняя группа'}
          time={'8:00 (суббота - 10:00)'}
          days={'Вторник, четверг, суббота'}
          trainer={'Евгений Алешкевич'}
          to={'#evgeniy-aleshkevich'}
        />
        <GroupItem
          title={'Вечерняя группа'}
          time={'18:30 (суббота - 10:00)'}
          days={'Вторник, четверг, суббота'}
          trainer={'Евгений Алешкевич'}
          to={'#evgeniy-aleshkevich'}
        />
      </div>
      <SignLink />
      <div className="discipline-info">
        <div className="discipline__block discipline__right">
          <Text variant="fz-20">
            <b>Вольная борьба</b> — это олимпийский вид спорта, который достаточно популярен в нашей
            стране. У нас в Академии сильный тренерский штаб, и есть все возможности для развития в
            данном виде спорта. Учитывается возраст, физическое состояние, мотивация и конечная цель
            занятий тех, кто решил посвятить время спорту. Поддержание физической формы,
            совершенствование имеющихся навыков, умение постоять за себя в непростой ситуации –
            этому научат тренировки по вольной борьбе.
          </Text>
          <ImageAnimated
            priority={true}
            src={'/images/disciplines/wrestling1.webp'}
            className="discipline__image"
            alt={'Вольная борьба'}
          />
        </div>
        <div className="discipline__block">
          <ImageAnimated
            src={'/images/disciplines/wrestling2.webp'}
            className="discipline__image discipline__imageLeft"
            alt={'Вольная борьба'}
          />

          <div>
            <Text>
              <b>Занятия вольной борьбой:</b>
            </Text>
            <ul className="discipline__list">
              <li>
                способствуют формированию атлетической фигуры за счет проработки всех групп мышц;
              </li>
              <li>положительно влияют на сердечно-сосудистую, дыхательную, иммунную системы;</li>
              <li>развивают координацию, гибкость, ловкость;</li>
              <li>
                формируют уверенность, силу воли, умение контролировать свои эмоции, анализировать
                ситуацию и быстро принимать решение.
              </li>
            </ul>
            <Text>
              Занятия в группах проводит опытный тренер, дипломированный педагог и мастер спорта по
              вольной борьбе Евгений Алешкевич.
            </Text>
            <Text>
              Для тех, кто начинает свой путь в спорте, тренеры разработают индивидуальную программу
              занятий. Тренировки по вольной борьбе проводятся с учетом особенностей каждого, его
              способностей, характера и цели.
            </Text>
          </div>
        </div>
        <div className="discipline__block discipline__right">
          <div>
            <Text>
              Наша секция по вольной борьбе в Holy Family Gym поможет справиться с психологическими
              нагрузками, связанными с проживанием в большом городе. Для преодоления ощущений
              дискомфорта, на тренировках создаются пары, находящиеся в равноценном спортивном
              статусе. Привить интерес к занятию спортом, улучшить самоконтроль, повысить
              ответственность, стать собраннее и серьезнее помогут наставники и партнеры.
            </Text>
          </div>
          <ImageAnimated
            src={'/images/disciplines/wrestling3.webp'}
            className="discipline__image"
            alt={'Вольная борьба'}
          />
        </div>
        <div className="discipline__block">
          <ImageAnimated
            src={'/images/disciplines/wrestling4.webp'}
            className="discipline__image discipline__imageLeft"
            alt={'Вольная борьба'}
          />
          <div>
            <Text>
              Вольная борьба для начинающих может стать хорошей школой для поиска своего пути не
              только в спорте. Занятия по вольной борьбе предполагают наличие внутренней
              самодисциплины. Тренер по вольной борьбе, прошедший путь от новичка до мастера спорта,
              знает о трудолюбии и настойчивости на собственном опыте. Передать накопленное,
              пережитое и понятое – главная цель таких занятий. Умение подойти к спорту как к виду
              искусства помогает многим снять напряженность и нереализованные внутренние желания,
              направив энергию в русло позитивного самосовершенствования.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};
