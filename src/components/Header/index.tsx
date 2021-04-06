import Link from 'next/link';
import { Flex } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/dist/client/router';

export function Header() {
  return (
    <Flex w="100%" h={['50', '100']} align="center" justify="center">
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="logo" />
        </a>
      </Link>
    </Flex>
  );
}
