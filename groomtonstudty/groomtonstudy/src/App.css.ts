import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('html, body, #root', {
  margin: 0,
  padding: 0,
  height: '100%',
});

export const all = style({
  height: '100%',
  display: 'flex', // 전체를 좌우로 나눔
  flexDirection: 'row',
});

export const left = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const nav = style({
  height: '15%',
  backgroundColor: 'rgb(2, 14, 23)',
});

export const grape = style({
  flex: 1,
  backgroundImage: 'url("/mainBackground.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const champion = style({
  width: '15%',
  backgroundColor: 'rgb(0,10,15)',
});
