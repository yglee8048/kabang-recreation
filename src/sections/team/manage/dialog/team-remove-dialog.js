import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { Close, Delete } from '@mui/icons-material';
import * as React from 'react';
import { baseUrl } from '../../../../api/url';

export default function TeamRemoveDialog(props) {
  const { open, setOpen, team } = props;

  const deleteTeam = () => {
    fetch(`${baseUrl}/teams/${team.name}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status === 200) {
          alert('성공!');
          setOpen(false);
        } else {
          alert('실패!');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle>팀 삭제</DialogTitle>
      <DialogContent id="content">
        <DialogContentText
          sx={{
            color: 'red'
          }}
        >
          정말 삭제하시겠습니까?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={deleteTeam}
          sx={{
            color: 'red'
          }}
        >
          <Delete/>
        </Button>
        <Button onClick={() => setOpen(false)}>
          <Close/>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
