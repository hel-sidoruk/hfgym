import { fetchTrainersData } from './data/trainers';

export default async function handler(req, res) {
  let data = await fetchTrainersData();
  res.status(200).json(data);
}
