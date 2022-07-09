import { AppBar, Box, Button, Link, Toolbar } from '@mui/material';
import NextLink from 'next/link';

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{ paddingBottom: 1.5, mx: 12, borderBottom: '1px solid #212121' }}
      >
        <Box flex={1}></Box>
        <Box display="flex">
          <NextLink href="/" passHref>
            <Link>
              <Button className="navLink">Home</Button>
            </Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link>
              <Button className="navLink">About</Button>
            </Link>
          </NextLink>
          <NextLink href="/projects" passHref>
            <Link>
              <Button className="navLink">Projects</Button>
            </Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link>
              <Button className="navLink ">Contact</Button>
            </Link>
          </NextLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
