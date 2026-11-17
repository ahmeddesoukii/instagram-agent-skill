import {Interactive} from 'remotion';
import {Words} from '../Words';
import {colors, safeZone} from '../theme';

const StatementSceneInner = ({
  title,
  accent,
  accentColor,
}: {
  readonly title: string;
  readonly accent: string;
  readonly accentColor: string;
}) => (
  <div style={safeZone}>
    <Words text={title} style={{fontSize: 118, fontWeight: 900, color: colors.text}} />
    {accent ? (
      <Words
        text={accent}
        delay={12}
        style={{fontSize: 118, fontWeight: 900, color: accentColor}}
      />
    ) : null}
  </div>
);

export const StatementScene = Interactive.create({
  Component: StatementSceneInner,
  layout: 'absolute-fill',
  schema: {
    ...Interactive.backgroundSchema,
    title: {type: 'string', default: '', description: 'Main line'},
    accent: {type: 'string', default: '', description: 'Highlighted line'},
    accentColor: {type: 'string', default: '#FF4D6D', description: 'Highlight color'},
  },
});
