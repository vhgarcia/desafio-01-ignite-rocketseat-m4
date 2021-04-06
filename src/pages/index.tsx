/* eslint-disable no-shadow */
import { Flex, Divider, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { ContentContainer } from '../components/ContentContainer';
import { Header } from '../components/Header';
import { Swipe } from '../components/Swipe';
import { TravelTypes } from '../components/TravelTypes';
import { continents } from '../utils/continents';

interface Continent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Inicio | worldTrip</title>
      </Head>
      <Flex bg="gray.50" width="100%" flexDir="column" align="center">
        <Header />
        <Banner />
        <TravelTypes />
        <Divider
          mt="20"
          mb="14"
          borderColor="blue.800"
          border="2px"
          w="90px"
          borderRadius="full"
        />
        <ContentContainer flexDir="column">
          <Heading color="blue.800" fontWeight="normal" align="center">
            Vamos nessa ? <br /> Então escolha seu continente
          </Heading>
          <Swipe continents={continents} />
        </ContentContainer>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      continents: continents.map((continent) => ({
        id: continent.id,
        name: continent.name,
        call: continent.call,
        callImage: continent.callImage,
      })),
    },
  };
};
