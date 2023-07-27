import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from './ReviewSlice';
import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

const AddReviewForms = ({ onClose }) => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    title: '',
    review: '',
    rating: 0,
    platform: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addReview(formState));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',
        }}
      >
        <TextField
          label='Game Title'
          variant='outlined'
          required
          onChange={handleChange}
          name='title'
          value={formState.title}
        />

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id='select-label'>Platform *</InputLabel>
          <Select
            labelId='select-label'
            label='Platform *'
            onChange={handleChange}
            name='platform'
            value={formState.platform}
          >
            <MenuItem value='PS5'>PS5</MenuItem>
            <MenuItem value='Switch'>Switch</MenuItem>
            <MenuItem value='Steam'>Steam</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label='Rating'
          variant='outlined'
          type='number'
          required
          onChange={handleChange}
          name='rating'
          value={formState.rating}
        />
      </Box>

      <TextField
        label='Game Review'
        variant='outlined'
        fullWidth
        multiline
        required
        onChange={handleChange}
        name='review'
        value={formState.review}
      />

      <Button
        size='medium'
        variant='contained'
        type='submit'
        style={{ marginTop: '2rem' }}
      >
        Add Reverie
      </Button>
    </form>
  );
};

export default AddReviewForms;
