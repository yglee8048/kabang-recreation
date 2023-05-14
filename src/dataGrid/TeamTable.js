import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { renderRank } from './renderRank';
import CustomToolbar from './CustomToolbar';
import { styled } from '@mui/material/styles';

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

const columns =
  [
    {
      field: 'rank',
      headerName: '순위',
      headerAlign: 'center',
      align: 'center',
      flex: 0.1,
      minWidth: 20,
      renderCell: renderRank
    },
    {
      field: 'name',
      headerName: '이름',
      headerAlign: 'center',
      align: 'left',
      flex: 0.3,
      minWidth: 60
    },
    {
      field: 'leaderId',
      headerName: '리더',
      headerAlign: 'center',
      align: 'left',
      flex: 0.5,
      minWidth: 130
    },
    {
      field: 'score',
      headerName: '점수',
      headerAlign: 'center',
      align: 'right',
      flex: 0.2,
      minWidth: 60,
      valueFormatter: (params) => {
        if (params.value == null) {
          return '';
        }
        return `${params.value.toLocaleString()}`;
      }
    }
  ];

export default function TeamTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8080/teams/ranking')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(ranking => setRows(ranking))
      .catch(err => console.log(err));

    setLoading(false);
  }, []);

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <StyledDataGrid
        loading={loading}
        rows={rows}
        getRowId={(row) => row.name}
        columns={columns}
        disableColumnMenu
        density="compact"
        initialState={{
          columns: {
            columnVisibilityModel: {
              leader: false
            }
          }
        }}
        slots={{
          toolbar: CustomToolbar
        }}
      />
    </Box>
  );
}
