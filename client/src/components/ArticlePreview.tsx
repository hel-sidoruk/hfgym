import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/article.module.scss';

interface Props {
  image: string;
  title: string;
  descr: string;
  id: number;
}
const ArticlePreview = ({ image, title, descr, id }: Props) => {
  return (
    <article className={styles.article}>
      <div className={styles.image}>
        <Image src={image} alt="article image" fill sizes="100vw" />
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.descr}>{descr}</p>
        <Link href={`/blog/${id}`} className={`${styles.button} btn`}>
          Читать полностью
        </Link>
      </div>
    </article>
  );
};

export default ArticlePreview;
