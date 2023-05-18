import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  MenuItem,
  Select,
  Stack,
  SvgIcon,
  TextField,
  Typography
} from '@mui/material';
import { Close, EmojiEvents, Save } from '@mui/icons-material';
import * as React from 'react';
import { useState } from 'react';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import { GiftIcon } from '@heroicons/react/20/solid';
import CheckboxesTags from '../../../../components/CheckBoxesTags';
import { baseUrl } from '../../../../api/url';

export default function GameAddDialog(props) {
  const { open, setOpen, memberOptions, teamOptions } = props;

  const [type, setType] = useState('TEAM');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [winners, setWinners] = useState([]);
  const addGame = () => {
    fetch(`${baseUrl}/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        title: title,
        description: description,
        image: image,
        type: type,
        time: time,
        score: score,
        winners: winners.map(winner => winner.name)
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

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle>게임 추가</DialogTitle>
      <DialogContent id="content">
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
                  <MenuItem key="1"
                            value="bonus.png">보너스</MenuItem>
                  <MenuItem key="2"
                            value="brain.png">브레인</MenuItem>
                  <MenuItem key="3"
                            value="cheer_up.png">응원</MenuItem>
                  <MenuItem key="4"
                            value="color-board.png">색 보드</MenuItem>
                  <MenuItem key="5"
                            value="color-pen.png">색연필</MenuItem>
                  <MenuItem key="6"
                            value="drink.png">드링크</MenuItem>
                  <MenuItem key="7"
                            value="emotion.png">감정</MenuItem>
                  <MenuItem key="8"
                            value="enjoy.png">엔조이</MenuItem>
                  <MenuItem key="9"
                            value="logo-home.png">홈캠프</MenuItem>
                  <MenuItem key="10"
                            value="math.png">수학</MenuItem>
                  <MenuItem key="11"
                            value="quiz.png">퀴즈</MenuItem>
                  <MenuItem key="12"
                            value="team_work.png">팀워크</MenuItem>
                  <MenuItem key="13"
                            value="trick_face_w.png">표정연기</MenuItem>
                  <MenuItem key="14"
                            value="whistle.png">휘슬</MenuItem>
                  <MenuItem key="15"
                            value="xo-game.png">XO 게임</MenuItem>
                  <MenuItem key="16"
                            value="fast.png">FAST</MenuItem>
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
              {type === 'PERSONAL'
                ?
                (<CheckboxesTags
                  label={type}
                  options={memberOptions}
                  value={winners}
                  onChange={(values) => setWinners(values)}
                />)
                :
                (<CheckboxesTags
                  label={type}
                  options={teamOptions}
                  value={winners}
                  onChange={(values) => setWinners(values)}
                />)
              }
            </Stack>
          </Stack>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={addGame}>
          <Save/>
        </Button>
        <Button onClick={() => setOpen(false)}>
          <Close/>
        </Button>
      </DialogActions>
    </Dialog>
  );
}