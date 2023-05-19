import PropTypes from 'prop-types';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';
import { GiftIcon } from '@heroicons/react/20/solid';

export const GameCard = (props) => {
  const { game } = props;

  const getTypeChip = (type) => {
    if (type === 'TEAM') {
      return (
        <Chip
          label="팀"
          color="primary"
        />);
    } else if (type === 'PERSONAL') {
      return (
        <Chip
          label="개인"
          color="success"
        />);
    }
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardContent>
        <Grid container>
          <Grid item
                xs={6}>
            <Stack
              alignItems="center"
              direction="row"
              spacing={1}
            >
              <SvgIcon
                color="action"
                fontSize="small"
              >
                <ClockIcon/>
              </SvgIcon>
              <Typography
                color="text.secondary"
                display="inline"
                variant="body2"
              >
                약 {game.time} 분
              </Typography>
            </Stack>
          </Grid>
          <Grid item
                xs={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'right'
              }}>
              {getTypeChip(game.type)}
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar
            src={'/assets/logos/' + game.image}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          gutterBottom
          variant="h5"
        >
          {game.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {game.description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }}/>
      <Divider/>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <EmojiEvents/>
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            Winners
          </Typography>
        </Stack>
      </Stack>
      {game?.winners?.map((winner) => (
        <Grid container
              key={winner.score}>
          <Stack
            key={winner.score}
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{ p: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={1}
            >
              <SvgIcon
                color="action"
                fontSize="small"
              >
                <GiftIcon/>
              </SvgIcon>
              <Typography
                color="text.secondary"
                display="inline"
                variant="body2"
              >
                {winner.score} 점
              </Typography>
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              spacing={1}
            >
              <Typography
                color="text.secondary"
                display="inline"
                variant="body2"
              >
                {winner.names.map((o) => (`${o.name}(${o.detail})`)).join(', ')}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.object.isRequired
};
