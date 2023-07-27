import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CustomModal from '../../components/CustomModal';
import AddReviewForms from './AddReviewForms';

const AddReview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Typography variant='h3' gutterBottom textAlign='center'>
        Add Your Game Reverie
      </Typography>
      <Button
        size='large'
        variant='contained'
        startIcon={<AddIcon />}
        onClick={handleOpenModal}
      >
        Add Review
      </Button>
      <CustomModal open={isModalOpen} onClose={handleCloseModal}>
        <AddReviewForms onClose={handleCloseModal} />
      </CustomModal>
    </>
  );
};

export default AddReview;
