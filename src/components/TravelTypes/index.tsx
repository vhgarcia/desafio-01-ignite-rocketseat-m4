import { Item } from './items';
import { ContentContainer } from '../ContentContainer';

export const TravelTypes = () => {
  return (
    <ContentContainer
      mt={['9', '28']}
      flexWrap={['wrap', 'wrap', 'nowrap']}
      justify={['center', 'center', 'space-between']}
      align="center"
      px={['50', '140']}
    >
      <Item imageSrc="/cocktail.png" title="Vida Noturna" />
      <Item imageSrc="/surf.png" title="praia" />
      <Item imageSrc="/building.png" title="moderno" />
      <Item imageSrc="/museum.png" title="clássico" />
      <Item imageSrc="/earth.png" title="e mais..." />
    </ContentContainer>
  );
};
