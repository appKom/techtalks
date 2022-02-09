import React, { FC } from "react";
import Router from "../../router";
import { Flex, Divider } from "@chakra-ui/react";

const MainBody: FC = () => (
  <Flex
    direction="column"
    alignItems="center"
    background="#181b1e"
    textAlign="center"
    boxShadow={`0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)`}
    maxWidth="70rem"
    w="100%"
  >
    <Divider colorScheme="gray" w="80%" />
    <Router />
  </Flex>
);

export default MainBody;
