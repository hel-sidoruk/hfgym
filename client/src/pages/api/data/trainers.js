import prisma from '../../../lib/prisma';
export async function fetchTrainersData() {
  let data = await prisma.trainers.findMany({
    orderBy: [
      {
        createdAt: 'asc',
      },
    ],
  });
  return data;
}
