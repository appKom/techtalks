import React, { FC } from "react";
import { Container, Heading } from "@chakra-ui/react";
import Slideshow from "../components/home/slideshow";

const Home: FC = () => {
  return (
    <Container w="100%" padding={5}>
      <Heading as="h1" size="2xl" textAlign="center">
        Techtalks 2023
      </Heading>
      <Slideshow />
      {/* Om techtalks */}
    </Container>
  );
};

export default Home;
