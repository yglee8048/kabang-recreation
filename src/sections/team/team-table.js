import * as React from 'react';
import { useEffect, useState } from 'react';
import { renderRank } from '../member/renderRank';
import CustomToolbar from '../../components/CustomToolbar';
import StyledTable from '../../components/StyledTable';
import { baseUrl } from '../../api/url';

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

    fetch(`${baseUrl}/teams/ranking`)
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
      getRowId={(row) => row.name}
      columns={columns}
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
  );
}
