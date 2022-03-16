const thumbTopPosMin = 3.3;
const thumbTopPosMax = 31.85;
const countVh = window.innerHeight / 100;

const positionToDuration = (position) => {
  return Math.round(
    (1 -
      (position - thumbTopPosMin * countVh) /
        ((thumbTopPosMax - thumbTopPosMin) * countVh)) *
      30
  );
};
const durationToPosition = (duration) => {
  return (
    -(duration / 30 - 1) * ((thumbTopPosMax - thumbTopPosMin) * countVh) +
    thumbTopPosMin * countVh
  );
};
export const DurationAndPosition = {
  positionToDuration,
  durationToPosition,
  thumbTopPosMax,
  thumbTopPosMin,
  countVh,
};
