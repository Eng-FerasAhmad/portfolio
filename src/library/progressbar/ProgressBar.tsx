import ProgressBar from '@ramonak/react-progress-bar';
import { ProgressContainer } from './styles';
import { color } from '../../style/color';

interface Props {
  color: string;
  completed: number;
}

export default function ProgressBarComponent(props: Props): JSX.Element {
  return (
    <ProgressContainer>
      <ProgressBar
        completed={props.completed}
        bgColor={props.color}
        height="15px"
        // isLabelVisible={false}
        labelSize="12px"
        baseBgColor="#d8d8cd"
        labelColor={color.dark}
        transitionTimingFunction="ease"
        animateOnRender
      />
    </ProgressContainer>
  );
}
