/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
export default {
  key: 'UserReport',
  options: {
    delay: 5000,
  },
  async handle({ data }: any) {
    const { user } = data;

    console.log(user);
  },
};
