import { PostInterface } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export const ArticlePreviewBlog = ({ post }: { post: PostInterface }) => {
  return (
    <article className="blog-preview">
      <div className="blog-preview__image">
        <Image src={`/images/articles/${post.image}`} alt="article image" fill sizes="200px" />
      </div>
      <div className="blog-preview__bottom">
        <h3 className="blog-preview__title">{post.title}</h3>
        <p className="blog-preview__date">
          {dayjs(post.createdAt).locale('ru').format('DD MMMM, YYYY')}
        </p>
        <p className="blog-preview__descr">{post.descr}</p>
        <Link href={`/blog/${post.id}`} className="blog-preview__button btn">
          Читать полностью
        </Link>
      </div>
    </article>
  );
};
