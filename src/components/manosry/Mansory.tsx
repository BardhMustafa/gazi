import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [200, 250, 300, 100, 150, 350, 400, 450, 500, 550, 600];

const Item = styled(Paper)(({ theme }) => ({
  backgroundSize: 'cover',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Mansory() {
  return (
    <Box>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
