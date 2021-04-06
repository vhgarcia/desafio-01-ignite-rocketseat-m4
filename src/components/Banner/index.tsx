import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { ContentContainer } from '../ContentContainer';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      w="100%"
      height={['163', '335']}
      bgImage="url(https://site.ieee.org/sb-sliet/files/2018/08/night_sky_3-wallpaper-3840x2160.jpg)"
      bgRepeat="no-repeat"
      bgPosition="top"
    >
      <ContentContainer justify="space-between" position="relative">
        <Box p="35">
          <Text fontSize={['20', '36']} fontWeight="medium" color="gray.50">
            5 Continentes,
          </Text>
          <Text fontSize={['20', '36']} fontWeight="medium" color="gray.50">
            infinitas possibilidades.
          </Text>

          <Text
            fontSize={['14', '20']}
            mt={['2', '5']}
            fontWeight="normal"
            color="gray.100"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        {isWideVersion && (
          <Box mt="24">
            <Image src="/Airplane.png" bgSize="cover" />
          </Box>
        )}
      </ContentContainer>
    </Flex>
  );
}
