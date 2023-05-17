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

export default function GameRemoveDialog(props) {
  const { open, setOpen, id } = props;

  const deleteGame = () => {
    fetch(`${baseUrl}/games/${id}`, {
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
      <DialogTitle>게임 삭제</DialogTitle>
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
          onClick={deleteGame}
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
