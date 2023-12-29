
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper, { PaperProps } from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';


interface ItemProps extends PaperProps {
  src: string;
}

const Item = styled(Paper)<ItemProps>(({ theme, src }) => ({
  backgroundSize: 'cover',
  backgroundImage: `url(${src})`,
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Mansory({heights, pics}: {heights: number[], pics: string[]}) {
  return (
    <Box>
      <Masonry columns={{ xs: 1, sm: 2, md: 3}} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }} src={pics[index]}>

          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
