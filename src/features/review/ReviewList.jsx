import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import ReviewItem from './ReviewItem';

const ReviewList = () => {
  const reviews = useSelector(state => state.reveries.reviews);

  console.log(reviews);

  return (
    <Box
      sx={{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2rem',
      }}
    >
      {reviews.map(reverie => (
        <ReviewItem key={reverie.id} reverie={reverie} />
      ))}
    </Box>
  );
};

export default ReviewList;
