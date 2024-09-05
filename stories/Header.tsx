import React from "react";
import Pill from "./Pill";
import CloseIcon from "./assets/CloseIcon";

type Props = {
  PMID: string;
};
const Header = ({ PMID }: Props) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-[#7E86A7] font-semibold">
          PMID: {PMID}
        </span>
        <span className="text-[#53606D] text-base">
          A pandemic of acute respiratory distress syndrome-role of &nbsp;
          <b>lung transplant</b> in <b>coronavirus</b> disease-2019-associated
          respiratory failure
        </span>
      </div>
      <div className="w-max">
        <Pill className="bg-[#F5E9EA] text-[#9F1E2F] rounded-3xl px-3 py-2">
          <div className="flex row items-center gap-x-3">
            <span className="cursor-pointer">
              <CloseIcon />
            </span>
            <span className="text-sm">AI Excluded</span>
          </div>
        </Pill>
      </div>
    </div>
  );
};

export default Header;
