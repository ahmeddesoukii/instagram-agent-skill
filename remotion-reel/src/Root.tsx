import {Composition, Folder} from 'remotion';
import {Reel, REEL_FRAMES} from './Reel';
import {StatementScene} from './scenes/StatementScene';
import {TipScene} from './scenes/TipScene';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Reel"
        component={Reel}
        durationInFrames={REEL_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />
      <Folder name="Scenes">
        <Composition
          id="StatementScene"
          component={StatementScene}
          durationInFrames={75}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: 'الريل بتاعك بيموت',
            accent: 'في أول ثانيتين',
            accentColor: '#FF4D6D',
            style: {backgroundColor: '#0E0E14'},
          }}
        />
        <Composition
          id="TipScene"
          component={TipScene}
          durationInFrames={105}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            number: '١',
            mistake: 'أهلاً يا جماعة',
            fix: 'ابدأ بأقوى جملة',
            style: {backgroundColor: '#0E0E14'},
          }}
        />
      </Folder>
    </>
  );
};
