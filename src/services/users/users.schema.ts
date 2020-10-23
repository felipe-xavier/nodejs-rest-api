import * as yup from 'yup';

export const usersSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required()
    .min(3, 'Username is too short. Min 3')
    .max(50, 'Username too long. Max 50'),

  password: yup
    .string()
    .trim()
    .required()
    .min(6, 'Password is too short. Min 6')
    .max(12, 'Password too long. Max 12')
    .matches(
      /[a-zA-Z0-9@!#%]/,
      'Password can only contain Latin letters, numbers and/or [@, !, #, %].'
    ),
});
