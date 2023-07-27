import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
  const reveries = useSelector(state => state.reviews);

  console.log(reveries);

  return (
    <Box
      sx={{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2rem',
      }}
    >
      {reveries.map(reverie => (
        <ReviewItem key={reverie.title} reverie={reverie} />
      ))}
    </Box>
  );
};

export default ReviewList;
