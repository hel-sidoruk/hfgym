import { NextApiRequest, NextApiResponse } from 'next';
import { getKnex } from '../../../../knex';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const knex = getKnex();
  const { page } = req.query;
  const limit = 10;
  const currentPage = page ? parseInt(page as string) : 1;
  const offset = currentPage * limit - limit;
  const articles = await knex('articles').limit(limit).offset(offset).orderBy('createdAt', 'desc');
  res.status(200).json(articles);
}
