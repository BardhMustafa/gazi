import Grid from '@mui/material/Grid';
import { Container, Box } from '@mui/material';
import React from 'react';
import { Heading2 } from '../../shared/components/Heading2';

const GridLayout = ({
  title,
  backgroundColor,
  items,
}: {
  title?: string;
  backgroundColor?: string;
  items: React.ReactNode[];
}) => {
  return (
    <Box bgcolor={backgroundColor} padding={10}>
      {title && (
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Heading2>{title}</Heading2>
        </Container>
      )}
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={24}>
          <Grid
            container
            justifyContent="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 10 }}
          >
            {items.map((item, index) => (
              <Grid item xs={20} sm={6} md={4} key={index}>
                {item}
              </Grid>
            ))}
            {}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridLayout;
