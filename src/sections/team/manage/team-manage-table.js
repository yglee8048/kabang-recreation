import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Button, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import TeamUpdateDialog from './dialog/team-update-dialog';
import TeamRemoveDialog from './dialog/team-remove-dialog';
import { baseUrl } from '../../../api/url';

export default function TeamManageTable(props) {
  const columns =
    [
      {
        field: 'name',
        headerName: '이름',
        headerAlign: 'center',
        align: 'left',
        flex: 0.2,
        minWidth: 60
      },
      {
        field: 'leaderId',
        headerName: '리더',
        headerAlign: 'center',
        align: 'left',
        flex: 0.6,
        minWidth: 150
      },
      {
        field: 'action',
        headerName: 'action',
        headerAlign: 'center',
        align: 'center',
        flex: 0.4,
        minWidth: 120,
        renderCell: (rowData) => {
          return (
            <Stack
              direction="row"
            >
              <Button onClick={() => updateTeam(rowData.row)}>
                <Edit/>
              </Button>
              <Button onClick={() => deleteTeam(rowData)}>
                <Delete/>
              </Button>
            </Stack>
          );
        }
      }
    ];

  const [selected, setSelected] = useState(null);
  const [openUpdate, setOpenUpdate] = useState(false);
  const updateTeam = (row) => {
    setSelected(row);
    setOpenUpdate(true);
  };

  const [openRemove, setOpenRemove] = useState(false);
  const deleteTeam = (row) => {
    setSelected(row);
    setOpenRemove(true);
  };

  const { openAdd } = props;
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    fetch(`${baseUrl}/teams`)
      .then(res => {
        return res.json();
      })
      .then(teams => setRows(teams))
      .catch(err => console.log(err));

    setLoading(false);
  }, [openUpdate, openRemove, openAdd]);

  return (
    <>
      <Box sx={{ height: 400, width: 1 }}>
        <DataGrid
          disableColumnMenu
          disableRowSelectionOnClick
          density="compact"
          loading={loading}
          rows={rows}
          columns={columns}
          getRowId={(row) => row.name}
          slots={{
            toolbar: GridToolbar
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 }
            }
          }}
        />
      </Box>
      <TeamUpdateDialog
        open={openUpdate}
        setOpen={setOpenUpdate}
        team={selected}
      />
      <TeamRemoveDialog
        open={openRemove}
        setOpen={setOpenRemove}
        team={selected}
      />
    </>
  );
}
