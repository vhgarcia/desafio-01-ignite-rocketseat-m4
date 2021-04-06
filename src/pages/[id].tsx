import { useState, useCallback } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Header } from '../components/Header';
import { ContinentBanner } from '../components/ContBanner';
import { ContinentDetail } from '../components/ContDescription';
// import { ContinentCities } from '../Components/ContinentCities';

import { continents } from '../utils/continents';
import { ContinentCities } from '../components/ContCities';

interface City {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}
interface ContinentProps {
  continent: {
    id: string;
    name: string;
    call: string;
    callImage: string;
    bannerImage: string;
    about: string;
    countries: number;
    languages: number;
    cities100: number;
    cities: City[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{`WorldTip | ${continent.name}`}</title>
        <meta
          name="description"
          content={`Conheça as cidades mais visitadas da ${continent.name} e prepare sua viagem`}
        />
      </Head>
      <Flex width="100%" flexDir="column" bg="gray.50" align="center">
        <Header />
        <ContinentBanner name={continent.name} image={continent.bannerImage} />
        <ContinentDetail
          about={continent.about}
          countries={continent.countries}
          languages={continent.languages}
          cities100={continent.cities100}
        />
        <ContinentCities cities={continent.cities} />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: continents.map((continent) => {
      return {
        params: {
          id: continent.id,
        },
      };
    }),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  return {
    props: {
      continent: continents.find((continent) => continent.id === id),
    },
  };
};
