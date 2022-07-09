import { FC } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';

interface Props {
  title: string;
  image: string;
}

export const SkillCard: FC<Props> = ({ title, image }) => {
  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: 'center' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
    </Card>
  );
};
