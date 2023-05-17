import { useEffect, useState } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { ScoreCard } from './score-card';
import GameAddDialog from './dialog/game-add-dialog';

export default function ScoreBoard(props) {
  const { addOpen, setAddOpen } = props;

  const [memberOptions, setMemberOptions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/members/options')
      .then(res => {
        return res.json();
      })
      .then(data => setMemberOptions(data))
      .catch(err => console.log(err));
  }, []);

  const [teamOptions, setTeamOptions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/teams/options')
      .then(res => {
        return res.json();
      })
      .then(data => setTeamOptions(data))
      .catch(err => console.log(err));
  }, []);

  const [games, setGames] = useState([]);
  const [removeOpen, setRemoveOpen] = useState(false);
  useEffect(() => {
    fetch('http://localhost:8080/games')
      .then(res => {
        return res.json();
      })
      .then(data => setGames(data))
      .catch(err => console.log(err));
  }, [removeOpen, addOpen]);

  return (
    <>
      <Grid
        container
        spacing={3}
      >
        {games.map((game) => (
          <Grid
            xs={12}
            md={12}
            lg={12}
            key={game.id}
          >
            {game.type === 'TEAM'
              ? <ScoreCard
                game={game}
                options={teamOptions}
                removeOpen={removeOpen}
                setRemoveOpen={setRemoveOpen}
              />
              : <ScoreCard
                game={game}
                options={memberOptions}
                removeOpen={removeOpen}
                setRemoveOpen={setRemoveOpen}
              />
            }
          </Grid>
        ))}
      </Grid>
      <GameAddDialog
        open={addOpen}
        setOpen={setAddOpen}
        memberOptions={memberOptions}
        teamOptions={teamOptions}
      />
    </>
  );
}