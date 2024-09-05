import React from "react";
import { Tags } from "./ResultItem";
import Tag from "./Tag";

type Props = {
  tags: Tags[];
};

const Footer = ({ tags }: Props) => {
  return (
    <div className="flex flex-col gap-y-3">
      {tags.map((tag) => (
        <div className="flex flex-row items-center gap-4">
          <span className="w-[135px] text-[#53606D] font-semibold text-sm">
            {tag.name}
          </span>

          <div className="flex flex-row gap-x-2">
            {tag.info.map((info, index) => (
              <Tag type={index} key={index}>
                <div className="flex gap-1 items-center">
                  <span className="font-semibold text-sm">{info.name}</span>
                  <span>:</span>
                  <span className="text-sm">{info.status}</span>
                </div>
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
