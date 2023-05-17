import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { Close, Save } from '@mui/icons-material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { baseUrl } from 'src/api/url';

export default function MemberUpdateDialog(props) {
  const { open, setOpen, member } = props;

  const updateMember = () => {
    fetch(`${baseUrl}/members`, {
      method: 'PUT',
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

  const [id, setId] = useState(member?.id || '');
  const [name, setName] = useState(member?.name || '');
  const [team, setTeam] = useState(member?.teamName || '');
  useEffect(() => {
    setId(member?.id || '');
    setName(member?.name || '');
    setTeam(member?.teamName || '');
  }, [member]);

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
      <DialogTitle>멤버 수정</DialogTitle>
      <DialogContent id="content">
        <Box
          id="box"
          component="form"
        >
          <TextField
            required
            disabled
            fullWidth
            id="id"
            label="id"
            type="text"
            variant="standard"
            value={id}
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
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={updateMember}>
          <Save/>
        </Button>
        <Button onClick={() => setOpen(false)}>
          <Close/>
        </Button>
      </DialogActions>
    </Dialog>
  );
}