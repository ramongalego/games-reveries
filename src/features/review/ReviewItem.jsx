import { Box } from '@mui/material';

const ReviewItem = ({ reverie }) => {
  console.log(reverie);

  return (
    <Box
      sx={{
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        borderRadius: '5px',
        marginBottom: '2rem',
        padding: '0 1rem',
      }}
    >
      <div className='review-header'>
        <p>{reverie.title}</p>
        <p>{reverie.rating}</p>
      </div>
      {reverie.platform && (
        <div className='review-system'>{reverie.platform} Version</div>
      )}
      <p>{reverie.review}</p>
    </Box>
  );
};

export default ReviewItem;
