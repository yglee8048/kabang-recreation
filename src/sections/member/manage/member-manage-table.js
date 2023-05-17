import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Button, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import MemberUpdateDialog from './dialog/member-update-dialog';
import MemberRemoveDialog from './dialog/member-remove-dialog';

export default function MemberManageTable(props) {
  const columns =
    [
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
              <Button onClick={() => updateMember(rowData.row)}>
                <Edit/>
              </Button>
              <Button onClick={() => deleteMember(rowData)}>
                <Delete/>
              </Button>
            </Stack>
          );
        }
      }
    ];

  const [selected, setSelected] = useState(null);
  const [openUpdate, setOpenUpdate] = useState(false);
  const updateMember = (row) => {
    setSelected(row);
    setOpenUpdate(true);
  };

  const [openRemove, setOpenRemove] = useState(false);
  const deleteMember = (row) => {
    setSelected(row);
    setOpenRemove(true);
  };

  const { openAdd } = props;
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    fetch('http://ec2-52-78-116-14.ap-northeast-2.compute.amazonaws.com/members')
      .then(res => {
        return res.json();
      })
      .then(members => setRows(members))
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
          getRowId={(row) => row.id}
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
      <MemberUpdateDialog
        open={openUpdate}
        setOpen={setOpenUpdate}
        member={selected}
      />
      <MemberRemoveDialog
        open={openRemove}
        setOpen={setOpenRemove}
        member={selected}
      />
    </>
  );
}
