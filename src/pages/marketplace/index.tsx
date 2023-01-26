import MarketPlaceBuy from '@/components/marketplace/buy';
import MarketPlaceSell from '@/components/marketplace/sell';
import { Collapse } from '@/components/ui/collapse';
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
    console.log('update tab');
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
        <div className="absolute right-0">
          <Select />
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
