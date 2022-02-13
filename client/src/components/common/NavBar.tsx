import React, { FC } from "react";
import { Link as ReachLink } from "react-router-dom";
import { Link, Flex, Image, Box } from "@chakra-ui/react";

const Navbar: FC = () => {
  const NavOptions = [
    {
      id: "",
      name: "Hjem",
    },
    {
      id: "program",
      name: "Program",
    },
    {
      id: "about",
      name: "Om arrangementet",
    },
  ];

  const NavLinks = NavOptions.map((navOption) => (
    <Link
      as={ReachLink}
      key={navOption.id}
      to={`/${navOption.id}`}
      mr={10}
      ml={10}
      _focus={{
        WebKitTapHighlightColor: "transparent",
      }}
    >
      <Box
        display="inline-block"
        fontSize="xl"
        fontWeight="semibold"
        padding="1em"
        zIndex={1}
        _hover={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        {navOption.name}
      </Box>
    </Link>
  ));

  return (
    <Flex
      backgroundColor="#181b1e"
      w="100%"
      zIndex={0}
      direction="column"
      justifyContent="center"
    >
      <Link
        as={ReachLink}
        to={"/"}
        w="40%"
        marginLeft="auto"
        marginRight="auto"
        marginTop="0"
        _focus={{
          WebKitTapHighlightColor: "transparent",
        }}
      >
        <Image src={process.env.PUBLIC_URL + "/logo.svg"} alt="Logo" />
      </Link>

      <Flex
        w="80%"
        direction="row"
        marginLeft="auto"
        marginRight="auto"
        justifyContent="center"
      >
        {NavLinks}
      </Flex>
    </Flex>
  );
};

export default Navbar;
