import React, { FC } from "react";
import { Container, Heading, Text, Divider } from "@chakra-ui/react";
import Slideshow from "../components/home/slideshow";

const Home: FC = () => {
  return (
    <Container w="100%" padding={5}>
      <Heading as="h1" size="2xl" textAlign="center">
        Techtalks 2023
      </Heading>
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl
        suscipit adipiscing bibendum est ultricies. Nulla porttitor massa id
        neque. Tellus in metus vulputate eu scelerisque felis imperdiet. Libero
        volutpat sed cras ornare arcu dui vivamus. Purus semper eget duis at
        tellus at urna condimentum. Rhoncus est pellentesque elit ullamcorper
        dignissim. Felis donec et odio pellentesque diam. Cursus euismod quis
        viverra nibh cras pulvinar.
      </Text>
      <Divider w="80%" mr="auto" ml="auto" mt={5} mb={5} />
      <Slideshow />
    </Container>
  );
};

export default Home;
