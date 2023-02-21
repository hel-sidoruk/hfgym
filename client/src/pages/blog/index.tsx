import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Articles from '../../components/Articles';
import Background from '../../components/UI/Background';
import Section from '../../components/UI/Section';
import Title from '../../components/UI/Title';
import ArticlesSkeleton from '../../components/UI/ArticlesSkeleton';

export default function BlogPage() {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/articles').then(({ data }) => setPosts(data));
  }, []);

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
        <div className="blog__content">
          {isLoading ? <ArticlesSkeleton num={6} /> : <Articles posts={posts} />}
        </div>
      </Section>
    </>
  );
}
