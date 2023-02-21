import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Articles from '../../components/Articles';
import Background from '../../components/UI/Background';
import Pagination from '../../components/UI/Pagination';
import Section from '../../components/UI/Section';
import Title from '../../components/UI/Title';
import { getPagesArray } from '../../utils/pages';
import styles from '../../styles/blog.module.scss';
import ArticlesSkeleton from '../../components/UI/ArticlesSkeleton';

export default function BlogPage() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/articles').then(({ data }) => setPosts(data));
  }, []);
  // const changePage = (page) => {
  //   const currentPath = router.pathname;
  //   const currentQuery = router.query;
  //   currentQuery.page = page;
  //   router.push({
  //     pathname: currentPath,
  //     query: currentQuery,
  //   });
  // };

  // useEffect(() => {
  //   router.events.on('routeChangeStart', startLoading);
  //   router.events.on('routeChangeComplete', stopLoading);
  //   return () => {
  //     router.events.off('routeChangeStart', startLoading);
  //     router.events.off('routeChangeComplete', stopLoading);
  //   };
  // });
  // const pagesArray = getPagesArray(pageCount);

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
      <Section sectionName={styles.articles}>
        <Title variant={'align-center'}>Блог</Title>
        <div className={styles.content}>
          {isLoading ? <ArticlesSkeleton num={6} styles={styles} /> : <Articles posts={posts} />}
          {/* <Pagination pagesArray={pagesArray} page={currentPage} changePage={changePage} /> */}
        </div>
      </Section>
    </>
  );
}
