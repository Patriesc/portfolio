import type { NextPage } from 'next';
import { Box, Typography } from '@mui/material';
import { MainLayout } from '../components/layouts';
import CodeIcon from '@mui/icons-material/Code';

const Home: NextPage = () => {
  return (
    <MainLayout title="Home">
      <Box
        sx={{
          position: 'absolute',
          top: 'calc(100vh - 350px)',
        }}
      >
        <CodeIcon
          sx={{
            position: 'absolute',
            top: '-15rem',
            left: '15rem',
            opacity: 0.1,
            height: '500px',
            width: '500px',
          }}
        />
        <Box>
          <Typography variant="subtitle1">Patricia Sanz Escurin</Typography>

          <Typography variant="h1">Software Development</Typography>
          <Typography
            variant="body2"
            sx={{ marginTop: '10px', marginRight: '150px' }}
          >
            Praesent accumsan orci vel tellus iaculis, vitae bibendum erat
            consequat. Quisque vehicula eget sem in congue. Proin finibus
            dignissim urna, vel tristique tellus porta eu. Duis faucibus
            tincidunt orci sed aliquam. Sed rhoncus metus nibh, eu lacinia eros
            placerat.
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home;
