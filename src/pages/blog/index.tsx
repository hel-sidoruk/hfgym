import Head from 'next/head';
import Background from '../../components/UI/Background';
import Section from '../../components/UI/Section';
import Title from '../../components/UI/Title';
import { BlogContent } from '@/components/Articles';
import { getKnex } from '../../../knex';
import { PostInterface } from '@/types';
import { useBackToTopBtn } from '@/hooks/useBackToTopBtn';

export async function getStaticProps() {
  const knex = getKnex();
  const data = await knex('articles').limit(10).orderBy('createdAt', 'desc');
  const posts = JSON.parse(JSON.stringify(data));
  const [{ count }] = await knex('articles').count();

  return {
    props: { posts, count: +count },
  };
}

export default function BlogPage({ posts, count }: { posts: PostInterface[]; count: number }) {
  const [isScrolled] = useBackToTopBtn();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Head>
        <title>Блог | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Статьи от Holy Family Gym. Интересное о мире единоборств и жизни клуба"
        />
      </Head>
      <Background page={'blog-page'} />
      <Section sectionName="blog">
        <Title variant={'align-center'}>Блог</Title>
        <BlogContent data={posts} count={count} />
      </Section>
      <button className={`btn-up ${isScrolled ? '' : 'hidden'}`} onClick={scrollToTop}></button>
    </>
  );
}
