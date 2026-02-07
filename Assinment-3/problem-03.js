//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
  if (typeof omr !== "object") {
    return "Invalid";
  }
  const totalQuestion = omr.right + omr.wrong + omr.skip;
  if (totalQuestion !== 100) {
    return "Invalid";
  }
  const totalPoint = omr.right * 1 - omr.wrong * 0.5;
  return Math.round(totalPoint);
}
