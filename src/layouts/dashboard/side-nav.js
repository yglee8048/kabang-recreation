import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Drawer, Stack, Typography, useMediaQuery } from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { items } from './config';
import { adminItems } from './admin-config';
import { SideNavItem } from './side-nav-item';
import { useAuthContext } from '../../contexts/auth-context';
import NextLink from 'next/link';

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const { isAuthenticated } = useAuthContext();

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px'
            }}
          >
            <div>
              <Typography
                color="inherit"
                variant="subtitle1"
              >
                HOMECAMP
              </Typography>
              <Typography
                color="neutral.400"
                variant="body2"
              >
                WORKSHOP
              </Typography>
            </div>
            <Avatar
              component={NextLink}
              href="/"
              src={'/assets/logos/logo-home.png'}
            />
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.400' }}/>
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0
            }}
          >
            {items.map((item) => {
              const active = item.path ? (pathname === item.path) : false;

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </Stack>
        </Box>
        {isAuthenticated && (<>
          <Divider sx={{ borderColor: 'neutral.400' }}/>
          <Box
            component="nav"
            sx={{
              flexGrow: 1,
              px: 2,
              py: 3
            }}
          >
            <Stack
              component="ul"
              spacing={0.5}
              sx={{
                listStyle: 'none',
                p: 0,
                m: 0
              }}
            >
              {adminItems.map((item) => {
                const active = item.path ? (pathname === item.path) : false;

                return (
                  <SideNavItem
                    active={active}
                    disabled={item.disabled}
                    external={item.external}
                    icon={item.icon}
                    key={item.title}
                    path={item.path}
                    title={item.title}
                  />
                );
              })}

            </Stack>
          </Box>
        </>)}
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#0F3067',
            color: 'common.white',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#0F3067',
          color: 'common.white',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
