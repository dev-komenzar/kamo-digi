import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { animated, to as interpolate, useSprings } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import React, { useState, VFC } from 'react';
import { Spacer } from '../components/Spacer';

const Houdouji: VFC = () => {
  return (
    <>
      <Box
        w="full"
        h="300px"
        mt={0}
        mx={0}
        backgroundImage="/houdouji.png"
        borderTopRadius={'2xl'}
        borderBottomRadius={0}
        backgroundPosition="center"
        backgroundSize="cover"
      ></Box>
      <Stack p={{ base: 2, md: 4 }}>
        <Text
          color="blue.500"
          fontWeight="800"
          fontSize="xs"
          letterSpacing="wide"
        >
          サイト作成
        </Text>
        <Heading color="gray.700" fontSize={{ base: 'lg' }}>
          実験寺院・寳幢寺
          <Text as={'span'} fontSize="sm">
            （ホウドウジ）
          </Text>
        </Heading>
        <Text color="gray.500">
          日本仏教徒協会様が運営する新しいあり方を模索するお寺、ホウドウジ。サイトを作成させていただきました。
        </Text>
      </Stack>
    </>
  );
};

const WhatIsKamodigi: VFC = () => {
  return (
    <Box p={4}>
      <Heading color="gray.700" fontSize={{ base: 'lg', md: '3xl', lg: '6xl' }}>
        鴨川
        <br />
        デジタル
        <br />
        相談所
      </Heading>
      <Spacer height={4} />
      <List spacing={3} color="gray.600">
        <ListItem>
          <ListIcon as={InfoIcon} color="green.500" />
          京都を中心に活動
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          サイト作成
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Web アプリ開発
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          ネイティブアプリ開発
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          ネット広告・SEO・MEO
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          ライブ配信のお手伝い
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          幅広く相談お受けします
        </ListItem>
      </List>
    </Box>
  );
};

const TechInfo: VFC = () => {
  return (
    <Box p={4}>
      <Heading color="gray.700" fontSize={{ base: 'lg', md: '3xl', lg: '6xl' }}>
        あつかう技術
      </Heading>
      <Spacer height={4} />
      <List spacing={3} color="gray.600">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          React, Next.js, Svelteを用いたWebアプリ開発
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          TypeScript で型安全な開発
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          アニメーションも得意
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          React Native, Expo ネイティブアプリ開発
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Electron を用いたデスクトップアプリ開発
        </ListItem>
      </List>
    </Box>
  );
};
const TechInfoPage2: VFC = () => {
  return (
    <Box p={4}>
      <List spacing={3} color="gray.600">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          WordPress 補修、移行
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Notion など業務効率化のご提案
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Electron を用いたデスクトップアプリ開発
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Go, Elm, Raspberry Pi...
        </ListItem>
      </List>
    </Box>
  );
};

const GarageSale: VFC = () => {
  return (
    <Box p={4}>
      <Heading color="gray.700" fontSize={{ base: 'lg', md: '3xl', lg: '6xl' }}>
        ガレージセール
      </Heading>
      <Spacer height={4} />
      <Stack>
        <Text color={'gray.500'}>
          開発中のサービス。個人が直接マーケットに結び付けられる時代に、コミュニティの中の信頼をベースとするサービスを作っていきます。
          開発者・モニター募集中。
        </Text>
      </Stack>
    </Box>
  );
};

const AnimatedBox = chakra(animated.div);

const cards = [
  <GarageSale key="garage-sale" />,
  <Houdouji key="houdouji" />,
  <TechInfoPage2 key="my-tech-page2" />,
  <TechInfo key="my-tech" />,
  <WhatIsKamodigi key="my-profile" />,
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 30,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1000px) rotateX(8deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

export function Deck() {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity[0] > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity[0] : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <AnimatedBox
          position={'absolute'}
          w="300px"
          h="200px"
          willChange={'transform'}
          display="flex"
          alignItems="center"
          justifyContent="center"
          key={i}
          style={{ x, y, touchAction: 'none' }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <AnimatedBox
            backgroundColor="white"
            backgroundSize="auto 85%"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
            w={{ base: '280px', md: '400px' }}
            h={{ base: '480px', md: '520px', lg: '570px' }}
            willChange="transform"
            borderRadius="3xl"
            boxShadow="2xl"
            borderWidth={1}
            borderColor="gray.200"
            overflow="hidden"
            userSelect="none"
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            {cards[i]}
          </AnimatedBox>
        </AnimatedBox>
      ))}
    </>
  );
}
