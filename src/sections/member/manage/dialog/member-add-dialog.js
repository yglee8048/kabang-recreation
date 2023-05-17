import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from '@mui/material';
import { Close, Save } from '@mui/icons-material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { baseUrl } from 'src/api/url';

export default function MemberAddDialog(props) {
  const { open, setOpen } = props;
  const addMember = () => {
    fetch(`${baseUrl}/members`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        id: id,
        name: name,
        teamName: team
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

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [teamOptions, setTeamOptions] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/teams/options`)
      .then(res => {
        return res.json();
      })
      .then(data => setTeamOptions(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Dialog
      maxWidth="sm"
      fullWidth={true}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle>멤버 추가</DialogTitle>
      <DialogContent id="content">
        <Stack
          id="box"
          direction="column"
          spacing={2}
        >
          <TextField
            required
            fullWidth
            id="id"
            label="id"
            type="text"
            variant="standard"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
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
          <InputLabel id="team-label-id">Team Name</InputLabel>
          <Select
            required
            fullWidth
            id="team_name"
            labelId="team-label-id"
            label="Team Name"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          >
            {teamOptions.map((option) => (
              <MenuItem
                key={option.name}
                value={option.name}
              >
                {option.name}({option.detail})
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={addMember}>
          <Save/>
        </Button>
        <Button onClick={() => setOpen(false)}>
          <Close/>
        </Button>
      </DialogActions>
    </Dialog>
  );
}