import { useEffect, useState } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { ScoreCard } from './score-card';

export default function ScoreBoard() {
  const [memberOptions, setMemberOptions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/members/options')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => setMemberOptions(data))
      .catch(err => console.log(err));
  }, []);

  const [teamOptions, setTeamOptions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/teams/options')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => setTeamOptions(data))
      .catch(err => console.log(err));
  }, []);

  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/games')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => setGames(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Grid
      container
      spacing={3}
    >
      {games.map((game) => (
        <Grid
          xs={12}
          md={12}
          lg={12}
          key={game.title}
        >
          {game.type === 'TEAM'
            ? <ScoreCard
              game={game}
              options={teamOptions}
            />
            : <ScoreCard
              game={game}
              options={memberOptions}
            />
          }
        </Grid>
      ))}
    </Grid>
  );
}