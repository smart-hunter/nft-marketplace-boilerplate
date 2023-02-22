import BoxArrowUpRightIcon from '@/components/icons/box-arrow-up-right';
import ReloadIcon from '@/components/icons/reload';
import ShareIcon from '@/components/icons/share';
import ThreeDotsIcon from '@/components/icons/threedots';
import Button from '@/components/ui/button/button';
import MinimalLayout from '@/layouts/_minimal';
import { NFTDataType, NextPageWithLayout } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
import { useMoralisApi } from '@/lib/hooks/use-moralis-api';

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = () => {
  const { nfts } = useMoralisApi('');
  return {
    paths: nfts?.map((item: { tokenId: any }) => {
      return {
        params: { id: item.tokenId },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { nfts } = useMoralisApi('');
  const { id } = context.params as IParams;
  const data = nfts?.filter(
    (item: { tokenId: string }) => item.tokenId === id
  )[0];
  return {
    props: {
      data,
    },
  };
};

const NFTDetailPage: NextPageWithLayout = ({ data }) => {
  const properties = data?.metadata?.attributes
    ? data?.metadata?.attributes
    : [];
  return (
    <>
      <NextSeo title="STAKING" description="Bunzz - Staking Boilerplate" />
      <div className="flex w-full flex-col gap-y-5 gap-x-10 px-5 xs:flex-row xs:gap-y-0 2xl:px-56">
        <div className="flex w-full flex-col gap-y-4">
          <div className="flex w-full gap-x-5">
            <div className="w-full">
              <img src={data.metadata.image} className="rounded-xl bg-white p-5" />
            </div>
            <div className="flex flex-col gap-y-3">
              <Button color="white" shape="circle">
                <ShareIcon />
              </Button>
              <Button color="white" shape="circle">
                <ThreeDotsIcon />
              </Button>
              <Button color="white" shape="circle">
                <BoxArrowUpRightIcon />
              </Button>
              <Button color="white" shape="circle">
                <ReloadIcon />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <h3 className="">{data.name}</h3>
            <sub className="text-gray-400">Owned by</sub>
            <sub>{data.ownerOf}</sub>
          </div>
          <p>Current Price</p>
          <h1>
            {data.price} {nftData.currency}{' '}
            <span className="text-base text-gray-400">$100.05</span>
          </h1>
          <Button
            shape="rounded"
            variant="solid"
            size="small"
            className="w-[150px]"
          >
            Buy
          </Button>
        </div>

        <div className="flex w-full flex-col gap-y-5">
          <div className="flex w-full flex-col gap-y-3 rounded-xl bg-white p-5">
            <h2>Description</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="flex w-full flex-col gap-y-3 rounded-xl bg-white p-5">
            <h2>Properties</h2>
            {properties.map((property, pIdx) => {
              return (
                <div
                  className="flex w-full items-center"
                  key={`${pIdx}_${property.name}`}
                >
                  <span className="w-1/3">{property.trait_type}</span>
                  <span className="w-1/3">{property.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

NFTDetailPage.getLayout = function getLayout(page) {
  return <MinimalLayout>{page}</MinimalLayout>;
};

export default NFTDetailPage;
