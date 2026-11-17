import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {StatementScene} from './scenes/StatementScene';
import {TipScene} from './scenes/TipScene';
import {colors} from './theme';

export const REEL_FRAMES = 75 + 75 + 3 * 105 + 90 - 5 * 9;

export const Reel = () => {
  const {fps} = useVideoConfig();
  const t = () => (
    <TransitionSeries.Transition
      presentation={slide({direction: 'from-left'})}
      timing={linearTiming({durationInFrames: 9})}
    />
  );
  return (
    <AbsoluteFill style={{backgroundColor: colors.bg}}>
      <TransitionSeries name="Scenes">
        <TransitionSeries.Sequence name="Hook" durationInFrames={2.5 * fps}>
          <StatementScene
            title="الريل بتاعك بيموت"
            accent="في أول ثانيتين"
            accentColor={colors.bad}
            style={{backgroundColor: colors.bg}}
          />
        </TransitionSeries.Sequence>
        {t()}
        <TransitionSeries.Sequence name="Stake" durationInFrames={2.5 * fps}>
          <StatementScene
            title="٣ غلطات"
            accent="هي السبب"
            accentColor={colors.good}
            style={{backgroundColor: '#15151F'}}
          />
        </TransitionSeries.Sequence>
        {t()}
        <TransitionSeries.Sequence name="Tip 1" durationInFrames={3.5 * fps}>
          <TipScene
            number="١"
            mistake="أهلاً يا جماعة"
            fix="ابدأ بأقوى جملة"
            style={{backgroundColor: colors.bg}}
          />
        </TransitionSeries.Sequence>
        {t()}
        <TransitionSeries.Sequence name="Tip 2" durationInFrames={3.5 * fps}>
          <TipScene
            number="٢"
            mistake="الكلام تحت خالص"
            fix="خلّي النص في النص"
            style={{backgroundColor: '#15151F'}}
          />
        </TransitionSeries.Sequence>
        {t()}
        <TransitionSeries.Sequence name="Tip 3" durationInFrames={3.5 * fps}>
          <TipScene
            number="٣"
            mistake="نفس الكادر ١٠ ثواني"
            fix="غيّر الكادر كل ٣"
            style={{backgroundColor: colors.bg}}
          />
        </TransitionSeries.Sequence>
        {t()}
        <TransitionSeries.Sequence name="Payoff" durationInFrames={3 * fps}>
          <StatementScene
            title="احفظه قبل ما تصوّر"
            accent="أول ثانيتين"
            accentColor={colors.bad}
            style={{backgroundColor: '#15151F'}}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
