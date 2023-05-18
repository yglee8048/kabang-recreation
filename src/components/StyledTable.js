import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import * as React from 'react';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d'
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none'
  },
  '& .MuiDataGrid-columnHeader': {
    borderBottom: `2px solid`,
    backgroundColor:
      theme.palette.mode === 'light' ? '#f2f2f2' : '#303030'
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)'
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0
  }
}));

export default function StyledTable(props) {
  return (
    <Box sx={{ minHeight: 500, width: 1 }}>
      <StyledDataGrid
        autoHeight
        loading={props.loading}
        rows={props.rows}
        columns={props.columns}
        getRowId={props.getRowId}
        disableColumnMenu
        density="compact"
        initialState={{
          ...props.initialState,
          pagination: { paginationModel: { pageSize: 20 } }
        }}
        slots={props.slots}
      />
    </Box>
  );
}