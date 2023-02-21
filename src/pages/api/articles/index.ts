import { NextApiRequest, NextApiResponse } from 'next';
import { getKnex } from '../../../../knex';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const knex = getKnex();
  const articles = await knex('articles').limit(6).orderBy('createdAt', 'desc');
  res.status(200).json(articles);
}
