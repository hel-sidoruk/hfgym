import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const name = req.body.name;
    const email = req.body.email;
    const day = req.body.day;
    const discipline = req.body.discipline;
    axios
      .post(
        'https://api.telegram.org/bot5828813441:AAFlrLmqyD-SgIOZ4D_m0ZUWMN_SqCf-abg/sendMessage',
        {
          chat_id: -837433131,
          text: `Оставлена новая заявка
Имя: ${name}
Email: ${email}
День недели: ${day}
Тренировка: ${discipline}`,
        }
      )
      .catch((err) => console.log(err));
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
