import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image: string;
  title: string;
  descr: string;
  id: number;
}
const ArticlePreview = ({ image, title, descr, id }: Props) => {
  return (
    <article className="article-preview">
      <div className="article-preview__image">
        <Image src={image} alt="article image" fill sizes="(max-width: 576px) 100vw, 33vw" />
      </div>
      <div className="article-preview__bottom">
        <h3 className="article-preview__title">{title}</h3>
        <p className="article-preview__descr">{descr}</p>
        <Link href={`/blog/${id}`} className="article-preview__button btn">
          Читать полностью
        </Link>
      </div>
    </article>
  );
};

export default ArticlePreview;
