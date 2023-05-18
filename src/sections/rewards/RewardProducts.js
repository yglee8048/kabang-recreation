import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import NextLink from 'next/link';

export default function RewardProducts(props) {
  const { title, buttonText, buttonDisabled, products = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title={title}/>
      <Stack spacing={2}
             direction="row"
             justifyContent="center"
             alignItems="center"
      >
        <Typography variant="caption">
          ※ 이미지는 실제 상품과 무관합니다.
        </Typography>
      </Stack>
      <List>
        {products.map((product, index) => {
          const hasDivider = index < products.length - 1;

          return (
            <ListItem
              divider={hasDivider}
              key={product.id}
            >
              <ListItemAvatar>
                {
                  product.image
                    ? (
                      <Box
                        component="img"
                        src={product.image}
                        sx={{
                          borderRadius: 1,
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                    : (
                      <Box
                        sx={{
                          borderRadius: 1,
                          backgroundColor: 'neutral.200',
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                }
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={product.description}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider/>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={buttonDisabled ? (<></>)
            : ((
              <SvgIcon fontSize="small">
                <ArrowRightIcon/>
              </SvgIcon>
            ))}
          size="small"
          variant="text"
          component={NextLink}
          href={`/members`}
          disabled={buttonDisabled}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}