import axios from 'axios';
import Head from 'next/head';
import ArticleItem from '../../components/ArticleItem';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

export async function getStaticPaths() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/get-articles-paths`);
  const paths = response.data.map(({ id }) => ({ params: { id: String(id) } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/articles/${params.id}`);
  const post = response.data;
  return {
    props: {
      post,
    },
  };
}

const ArticlePage = ({ post }) => {
  const { title, image, descr, text } = post;
  return (
    <>
      <Head>
        <title>{title} | Holy Family Gym</title>
        <meta name="description" content={descr} />
      </Head>
      <ButtonBack />
      <Background page={'blog-page'} />
      <ArticleItem title={title} image={`/images/articles/${image}`} text={text} />
    </>
  );
};

export default ArticlePage;
