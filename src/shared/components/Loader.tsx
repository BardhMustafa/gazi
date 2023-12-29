import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => (
  <Box
    sx={{
      display: 'flex',
      height: '90vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CircularProgress style={{ color: '#d42539' }} />
  </Box>
);

export default Loader;
