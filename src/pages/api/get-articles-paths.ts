import { NextApiRequest, NextApiResponse } from 'next';
import { getKnex } from '../../../knex';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const knex = getKnex();
  const ids: { id: number }[] = await knex.select('id').from('articles');
  res.status(200).json(ids.map((el) => el.id.toString()));
}
