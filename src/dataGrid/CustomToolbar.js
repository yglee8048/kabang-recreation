import * as React from 'react';
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarQuickFilter
} from '@mui/x-data-grid';
import { Grid, Stack } from '@mui/material';

export default function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <Grid container>
        <Grid
          item
          xs={8}
        >
          <GridToolbarQuickFilter/>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={0}
          >
            <GridToolbarColumnsButton/>
          </Stack>
        </Grid>
      </Grid>
    </GridToolbarContainer>
  );
}