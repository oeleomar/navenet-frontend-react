import { useEffect, useRef, useState } from "react";
import config from "../../config";
import * as Styled from "./styles";
import { Play } from "@styled-icons/feather/Play";
import { Pause } from "@styled-icons/feather/Pause";

export type VideoPlayerProps = {
  video?: string;
};

const usePlayerState = ($videoPlayer: any) => {
  const [playerState, setPlayerState] = useState({
    playing: false,
    percentage: 0,
  });

  const toggleVideoPlay = () => {
    setPlayerState({ ...playerState, playing: !playerState.playing });
  };

  const handleTimeUpdate = () => {
    const currentPercentage =
      ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100;
    setPlayerState({ ...playerState, percentage: currentPercentage });
  };

  const handleChangeVideoPercentage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const currentPercentage = Number(event.target.value);
    $videoPlayer.current.currentTime =
      ($videoPlayer.current.duration / 100) * currentPercentage;

    setPlayerState({ ...playerState, percentage: currentPercentage });
  };

  useEffect(() => {
    if (!$videoPlayer.current) return;
    playerState.playing
      ? $videoPlayer.current.play()
      : $videoPlayer.current.pause();
  }, [playerState.playing, $videoPlayer]);

  return {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangeVideoPercentage,
  };
};

export const VideoPlayer = ({ video = "" }: VideoPlayerProps) => {
  const $videoPlayer = useRef<any>(null);
  const {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangeVideoPercentage,
  } = usePlayerState($videoPlayer);

  if (!video) {
    return (
      <Styled.Wrapper>
        <h1>Nenhum Video Associado</h1>
      </Styled.Wrapper>
    );
  }

  return (
    <>
      <Styled.Video
        ref={$videoPlayer}
        onTimeUpdate={handleTimeUpdate}
        onClick={toggleVideoPlay}
      >
        <Styled.Source src={`${config.url}${config.slugVideo}${video}`} />
      </Styled.Video>
      <Styled.Controls>
        <Styled.ButtonControl onClick={toggleVideoPlay}>
          {playerState.playing ? <Pause size={32} /> : <Play size={32} />}
        </Styled.ButtonControl>
        <Styled.InputControl
          type="range"
          min={0}
          max={100}
          value={playerState.percentage}
          onChange={handleChangeVideoPercentage}
        />
        <Styled.SelectControl>
          {[1, 2, 3].map((val) => (
            <Styled.SelectOptionControl key={`speedChange_${val}`}>
              {val}x
            </Styled.SelectOptionControl>
          ))}
        </Styled.SelectControl>
      </Styled.Controls>
    </>
  );
};
