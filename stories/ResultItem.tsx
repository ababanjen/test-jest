import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
interface IResultItem {
  item: {
    PMID: string;
    summary: string;
    tags: Tags[];
  };
}
export type Items = {
  name: string;
  status: string;
};

export type Tags = {
  name: string;
  info: Items[];
};

const ResultItem: React.FC<IResultItem> = ({ item }) => {
  return (
    // TODO Create your component here
    <div className="rounded-[8px]  w-[930px] p-8 border-[#E5E6EE] border bg-white flex gap-4 flex-col">
      <Header PMID={item.PMID} />
      <Content summary={item.summary} />
      <Footer tags={item.tags} />
    </div>
  );
};

export default ResultItem;
