import * as React from 'react';
import { useEffect, useState } from 'react';
import { renderRank } from './renderRank';
import CustomToolbar from '../../components/CustomToolbar';
import { renderPosibility } from './renderPosibility';
import StyledTable from 'src/components/StyledTable';

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
      field: 'id',
      headerName: 'id',
      headerAlign: 'center',
      align: 'left',
      flex: 0.5,
      minWidth: 130
    },
    {
      field: 'name',
      headerName: '이름',
      headerAlign: 'center',
      align: 'left',
      flex: 0.2,
      minWidth: 60
    },
    {
      field: 'teamName',
      headerName: '팀',
      headerAlign: 'center',
      align: 'left',
      flex: 0.2,
      minWidth: 50
    },
    {
      field: 'teamScore',
      headerName: '팀점수',
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
    },
    {
      field: 'score',
      headerName: '개인점수',
      headerAlign: 'center',
      align: 'right',
      flex: 0.2,
      minWidth: 70,
      valueFormatter: (params) => {
        if (params.value == null) {
          return '';
        }
        return `${params.value.toLocaleString()}`;
      }
    },
    {
      field: 'totalScore',
      headerName: '총점',
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
    },
    {
      field: 'probability',
      headerName: '확률',
      headerAlign: 'center',
      align: 'right',
      flex: 0.5,
      minWidth: 100,
      renderCell: renderPosibility
    }
  ];

export default function MemberTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8080/members/ranking')
      .then(res => {
        return res.json();
      })
      .then(ranking => setRows(ranking))
      .catch(err => console.log(err));

    setLoading(false);
  }, []);

  return (
    <StyledTable
      loading={loading}
      rows={rows}
      columns={columns}
      getRowId={(row) => row.id}
      initialState={{
        columns: {
          columnVisibilityModel: {
            name: false,
            teamName: false,
            score: false,
            teamScore: false
          }
        }
      }}
      slots={{
        toolbar: CustomToolbar
      }}
    />
  );
}
