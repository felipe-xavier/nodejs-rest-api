import * as yup from 'yup';

export const postsSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required()
    .min(3, 'Title is too short. Min 3')
    .max(100, 'Title it too long. Max 100')
    .typeError('BadRequest'),

  body: yup
    .string()
    .trim()
    .required()
    .min(3, 'Body is too short. Min 3')
    .max(400, 'Body is too long. Max 400')

});
