import Grid from '@mui/material/Grid';
import { Container, Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

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
            marginBottom: '6rem',
          }}
        >
          <ContainerHeading>{title}</ContainerHeading>
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
              <Grid item xs={20} sm={6} md={3} key={index}>
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

const ContainerHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
`;
