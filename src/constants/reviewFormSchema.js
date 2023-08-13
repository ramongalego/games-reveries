import * as yup from 'yup';

export const reviewFormSchema = yup
  .object({
    title: yup.string().required(),
    platform: yup.string().required(),
    rating: yup.number().positive().integer().min(0).max(10).required(),
    review: yup.string().required(),
  })
  .required();
