import Image from 'next/image';
import Link from 'next/link';

const ClassCard = ({ image, text, styles, to }) => {
  return (
    <div className={`${styles.card} ${!image ? styles.noImage : ''}`}>
      {image && (
        <div className={styles.image}>
          <Image layout="fill" src={image} alt={text} />
        </div>
      )}
      {to ? (
        <Link href={to}>
          <a>{text}</a>
        </Link>
      ) : (
        <h3>{text}</h3>
      )}
    </div>
  );
};

export default ClassCard;
