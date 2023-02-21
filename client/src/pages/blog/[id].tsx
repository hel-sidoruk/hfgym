import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ArticleItem from '../../components/ArticleItem';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

const ArticlePage = () => {
  const [post, setPost] = useState({});
  const { query } = useRouter();

  useEffect(() => {
    axios.get(`/api/articles/${query.id}`).then(({ data }) => setPost(data[0]));
  }, []);

  return (
    <>
      <Head>
        <title> Holy Family Gym</title>
        <title>{post.title || ''} | Holy Family Gym</title>
        <meta name="description" content={post.descr} />
      </Head>
      <ButtonBack />
      <Background page={'blog-page'} />
      <ArticleItem title={post.title} image={`/images/articles/${post.image}`} text={post.text} />
    </>
  );
};

export default ArticlePage;
