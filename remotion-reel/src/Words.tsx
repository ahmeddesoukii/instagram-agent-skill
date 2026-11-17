import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {fontFamily} from './theme';

// Arabic is animated word by word (never letter by letter) inside a dir="rtl"
// container, so letters stay joined and the sentence reads right to left.
export const Words: React.FC<{
  readonly text: string;
  readonly delay?: number;
  readonly style?: React.CSSProperties;
}> = ({text, delay = 0, style}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const words = text.split(' ');
  const stagger = Math.round(0.12 * fps);

  return (
    <div
      dir="rtl"
      lang="ar"
      style={{
        fontFamily,
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '0.28em',
        lineHeight: 1.35,
        textAlign: 'right',
        ...style,
      }}
    >
      {words.map((w, i) => {
        const start = delay + i * stagger;
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: interpolate(frame, [start, start + 0.3 * fps], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
              translate: interpolate(
                frame,
                [start, start + 0.45 * fps],
                ['0px 60px', '0px 0px'],
                {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                },
              ),
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};
