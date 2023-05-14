import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: 26,
  borderRadius: 2
}));

const Value = styled('div')({
  position: 'absolute',
  lineHeight: '24px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
});

const Bar = styled('div')({
  height: '100%',
  '&.low': {
    backgroundColor: '#f44336'
  },
  '&.medium': {
    backgroundColor: '#efbb5aa3'
  },
  '&.high': {
    backgroundColor: '#088208a3'
  }
});

const ProgressBar = React.memo(function ProgressBar(props) {
  const { value } = props;
  const valueInPercent = value * 100;

  return (
    <Root>
      <Value><strong>{`${valueInPercent.toLocaleString()} %`}</strong></Value>
      <Bar
        className={clsx({
          low: valueInPercent < 30,
          medium: valueInPercent >= 30 && valueInPercent <= 70,
          high: valueInPercent > 70
        })}
        style={{ maxWidth: `${valueInPercent}%` }}
      />
    </Root>
  );
});

export function renderPosibility(params) {
  if (params.value == null) {
    return '';
  }

  return <ProgressBar value={params.value}/>;
}