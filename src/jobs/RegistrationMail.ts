import Mail from '../lib/Mail';

interface IMailContact {
  name: string;
  email: string;
}

interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  message: string;
}

export default {
  key: 'RegistrationMail',
  async handle({ data }: any) {
    const { subject, to, from, message } = data.emailData as ISendMailDTO;

    await Mail.sendMail({
      from: {
        name: from?.name || 'Equipe GoBarber',
        address: from?.email || 'equipe@gobarber.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: message,
    });
  },
};
