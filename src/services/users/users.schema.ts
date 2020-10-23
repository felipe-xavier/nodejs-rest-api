import * as yup from 'yup';

export const usersSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required()
    .min(3, 'Username is too short. Min 3')
    .max(20, 'username too long. Max 20'),

  password: yup
    .string()
    .trim()
    .required()
    .min(6, 'Password is too short. Min 6')
    .max(12, 'password too long. Max 8')
    .matches(
      /[a-zA-Z0-9@!#%]/,
      'Password can only contain Latin letters, numbers and/or [@, !, #, %].'
    )
    .typeError('BadRequest'),
});
