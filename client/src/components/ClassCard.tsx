import Image from 'next/image';
import Link from 'next/link';

interface Props {
  text: string;
  image?: string;
  to?: string;
}

const ClassCard = ({ image, text, to }: Props) => {
  return (
    <div className={`classes__card ${!image ? 'classes__noImage' : ''}`}>
      {image && (
        <div className="classes__image">
          <Image src={image} alt={text} fill sizes="100vw" />
        </div>
      )}
      {to ? <Link href={to}>{text}</Link> : <h3>{text}</h3>}
    </div>
  );
};

export default ClassCard;
