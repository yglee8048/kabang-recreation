import * as React from 'react';
import { GridToolbarColumnsButton, GridToolbarContainer } from '@mui/x-data-grid';

export default function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton/>
    </GridToolbarContainer>
  );
}