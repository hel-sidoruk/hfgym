import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/article.module.scss';

const ArticlePreview = ({ image, title, descr, id }) => {
  return (
    <article className={styles.article}>
      <div className={styles.image}>
        <Image layout="fill" src={image} alt="article image" />
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
