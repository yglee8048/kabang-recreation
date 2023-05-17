import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField
} from '@mui/material';
import { Close, Save } from '@mui/icons-material';
import * as React from 'react';
import { useState } from 'react';
import { baseUrl } from '../../../../api/url';

export default function TeamAddDialog(props) {
  const { open, setOpen } = props;
  const addTeam = () => {
    fetch(`${baseUrl}/teams`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        name: name,
        leaderId: leaderId
      })
    })
      .then(res => {
        if (res.status === 200) {
          alert('성공');
          setOpen(false);
        } else {
          alert('실패');
        }
      })
      .catch(err => console.log(err));
  };

  const [name, setName] = useState('');
  const [leaderId, setLeaderId] = useState('');

  return (
    <Dialog
      maxWidth="sm"
      fullWidth={true}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle>팀 추가</DialogTitle>
      <DialogContent id="content">
        <Stack
          id="box"
          direction="column"
          spacing={2}
        >
          <TextField
            required
            fullWidth
            id="name"
            label="name"
            type="text"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            fullWidth
            id="leader-id"
            label="leader-id"
            type="text"
            variant="standard"
            value={leaderId}
            onChange={(e) => setLeaderId(e.target.value)}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={addTeam}>
          <Save/>
        </Button>
        <Button onClick={() => setOpen(false)}>
          <Close/>
        </Button>
      </DialogActions>
    </Dialog>
  );
}