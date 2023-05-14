import PropTypes from 'prop-types';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';
import CheckboxesTags from '../../components/CheckBoxesTags';
import { GiftIcon } from '@heroicons/react/20/solid';

export const ScoreCard = (props) => {
  const { game, options } = props;

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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right'
          }}>
          {getTypeChip(game.type)}
        </Box>
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
            {game.score} 점
          </Typography>
        </Stack>
      </Stack>
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
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <CheckboxesTags
            label={game.type}
            options={options}
          />
        </Stack>
      </Stack>
    </Card>
  );
};

ScoreCard.propTypes = {
  game: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired
};
