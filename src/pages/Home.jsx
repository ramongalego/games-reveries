import { Box } from '@mui/material';

import AddReview from '../features/review/addReview';
import ReviewList from '../features/review/ReviewList';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem',
      }}
    >
      <AddReview />
      <ReviewList />
    </Box>
  );
};

export default Home;
