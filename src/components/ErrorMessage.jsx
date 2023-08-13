import { Typography } from '@mui/material';

const ErrorMessage = ({ message }) => {
  return (
    <Typography variant='caption' className='error-message'>
      {message}
    </Typography>
  );
};

export default ErrorMessage;
