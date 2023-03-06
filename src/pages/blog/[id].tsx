import { PostInterface } from '@/types';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ArticleItem from '../../components/ArticleItem';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

const ArticlePage = () => {
  const [post, setPost] = useState<PostInterface | null>(null);
  const { query } = useRouter();

  useEffect(() => {
    if (query.id) axios.get(`/api/articles/${query.id}`).then(({ data }) => setPost(data[0]));
  }, [query.id]);

  return (
    <>
      <Head>
        <title> Holy Family Gym</title>
        <title>{post ? post.title : ''} | Holy Family Gym</title>
        <meta name="description" content={post ? post.descr : ''} />
      </Head>
      <ButtonBack />
      <Background page={'blog-page'} />
      <ArticleItem post={post} />
    </>
  );
};

export default ArticlePage;
