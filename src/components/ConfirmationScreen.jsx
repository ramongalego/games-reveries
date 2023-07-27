import { Box, Typography, Button } from '@mui/material';

const ConfirmationScreen = ({ message, onClose, onConfirm }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h4'>{message}</Typography>
      <Box sx={{ marginTop: '2rem' }}>
        <Button
          variant='contained'
          size='medium'
          onClick={onConfirm}
          style={{ marginRight: '10px' }}
        >
          Confirm
        </Button>
        <Button variant='outlined' size='medium' onClick={onClose}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmationScreen;
