import { ReactNode } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

interface ContentContainerProps extends FlexProps {
  children: ReactNode;
}

export const ContentContainer = ({
  children,
  ...rest
}: ContentContainerProps) => {
  return (
    <Flex
      px={[0, 140]}
      w="100%"
      maxW={1440}
      margin="0 auto"
      justify="center"
      align="center"
      {...rest}
    >
      {children}
    </Flex>
  );
};
