import * as Styled from "./styles";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export type LoadingProgressBarProps = {
  percentage?: number;
};

export const LoadingProgressBar = ({
  percentage = 0,
}: LoadingProgressBarProps) => {
  return (
    <Styled.Wrapper>
      <CircularProgressbar
        value={percentage}
        maxValue={100}
        text={`${percentage}%`}
      />
    </Styled.Wrapper>
  );
};
