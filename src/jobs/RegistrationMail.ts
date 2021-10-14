import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  async handle({ data }: any) {
    const { emailData } = data;

    await Mail.sendMail({
      from: emailData.sender,
      to: `${emailData.name} <${emailData.email}>`,
      subject: emailData.subject,
      html: emailData.message,
    });
  },
};
