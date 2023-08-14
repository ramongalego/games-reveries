import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

import ErrorMessage from '../../components/ErrorMessage';
import { platformOptions } from '../../constants/platformOptions';
import { reviewFormSchema } from '../../constants/reviewFormSchema';
import { addReview, editReview } from './ReviewSlice';

const AddReviewForms = ({ onClose, editMode }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reveries?.reviews);
  const selectedReviewId = useSelector(state => state.reveries?.selectedReview);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reviewFormSchema),
  });

  useEffect(() => {
    if (editMode) {
      const selectedReview = reviews.find(
        review => review.id === selectedReviewId,
      );

      for (const key in selectedReview) {
        setValue(key, selectedReview[key]);
      }
    }
  }, [selectedReviewId, reviews, editMode, setValue]);

  const onSubmit = data => {
    if (editMode) {
      dispatch(editReview({ reviewId: selectedReviewId, updatedReview: data }));
    } else {
      dispatch(addReview({ ...data, id: crypto.randomUUID() }));
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label='Game Title'
            variant='outlined'
            {...register('title')}
          />
          <ErrorMessage message={errors.title?.message} />
        </Box>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id='select-label'>Platform</InputLabel>
          <Controller
            name='platform'
            control={control}
            rules={{ required: true }}
            defaultValue=''
            render={({ field }) => (
              <Select labelId='select-label' label='Platform *' {...field}>
                {platformOptions.map(platform => (
                  <MenuItem key={platform.value} value={platform.value}>
                    {platform.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <ErrorMessage message={errors.platform?.message} />
        </FormControl>

        <Box
          sx={{ display: 'flex', flexDirection: 'column', maxWidth: '195px' }}
        >
          <TextField
            label='Rating'
            variant='outlined'
            type='number'
            defaultValue={0}
            {...register('rating')}
          />
          <ErrorMessage message={errors.rating?.message} />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          label='Game Review'
          variant='outlined'
          fullWidth
          multiline
          {...register('review')}
        />
        <ErrorMessage message={errors.review?.message} />
      </Box>

      <Button
        size='medium'
        variant='contained'
        type='submit'
        style={{ marginTop: '2rem' }}
      >
        {editMode ? 'Save Changes' : 'Add Review'}
      </Button>
    </form>
  );
};

export default AddReviewForms;
