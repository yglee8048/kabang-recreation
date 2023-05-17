import PropTypes from 'prop-types';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  MenuItem,
  Select,
  Stack,
  SvgIcon,
  TextField,
  Typography
} from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';
import CheckboxesTags from '../../../components/CheckBoxesTags';
import { GiftIcon } from '@heroicons/react/20/solid';
import * as React from 'react';
import { useState } from 'react';
import GameRemoveDialog from '/src/sections/game/manage/dialog/game-remove-dialog';

export const ScoreCard = (props) => {
  const { game, options, removeOpen, setRemoveOpen } = props;

  const [type, setType] = useState(game.type);
  const [title, setTitle] = useState(game.title);
  const [image, setImage] = useState(game.image);
  const [description, setDescription] = useState(game.description);
  const [time, setTime] = useState(game.time);
  const [score, setScore] = useState(game.score);
  const [winners, setWinners] = useState(game.winners?.map(winner => ({ name: winner })) || []);

  const updateGame = () => {
    fetch('http://localhost:8080/games', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        id: game.id,
        title: title,
        description: description,
        image: image,
        type: type,
        time: time,
        score: score,
        winners: winners.map(winner => winner.name)
      }, null, 2)
    })
      .then(res => {
        if (res.status === 200) {
          alert('성공!');
        } else {
          alert('실패!');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
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
              justifyContent: 'flex-end'
            }}>
            <TextField
              id="outlined-select"
              select
              label="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem key="TEAM"
                        value="TEAM">
                팀
              </MenuItem>
              <MenuItem key="PERSONAL"
                        value="PERSONAL">
                개인
              </MenuItem>
            </TextField>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pb: 3
            }}
          >
            <Stack
              direction="row"
              spacing={2}
            >
              <Avatar
                src={'/assets/logos/' + image}
                variant="square"
              />
              <Select
                id="outlined-required"
                label="logo"
                labelId="logo-image"
                required
                onChange={(e) => setImage(e.target.value)}
                value={image}
              >
                <MenuItem key="1" value="bonus.png">보너스</MenuItem>
                <MenuItem key="2" value="brain.png">브레인</MenuItem>
                <MenuItem key="3" value="cheer_up.png">응원</MenuItem>
                <MenuItem key="4" value="color-board.jpeg">색 보드</MenuItem>
                <MenuItem key="5" value="color-pen.png">색연필</MenuItem>
                <MenuItem key="6" value="drink.png">드링크</MenuItem>
                <MenuItem key="7" value="emotion.png">감정</MenuItem>
                <MenuItem key="8" value="enjoy.png">엔조이</MenuItem>
                <MenuItem key="9" value="logo-home.png">홈캠프</MenuItem>
                <MenuItem key="10" value="math.png">수학</MenuItem>
                <MenuItem key="11" value="quiz.png">퀴즈</MenuItem>
                <MenuItem key="12" value="team_work.png">팀워크</MenuItem>
                <MenuItem key="13" value="trick_face_w.png">표정연기</MenuItem>
                <MenuItem key="14" value="whistle.png">휘슬</MenuItem>
                <MenuItem key="15" value="xo-game.png">XO 게임</MenuItem>
              </Select>
            </Stack>
          </Box>
          <TextField
            id="outlined-required"
            label="title"
            required
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <TextField
            id="outlined-required"
            label="description"
            required
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </CardContent>
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
            <TextField
              id="outlined-required"
              label="time"
              type="number"
              required
              size="small"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
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
            <TextField
              id="outlined-required"
              label="score"
              type="number"
              required
              size="small"
              onChange={(e) => setScore(e.target.value)}
              value={score}
            />
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
              value={winners}
              onChange={(values) => setWinners(values)}
            />
          </Stack>
        </Stack>
        <Divider/>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="flex-end"
          spacing={2}
          sx={{ p: 2 }}
        >
          <Button onClick={() => updateGame()}>
            저장
          </Button>
          <Button
            sx={{ color: 'red' }}
            onClick={() => setRemoveOpen(true)}
          >
            삭제
          </Button>
        </Stack>
      </Card>
      <GameRemoveDialog
        open={removeOpen}
        setOpen={setRemoveOpen}
        id={game.id}
      />
    </>
  );
};

ScoreCard.propTypes = {
  game: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired
};
