import articles from '../data/ArticleController';

export default async function handler(req, res) {
  const { id } = req.query;
  let data = await articles.getOne(+id);
  res.status(200).json(data);
}
