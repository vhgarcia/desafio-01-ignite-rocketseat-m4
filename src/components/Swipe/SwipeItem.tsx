import { Flex, Heading, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface SwipeItemProps {
  backgroundImageSrc: string;
  title: string;
  subtitle: string;
  href: string;
}

export function SwipeItem({
  backgroundImageSrc,
  title,
  subtitle,
  href,
}: SwipeItemProps) {
  return (
    <Flex
      backgroundImage={`url('${backgroundImageSrc}')`}
      direction="row"
      justify="center"
      align="center"
      h="450px"
      color="gray.50"
      flexDir="column"
    >
      <Link href={href} passHref>
        <ChakraLink
          _hover={{ color: 'yellow.500' }}
          justify="center"
          align="center"
        >
          <Heading fontSize={['xl', '3xl', '5xl']} fontWeight="bold">
            {title}
          </Heading>
          <Text
            mt="1rem"
            color="gray.300"
            fontWeight="bold"
            fontSize={['md', 'lg', 'xl', '1xl']}
          >
            {subtitle}
          </Text>
        </ChakraLink>
      </Link>
    </Flex>
  );
}
