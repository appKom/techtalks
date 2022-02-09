import React, { FC } from "react";
import Navbar from "./components/common/NavBar";
import Content from "./components/common/Content";
import Footer from "./components/common/Footer";
import { Flex } from "@chakra-ui/react";

const App: FC = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      maxWidth="70rem"
      margin="0 auto"
    >
      <Navbar />
      <Content />
      <Footer />
    </Flex>
  );
};

export default App;
