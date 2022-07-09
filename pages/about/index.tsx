import { NextPage } from 'next';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { MainLayout } from '../../components/layouts';
import { SkillCard } from '../../components/ui';

const AboutPage: NextPage = () => {
  return (
    <MainLayout title="About">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          margin: 'auto',
          maxWidth: 850,
        }}
      >
        <Box
          sx={{
            my: 3,
            mx: 6,
            width: 200,
            height: 200,
            overflow: 'hidden',
            borderRadius: '50%',
          }}
        >
          <Image
            alt="Patricia Sanz Escurin"
            src="/img/example.png"
            width="200px"
            height="200px"
          />
        </Box>
        <Typography variant="subtitle1" sx={{ fontSize: 30, marginTop: 1 }}>
          Patricia Sanz Escurin
        </Typography>
        <Typography variant="subtitle2">
          Computer Engineering Student
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-start"
          sx={{
            opacity: 0.8,
            pb: 1,
            borderBottom: '1px solid #2b2b2b',
          }}
        >
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            Pellentesque finibus ante eu lectus feugiat pharetra. Aenean eu nunc
            eget dui imperdiet ornare. Fusce vel sem a ipsum dignissim aliquam
            in at dolor. Pellentesque at lorem lacus. Donec neque ipsum,
            bibendum sit amet urna fermentum, pharetra pretium eros. Ut bibendum
            dignissim nisl ut dapibus. Aliquam aliquam mi nec nulla pharetra
            placerat.
          </Typography>
        </Box>
        <Typography variant="subtitle1" component="h2" sx={{ my: 2 }}>
          Skills
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="space-around"
          spacing={2}
          sx={{ maxWidth: '750px' }}
        >
          <Grid item xs={12} sm={6}>
            <SkillCard
              title="React and Next.js"
              image="https://miro.medium.com/max/1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SkillCard
              title="Node.js"
              image="https://www.startechup.com/wp-content/uploads/January-11-2021-Nodejs-What-it-is-used-for-and-when-where-to-use-it-for-your-enterprise-app-development.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SkillCard
              title="TypeScript"
              image="https://dc722jrlp2zu8.cloudfront.net/media/fbads-typescript.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SkillCard
              title="Docker"
              image="https://thingsolver.com/wp-content/uploads/docker-cover.png"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SkillCard
              title="Git & GitHub"
              image="https://www.campusmvp.es/recursos/image.axd?picture=/2020/2T/git-post-blog.png"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SkillCard
              title="React Native"
              image="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
            />
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default AboutPage;
