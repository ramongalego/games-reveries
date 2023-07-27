import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectReview, removeReview } from './ReviewSlice';
import useModal from '../../hooks/useModal';
import CustomModal from '../../components/CustomModal';
import AddReviewForms from './AddReviewForms';
import ConfirmationScreen from '../../components/ConfirmationScreen';

const ReviewItem = ({ reverie }) => {
  const dispatch = useDispatch();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const handleEdit = id => {
    dispatch(selectReview({ reviewId: id }));
    handleOpenModal();
  };

  const handleDeleteConfirmation = id => {
    dispatch(removeReview({ reviewId: id }));
    setDeleteConfirmationOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', marginBottom: '2rem' }}>
      <Box
        sx={{
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          borderRadius: '5px',
          padding: '0 1rem',
          width: '100%',
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
          alignItems: 'center',
          marginLeft: '10px',
        }}
      >
        <Button
          variant='outlined'
          color='secondary'
          size='small'
          onClick={() => handleEdit(reverie.id)}
        >
          Edit
        </Button>
        <Button
          variant='outlined'
          color='error'
          size='small'
          onClick={() => setDeleteConfirmationOpen(true)}
        >
          Delete
        </Button>
      </Box>

      <CustomModal open={isModalOpen} onClose={handleCloseModal}>
        <AddReviewForms onClose={handleCloseModal} editMode />
      </CustomModal>

      <CustomModal
        open={isDeleteConfirmationOpen}
        onClose={() => setDeleteConfirmationOpen(false)}
      >
        <ConfirmationScreen
          message='Are you sure you want to delete this item?'
          onClose={() => setDeleteConfirmationOpen(false)}
          onConfirm={() => handleDeleteConfirmation(reverie.id)}
        />
      </CustomModal>
    </Box>
  );
};

export default ReviewItem;
