import { NextApiRequest, NextApiResponse } from 'next';
import { getKnex } from '../../../../knex';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const knex = getKnex();
  const article = await knex('articles').where({ id });
  res.status(200).json(article);
}
