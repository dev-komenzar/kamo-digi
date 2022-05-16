import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Deck } from '../components/Deck';
import { NextImage } from '../components/NextComponents';

const Home: NextPage = () => {
  const mainColor = 'orange.400';
  const [year, setYear] = useState(2022);
  useEffect(() => {
    const thisYear = dayjs().year();
    setYear(thisYear);
  }, []);
  return (
    <Box as="article" mx={0}>
      <Box
        as="header"
        id="header"
        w="full"
        h="auto"
        px={3}
        py={2}
        bgColor="white"
      >
        <Heading
          as="h1"
          fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          letterSpacing="wider"
          color="gray.600"
          textAlign="left"
          fontFamily="heading"
        >
          鴨川デジタル相談所
        </Heading>
      </Box>
      <Flex
        as="section"
        w="full"
        backgroundImage="/mesh-gradient.png"
        backgroundPosition="center"
        backgroundSize="cover"
        justify="center"
        fontFamily="body"
      >
        <VStack
          spacing={{ base: 8, md: 10 }}
          px={{ base: 3, md: 5, lg: 8 }}
          py={{ base: 5, md: 8 }}
          maxW={{ base: '2xl', md: '3xl' }}
          textAlign="center"
          align="center"
        >
          <Heading
            fontWeight={600}
            letterSpacing="wide"
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            fontFamily="heading"
          >
            仲間と生きるための
            <br />
            <Text as="span" color={mainColor}>
              テック
            </Text>
          </Heading>
          <VStack
            color="gray.600"
            maxW={{ base: 'lg', lg: '2xl' }}
            lineHeight="taller"
          >
            <Text>
              もう一度社会を作りなおすためには、
              まず身近な友だちや仲間とともに生きる意識をもつことが重要です。
            </Text>
            <Text>
              グローバルに広がるマーケットから
              分離されたローカルな輪を重層的に作っていく。
              鴨川デジタル相談所はそのためのテックを提案します。
            </Text>
            <Text>
              そんなことを思いつつ、ITやWebの何でも屋をやっています。なにか困ったら、アイデアがあれば、ぜひご相談ください。
            </Text>
            <Text>テスト</Text>
          </VStack>
          <Box
            id="photo-card"
            w={{ base: '90vw', md: '80vw', lg: '60vw' }}
            h={{ base: '60vw', md: '50vw', lg: '40vw' }}
            bgColor="white"
            boxShadow="2xl"
            rounded="xl"
            p="0"
            overflow="hidden"
          >
            <NextImage
              src="/kamogawa.jpg"
              width="1280px"
              height="854px"
              objectFit="cover"
            />
          </Box>
        </VStack>
      </Flex>
      <Center as="section" mt={4} flexDirection="column">
        <Heading
          as="h2"
          fontWeight={500}
          color="gray.700"
          fontSize="lg"
          fontFamily="heading"
        >
          鴨川デジタル相談所がやっていること
        </Heading>
        <Spacer height={2} />
        <Text fontSize="sm" color="gray.600">
          左右にスワイプ
        </Text>
      </Center>
      <Flex
        w="100vw"
        h="90vh"
        justify="center"
        alignItems="center"
        overflowX="hidden"
        overflowY="visible"
        pos="absolute"
        fontFamily="body"
      >
        <Deck />
      </Flex>
      <Spacer height="90vh" bgColor="white" />
      <Spacer height={24} />
      <VStack
        as="section"
        w="full"
        justify="center"
        alignItems="center"
        fontFamily="body"
        spacing={4}
      >
        <Avatar size="2xl" src="/avator-640.jpeg" name="Takuya Kometani" />
        <Heading fontSize="3xl" color="gray.700" fontFamily="heading">
          こめたに・たくや
        </Heading>
        <Link
          href="https://instagram.com/t_komenzar"
          fontWeight={600}
          color={mainColor}
          isExternal
        >
          @t_komenzar (instagram) <ExternalLinkIcon mx={2} />
        </Link>
        <Link
          href="mailto:takuya.kometan@gmail.com"
          fontWeight={600}
          color={mainColor}
        >
          takuya.kometan@gmail.com
        </Link>
        <VStack spacing={3} lineHeight="taller">
          <Text color="gray.600" maxW={{ base: 'xs', md: 'sm', lg: 'md' }}>
            フリーランスエンジニアであり自転車旅人。鴨川デジタル相談所という屋号で京都を中心に活動する。
          </Text>
          <Text color="gray.600" maxW={{ base: 'xs', md: 'sm', lg: 'md' }}>
            熊野寮での学生生活を経て「ともに生きる空間」を作ることに興味がある。
            一緒に作っていきましょう。
          </Text>
          <Text color="gray.600" maxW={{ base: 'xs', md: 'sm', lg: 'md' }}>
            物を見つけたり、捨てられたものを活用する能力が高い。ヒンディー語でいうजुगाड़
            (jugaad) の精神に富んでいる。
          </Text>
          <Text color="gray.600" maxW={{ base: 'xs', md: 'sm', lg: 'md' }}>
            世界１２か国を自転車で旅をした。次の目標はユーラシア大陸横断。
            愛車はチクリ・カツオのツアラー。
          </Text>
          <Box
            borderRadius="2xl"
            boxShadow="2xl"
            w={{ base: '300px', md: '340px', lg: '400px' }}
            h={{ base: '200px', md: '225px', lg: '265px' }}
            overflow="hidden"
          >
            <NextImage
              src="/my-katsuo.jpeg"
              alt="チクリ・カツオ"
              width="640px"
              height="480px"
            />
          </Box>
        </VStack>
      </VStack>
      <Spacer height={24} />
      <Box as="footer">
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          flexDirection={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align="center"
          bg={useColorModeValue('gray.50', 'gray.900')}
        >
          <Heading
            as="h1"
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            letterSpacing="wider"
            color="gray.600"
            textAlign="left"
            fontFamily="heading"
          >
            鴨川デジタル相談所
          </Heading>
          <Text>
            © {year} Kamogawa Digital Consultation. All rights reserved
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
