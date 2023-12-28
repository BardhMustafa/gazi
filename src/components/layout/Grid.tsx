import Grid from '@mui/material/Grid';
import {
  Typography,
  Container,
  Box
} from '@mui/material';
import React from 'react';

const GridLayout = ({ title , backgroundColor, items}: { title?: string , backgroundColor?: string, items: React.ReactNode[]}) => {
  return (
    <Box bgcolor={backgroundColor} padding={10}>
      {title && (
        <Container style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
          <Typography variant="h2" component="div" gutterBottom>
            {title}
          </Typography>
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
            {items.map((item) => (
              <Grid item xs={20} sm={6} md={4} key="bardh">
                {item}
              </Grid>
            ))}{}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridLayout;
