import Text from './UI/Text';
import ImageAnimated from './UI/ImageAnimated';
import Subtitle from './UI/Subtitle';
import SignLink from './UI/SignLink';

const OpenMat = ({ styles }: { styles: { [key: string]: string } }) => {
  return (
    <div className="discipline-info">
      <Subtitle>
        Каждую субботу в 12:00 в нашем зале проходит открытый ковер по грэпплингу.
      </Subtitle>
      <div className={`${styles.block} ${styles.right}`}>
        <Text>
          Зачем нужен открытый ковер? Он является одним из тестов спортсмена: позволяет определить
          его пробелы в технической части, тактической, а также в функциональной подготовке.
          Открытый ковер - одно из средств психологической подготовки грэпплера к турнирам. Так как
          неуверенность в своих силах, незнакомая ситуация, боязнь проигрыша, травмы - все это может
          негативно сказаться выступлении спортсмена.
        </Text>
        <ImageAnimated
          priority={true}
          src={'/images/disciplines/grappling8.webp'}
          className={styles.image}
          alt={'Открытый ковер'}
        />
      </div>
      <div className={styles.block}>
        <ImageAnimated
          src={'/images/disciplines/grappling5.webp'}
          className={`${styles.image} ${styles.imageLeft}`}
          alt={'Открытый ковер'}
        />
        <Text>
          Такие встречи с другими борцами акцентируют внимание на других технических аспектах:
          борьба снизу, леглоки, проходы гарда – это точно обогатит ваш спарринговый опыт. Очень
          важное значение имеет антропометрия борца: кому-то неудобно бороться с высокими людьми, с
          длинными гибкими ногами, а таких борцов в вашей школе нет. Чтобы научиться им
          противостоять, необходимо иметь опыт борьбы с такими соперниками.
        </Text>
      </div>
      <div className={`${styles.block} ${styles.right}`}>
        <Text>
          Резюмируя, можно сказать, что именно во время открытого ковра вы сможете проверить свои
          силы в условиях максимального их напряжения, а также проявить свои навыки, приобретенные
          на занятиях. И получить такой прирост знаний, умений и навыков борьбы, который в обычных
          условиях учебно-тренировочной работы невозможен.
        </Text>
        <ImageAnimated
          src={'/images/disciplines/grappling7.webp'}
          className={styles.image}
          alt={'Открытый ковер'}
        />
      </div>
      <div className={styles.block}>
        <ImageAnimated
          src={'/images/disciplines/grappling9.webp'}
          className={`${styles.image} ${styles.imageLeft}`}
          alt={'Открытый ковер'}
        />
        <div>
          <Text>
            Наше мероприятие открытое для всех и абсолютно бесплатное. Ждем всех поклонников
            грэпплинга, бразильского джиу-джитсу, ММА, самбо, и просто любителей техничной борьбы в
            партере у нас каждую субботу в 12.00 на Лынькова 19.
          </Text>
          <Text variant={'fz-20'}>
            Если у Вас появились какие-то вопросы, с удовольствием ответим на них по телефону:{' '}
            <a style={{ display: 'block' }} className={styles.link} href="tel:+375292765915">
              + 375(29) 276-59-15
            </a>
          </Text>
        </div>
      </div>
      <SignLink />
    </div>
  );
};

export default OpenMat;
