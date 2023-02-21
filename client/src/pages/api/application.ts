import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const name = req.body.name;
    const email = req.body.email;
    const day = req.body.day;
    const discipline = req.body.discipline;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hfgym.minsk@gmail.com',
        pass: 'ggyzwjgrfdewrpim',
      },
    });

    const mailOptions = {
      from: 'hfgym.minsk@gmail.com',
      to: 'olya.sidoruk98@gmail.com',
      subject: 'Заявка с сайта',
      text: `Оставлена новая заявка
Имя: ${name}
Email: ${email}
День недели: ${day}
Тренировка: ${discipline}`,
    };

    transporter.sendMail(mailOptions).then(() => {
      res.status(200).json({ success: true });
    });
  }
  return;
}
