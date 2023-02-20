import schedule from './data/ScheduleController';

export default async function handler(req, res) {
  let data = await schedule.getAll();
  res.status(200).json(data);
}
