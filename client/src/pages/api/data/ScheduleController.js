import prisma from '../../../lib/prisma';

class ScheduleController {
  // async create(req, res, next) {
  //   try {
  //     let { link, day, time, name } = req.body;
  //     const scheduleItem = await Schedule.create({
  //       link,
  //       day,
  //       time,
  //       name,
  //     });
  //     res.json(scheduleItem);
  //   } catch (e) {
  //     console.log(e)
  //     // next(ApiError.badRequest(e.message));
  //   }
  // }

  async getAll() {
    let schedule = await prisma.schedules.findMany();
    return schedule;
  }
}

export default new ScheduleController();
