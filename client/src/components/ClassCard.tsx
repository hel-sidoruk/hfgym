import Image from 'next/image';
import Link from 'next/link';

interface Props {
  text: string;
  styles: {
    readonly [key: string]: string;
  };
  image?: string;
  to?: string;
}

const ClassCard = ({ image, text, styles, to }: Props) => {
  return (
    <div className={`${styles.card} ${!image ? styles.noImage : ''}`}>
      {image && (
        <div className={styles.image}>
          <Image src={image} alt={text} fill sizes="100vw" />
        </div>
      )}
      {to ? <Link href={to}>{text}</Link> : <h3>{text}</h3>}
    </div>
  );
};

export default ClassCard;
