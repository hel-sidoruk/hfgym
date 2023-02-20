import articles from '../data/ArticleController';

export default async function handler(req, res) {
  const { page, limit } = req.query;
  let data = await articles.getAll(page, limit);
  res.status(200).json(data);
}
