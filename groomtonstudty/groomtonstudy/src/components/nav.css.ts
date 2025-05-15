import { style } from '@vanilla-extract/css';

export const navBar = style({
  width: '100%',
  height: '100%', // 부모가 15%를 차지하므로 100%로 채우기
  backgroundColor: 'rgb(2, 14, 23)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
});

export const leftSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
});

export const partyButton = style({
  backgroundColor: 'rgb(2, 14, 23)',
  color: 'white',
  fontSize: '25px',
  padding: '4px 10px',
  border: '3px solid #333',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
    transition: 'transform 0.2s ease, background-color 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'scale(1.1) translateY(-2px)',
      borderRadius: '6px',
    },
  },
});

export const menuText = style({
  color: '#eee',
  fontSize: '25px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, background-color 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'scale(1.1) translateY(-2px)',
      borderRadius: '6px',
    },
  },
});

export const goldButton = style({
  backgroundColor: '#bfa35a',
  color: '#000',
  fontWeight: 'bold',
  fontSize: '15px',
  padding: '4px 10px',
  borderRadius: '16px',
  border: '1px solid #8c7a40',
  cursor: 'pointer',
    transition: 'transform 0.2s ease, background-color 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'scale(1.1) translateY(-2px)',
      borderRadius: '16px',
    },
  },
});

export const rightSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginRight: '50px'
});

export const iconButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  width: '40px',
  height: '40px',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.2s ease, background-color 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'scale(1.1) translateY(-2px)',
      borderRadius: '6px',
    },
  },
});

export const currency = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0px',
  color: '#ccc',
  fontSize: '13px',
});

export const iconImage = style({
  width: '70px',
  height: '70px',
  objectFit: 'contain',
});

export const divider = style({
  width: '2px',
  height: '50px',
  backgroundColor: '#8c7a40',
  opacity: 0.5,
});