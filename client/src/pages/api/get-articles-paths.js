import articles from './data/ArticleController';

export default async function handler(req, res) {
  let data = await articles.getIDs();
  res.status(200).json(data);
}
