import { Box } from '@chakra-ui/react';
import { VFC } from 'react';

type Size = {
  width?: number | string;
  height?: number | string;
};
export const Spacer: VFC<Size> = ({ width, height }) => {
  return <Box w={width ? width : 'full'} h={height} />;
};
