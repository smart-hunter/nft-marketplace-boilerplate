import MarketPlaceBuy from '@/components/marketplace/buy';
import MarketPlaceSell from '@/components/marketplace/sell';
import Select from '@/components/ui/select';
import Tabs from '@/components/ui/tab';
import TabPanel from '@/components/ui/tab/tabpanel';
import { tabItems } from '@/layouts/maketplace/_tab-items';
import MinimalLayout from '@/layouts/_minimal';
import { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import demoData from '../../data/demo.json';

const MarketplacePage: NextPageWithLayout = () => {
  const [tabIdx, setTabIdx] = useState<number>(0);
  const updateTab = (idx: number) => {
    setTabIdx(idx);
  };
  return (
    <>
      <NextSeo title="STAKING" description="Bunzz - Staking Boilerplate" />
      <div className="relative">
        <Tabs
          items={tabItems}
          activeIdx={tabIdx}
          onClick={(idx) => updateTab(idx)}
        ></Tabs>
        <div className="absolute right-10 top-0 flex items-center gap-x-5 text-sm">
          <Select
            selectType="GROUP_SELECT"
            cn="min-w-[200px] px-3 py-2 bg-white rounded-md"
            optionBoardCn="py-2 bg-white rounded-md"
            options={demoData.sortOptions}
            optionCn="hover:bg-gray-200"
            placeholder="Sort by"
            onSelect={(val) => {
              console.log(val);
            }}
          />
          <span>{Number(demoData.totalNFTs).toLocaleString()} items</span>
        </div>
      </div>
      {tabIdx === 0 && (
        <TabPanel>
          <MarketPlaceBuy items={demoData.cardData}></MarketPlaceBuy>
        </TabPanel>
      )}
      {tabIdx === 1 && (
        <TabPanel>
          <MarketPlaceSell
            items={demoData.cardData.slice(0, 3)}
            saleItems={demoData.cardData.slice(0, 2)}
            floorPrice={20}
            totalTrade={210022}
          ></MarketPlaceSell>
        </TabPanel>
      )}
    </>
  );
};

MarketplacePage.getLayout = function getLayout(page) {
  return <MinimalLayout>{page}</MinimalLayout>;
};

export default MarketplacePage;
