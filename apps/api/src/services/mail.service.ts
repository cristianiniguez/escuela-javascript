import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import config from '../config';

const transportOptions: SMTPTransport.Options = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: config.mail,
};

class MailService {
  constructor(private transporter = nodemailer.createTransport(transportOptions)) {}

  public sendMail(mailOptions: Omit<Mail.Options, 'from'>) {
    return this.transporter.sendMail({ from: config.mail.user, ...mailOptions });
  }
}

export default MailService;
