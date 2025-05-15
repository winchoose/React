import { style, globalStyle } from '@vanilla-extract/css';

export const me = style({
    display: 'flex',
    gap: '5px',
    marginLeft: '5px'
});

export const meImg = style({
  width: '70px',         // 원하는 크기
  height: '70px',
  borderRadius: '50%',   // ✅ 완전한 원형
  overflow: 'hidden',    // 이미지 넘침 방지
  border: '2px solid white',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#222', // 빈 상태일 때 배경
  cursor: 'pointer',
  marginTop: '25px'
});

export const text = style({
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  gap: '4px', // ✅ 텍스트 사이 간격 줄이기 (2~4px 추천)
});
globalStyle(`${text} h1`, {
  margin: 0,
  fontSize: '30px',
  fontWeight: 600,
  marginTop: '25px'
});

globalStyle(`${text} h3`, {
  margin: 0,
  fontSize: '15px',
  fontWeight: 400,
  color: 'limegreen',
  marginBottom: '33px'
});

export const profileImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const championfileImg = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const me2 = style({
    display: 'flex',
    gap: '10px',
    marginTop: '-20px',
    marginLeft: '10px',
    marginBottom: '-30px',
    paddingBottom: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, background-color 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'scale(1.03) translateY(-2px)',
    },
  },
});

export const divider = style({
});

export const scrollContainer = style({
    height: 'calc(100vh - 150px)',
  overflowY: 'auto',
  overflowX: 'hidden',
  position: 'relative',

  selectors: {
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
  },
});