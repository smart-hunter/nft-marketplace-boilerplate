import React, { FC } from 'react';

interface TabType {
  label: string;
}
interface TabProps {
  items: Array<TabType>;
  activeIdx: number;
  onClick: (idx: number) => void;
}
const Tabs: FC<TabProps> = ({ items, activeIdx, onClick }) => {
  return (
    <>
      <div className="flex flex-row border-b-2 border-gray-300">
        {items.map((tab, tabIdx) => {
          return (
            <button
              key={`${tab.label}_${tabIdx}`}
              className={`px-5 py-2 ${
                activeIdx === tabIdx
                  ? 'border-b-2 border-gray-400 font-semibold text-gray-600'
                  : 'text-gray-400'
              }`}
              onClick={() => onClick(tabIdx)}
            >
              <h3>{tab.label}</h3>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Tabs;
