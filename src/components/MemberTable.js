import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { renderRank } from '../dataGrid/renderRank';
import CustomToolbar from './CustomToolbar';
import { styled } from '@mui/material/styles';

const rows = [
  {
    id: 1,
    rank: 1,
    name: 'tigger.lee',
    team_name: 'A',
    team_score: 20,
    score: 10,
    total_score: 30,
    probability: 10.22
  },
  {
    id: 2,
    rank: 2,
    name: 'alexander.thunder',
    team_name: 'B팀',
    team_score: 30,
    score: 10,
    total_score: 130,
    probability: 40.34
  },
  {
    id: 3,
    rank: 3,
    name: 'eddie.tang',
    team_name: 'B',
    team_score: 30,
    score: 10,
    total_score: 130,
    probability: 40.34
  },
  {
    id: 4,
    rank: 4,
    name: 'louis.m',
    team_name: 'B',
    team_score: 30,
    score: 10,
    total_score: 130,
    probability: 40.34
  }
];

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
    '"Segoe UI Symbol"',
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader': {
    borderBottom: `2px solid`,
    backgroundColor:
      theme.palette.mode === 'light' ? '#f2f2f2' : '#303030',
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },
}));

const columns =
  [
    {
      field: 'rank',
      headerName: '순위',
      renderCell: renderRank,
      headerAlign: 'center',
      align: 'center',
      width: 10
    },
    {
      field: 'name',
      headerName: '이름',
      headerAlign: 'center',
      align: 'left',
      width: 130
    },
    {
      field: 'team_name',
      headerName: '팀',
      headerAlign: 'center',
      align: 'left',
      width: 50
    },
    {
      field: 'team_score',
      headerName: '팀점수',
      headerAlign: 'center',
      align: 'right',
      width: 60
    },
    {
      field: 'score',
      headerName: '개인점수',
      headerAlign: 'center',
      align: 'right',
      width: 70
    },
    {
      field: 'total_score',
      headerName: '총점',
      headerAlign: 'center',
      align: 'right',
      width: 60
    },
    {
      field: 'probability',
      headerName: '확률',
      headerAlign: 'center',
      align: 'right',
      width: 100,
      valueFormatter: (params) => {
        if (params.value == null) {
          return '';
        }
        return `${params.value.toLocaleString()} %`;
      }
    }
  ];

export default function MemberTable() {
  const { data, setData } = useState([]);
  const { loading, setLoading } = useState(false);

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <StyledDataGrid
        loading={loading}
        rows={rows}
        columns={columns}
        disableColumnMenu
        density="compact"
        initialState={{
          columns: {
            columnVisibilityModel: {
              team_name: false,
              score: false,
              team_score: false
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
