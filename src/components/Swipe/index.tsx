import { Box } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SwipeItem } from './SwipeItem';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface Continent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface SwipeProps {
  continents: Continent[];
}

export function Swipe({ continents }: SwipeProps) {
  return (
    <Box width="100%" h="450" mt="14" mb="2rem">
      <Swiper slidesPerView={1} navigation pagination loop>
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <SwipeItem
              backgroundImageSrc={continent.callImage}
              title={continent.name}
              subtitle={continent.call}
              href={`/${continent.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
