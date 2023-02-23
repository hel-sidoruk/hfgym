export interface TrainerInterface {
  id: number;
  name: string;
  disciplines: string;
  image: string;
  text: string;
}

export interface ScheduleInterface {
  id: number;
  day: string;
  link: string;
  name: string;
  time: string;
}

export interface PostInterface {
  id: number;
  text: string;
  title: string;
  descr: string;
  image: string;
  createdAt: string;
}
