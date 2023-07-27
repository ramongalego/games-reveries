import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CustomModal from '../../components/CustomModal';
import AddReviewForms from './AddReviewForms';
import useModal from '../../hooks/useModal';

const AddReview = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <Typography variant='h3' gutterBottom textAlign='center'>
        Add Your Review
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
