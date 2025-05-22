import { style } from '@vanilla-extract/css';

export const grapeGraphContainer = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const centerChampion = style({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 2, // ✅ 위로 올림
});

export const relatedChampion = style({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
});

export const svgStyle = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
});

export const championImage = style({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '3px solid gold',
  boxShadow: '0 0 10px rgba(255, 215, 0, 0.4)',
  
});

export const grapeDefault = style({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '40px',
  color: 'white',
});
