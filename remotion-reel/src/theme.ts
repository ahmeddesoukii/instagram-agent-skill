import {loadFont} from '@remotion/google-fonts/Cairo';

export const {fontFamily} = loadFont('normal', {
  weights: ['500', '800', '900'],
  subsets: ['arabic'],
});

export const colors = {
  bg: '#0E0E14',
  text: '#F5F3EE',
  muted: '#8A8798',
  bad: '#FF4D6D',
  good: '#3DDC97',
};

// Instagram Reel safe zone on 1080x1920: keep text between y=230 and y=1440,
// and the right 230px clear of the action rail.
export const safeZone: React.CSSProperties = {
  position: 'absolute',
  top: 230,
  bottom: 1920 - 1440,
  left: 90,
  right: 230,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: 48,
};
