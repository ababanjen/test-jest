import React from "react";

type Props = {
  summary: string;
};
const Summary = ({ summary }: Props) => {
  return (
    <div className="text-[#53606D] text-sm space-x-1">
      <span className="font-semibold">Summary :</span>
      <span>{summary}</span>
    </div>
  );
};
export default Summary;
