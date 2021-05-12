import React from "react";
import Duration from "./DurationActivity.element";

function DurationActivity({ duration, isoDuration }) {
  const data = isoDuration(duration);
  const dataHumanize = data.humanize("it");

  return <Duration>{dataHumanize}</Duration>;
}

export default DurationActivity;
