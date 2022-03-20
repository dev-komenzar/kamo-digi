import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Deck } from '../components/Deck';
import { NextImage } from '../components/NextComponents';

const Home: NextPage = () => {
  const mainColor = 'orange.400';
  return (
    <>
      <Box id="header" w="full" h="auto" bgColor="white">
        <Heading as="h1" fontSize="xl" textAlign="left">
          鴨川デジタル相談所
        </Heading>
      </Box>
      <Flex
        w="full"
        backgroundImage="/mesh-gradient.png"
        backgroundPosition="center"
        backgroundSize="cover"
        justify={'center'}
      >
        <VStack
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          maxW={{ base: '2xl', md: '3xl' }}
          textAlign="center"
          align="center"
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          >
            仲間と生きるための{' '}
            <Text as={'span'} color={mainColor}>
              テック
            </Text>
          </Heading>
          <Text color="gray.500" maxW={'3xl'}>
            もう一度社会を作りなおすためには、まず身近な友だちや仲間とともに生きる意識をもつことが重要だと思います。
            <br />
            グローバルに広がるマーケットから分離されたローカルな輪を重層的に作っていく。そのためのテックをご提案させていただきます。
          </Text>
          <Box
            id="photo-card"
            w="60vw"
            h="40vw"
            bgColor="white"
            boxShadow={'2xl'}
            rounded="xl"
            p="0"
            overflow={'hidden'}
          >
            <NextImage
              src="/kamogawa.jpg"
              width="1280px"
              height="854px"
              objectFit={'cover'}
            />
          </Box>
        </VStack>
      </Flex>
      <Flex
        w="full"
        h="90vh"
        justify={'center'}
        alignItems="center"
        position={'absolute'}
        overflow="hidden"
      >
        <Deck />
      </Flex>
    </>
  );
};

export default Home;
