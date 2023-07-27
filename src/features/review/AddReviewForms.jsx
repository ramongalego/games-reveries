import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, editReview } from './ReviewSlice';
import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { platformOptions } from '../../constants/platformOptions';

const AddReviewForms = ({ onClose, editMode }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reveries.reviews);
  const selectedReviewId = useSelector(state => state.reveries.selectedReview);

  useEffect(() => {
    if (editMode) {
      const selectedReview = reviews.find(
        review => review.id === selectedReviewId,
      );

      setFormState(selectedReview);
    }
  }, [selectedReviewId, reviews, editMode]);

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

    if (editMode) {
      dispatch(
        editReview({ reviewId: selectedReviewId, updatedReview: formState }),
      );
    } else {
      dispatch(
        addReview({ ...formState, id: Math.floor(Math.random() * 100) }),
      );
    }

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
            {platformOptions.map(platform => (
              <MenuItem key={platform.value} value={platform.value}>
                {platform.label}
              </MenuItem>
            ))}
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
        {editMode ? 'Save Changes' : 'Add Review'}
      </Button>
    </form>
  );
};

export default AddReviewForms;
