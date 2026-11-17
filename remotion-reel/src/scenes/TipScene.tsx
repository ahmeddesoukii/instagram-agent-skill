import {Easing, Interactive, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Words} from '../Words';
import {colors, fontFamily, safeZone} from '../theme';

const Strike: React.FC<{readonly at: number}> = ({at}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return (
    <div
      style={{
        position: 'absolute',
        top: '52%',
        right: 0,
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.bad,
        width: interpolate(frame, [at, at + 0.35 * fps], ['0%', '100%'], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.bezier(0.65, 0, 0.35, 1),
        }),
      }}
    />
  );
};

const TipSceneInner = ({
  number,
  mistake,
  fix,
}: {
  readonly number: string;
  readonly mistake: string;
  readonly fix: string;
}) => {
  const {fps} = useVideoConfig();
  return (
    <div style={safeZone}>
      <div
        dir="rtl"
        style={{
          fontFamily,
          fontSize: 200,
          fontWeight: 900,
          lineHeight: 1,
          color: colors.bad,
        }}
      >
        {number}
      </div>
      <div style={{position: 'relative'}}>
        <Words
          text={mistake}
          delay={Math.round(0.2 * fps)}
          style={{fontSize: 84, fontWeight: 800, color: colors.muted}}
        />
        <Strike at={Math.round(1.1 * fps)} />
      </div>
      <Words
        text={fix}
        delay={Math.round(1.6 * fps)}
        style={{fontSize: 104, fontWeight: 900, color: colors.good}}
      />
    </div>
  );
};

export const TipScene = Interactive.create({
  Component: TipSceneInner,
  layout: 'absolute-fill',
  schema: {
    ...Interactive.backgroundSchema,
    number: {type: 'string', default: '١', description: 'Tip number'},
    mistake: {type: 'string', default: '', description: 'The mistake'},
    fix: {type: 'string', default: '', description: 'The fix'},
  },
});
