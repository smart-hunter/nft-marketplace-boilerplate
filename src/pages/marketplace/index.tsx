import MarketPlaceBuy from '@/components/marketplace/buy';
import MarketPlaceSell from '@/components/marketplace/sell';
import FullPageLoading from '@/components/ui/loading/full-page-loading';
import Select from '@/components/ui/select';
import Tabs from '@/components/ui/tab';
import TabPanel from '@/components/ui/tab/tabpanel';
import { tabItems } from '@/layouts/maketplace/_tab-items';
import MinimalLayout from '@/layouts/_minimal';
import { breakPoints } from '@/lib/hooks/use-breakpoint';
import useLoading from '@/lib/hooks/use-loading';
import { NextPageWithLayout, NFTDataType } from '@/types';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import demoData from '../../data/demo.json';

const MarketplacePage: NextPageWithLayout = () => {
  const [buyItems, setBuyItems] = useState<Array<NFTDataType>>([]);
  const [numPerRow, setNumPerRow] = useState<number>(0);
  const [tabIdx, setTabIdx] = useState<number>(0);
  const [isLoading, showLoading, hideLoading] = useLoading();

  const updateTab = (idx: number) => {
    setTabIdx(idx);
  };
  const loadMoreBuyItems = (num: number) => {
    showLoading();
    setTimeout(() => {
      const newItems = Array(num).fill(demoData.cardData[0]);
      setBuyItems([...buyItems, ...newItems]);
      hideLoading();
    }, 3000);
  };

  useEffect(() => {
    showLoading();
    const handleWindowResize = () => {
      const width = window.innerWidth;
      if (window.innerWidth >= breakPoints['3xl']) {
        setNumPerRow(6);
      } else if (width < breakPoints['3xl'] && width >= breakPoints['2xl']) {
        setNumPerRow(6);
      } else if (width < breakPoints['2xl'] && width >= breakPoints.xl) {
        setNumPerRow(5);
      } else if (width < breakPoints.xl && width >= breakPoints.lg) {
        setNumPerRow(3);
      } else if (width < breakPoints.lg && width >= breakPoints.md) {
        setNumPerRow(3);
      } else if (width < breakPoints.md && width >= breakPoints.sm) {
        setNumPerRow(2);
      } else if (width < breakPoints.sm && width >= breakPoints.xs) {
        setNumPerRow(2);
      } else {
        setNumPerRow(1);
      }
    };
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    setBuyItems(demoData.cardData.slice(0, numPerRow));
    hideLoading();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

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
            groupCn="text-gray-400"
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
          <MarketPlaceBuy
            items={buyItems}
            numPerRow={numPerRow}
            onLoadMore={loadMoreBuyItems}
          ></MarketPlaceBuy>
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

      {isLoading && <FullPageLoading />}
    </>
  );
};

MarketplacePage.getLayout = function getLayout(page) {
  return <MinimalLayout>{page}</MinimalLayout>;
};

export default MarketplacePage;
