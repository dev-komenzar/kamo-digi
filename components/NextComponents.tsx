import { chakra } from '@chakra-ui/react';
import Image from 'next/image';

export const NextImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    ['src', 'width', 'height', 'layout'].includes(prop),
});
