import { NextApiRequest, NextApiResponse } from 'next';
import { getKnex } from '../../../knex';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const knex = getKnex();
  const schedule = await knex('schedules');
  res.status(200).json(schedule);
}
