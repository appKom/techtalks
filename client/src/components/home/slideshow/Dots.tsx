import React, { FC } from "react";
import { Box, Heading } from "@chakra-ui/react";

type DotProps = {
  active: boolean;
  index: number;
  onClick: (index: number) => void;
};

const Dot: FC<DotProps> = ({ active, index, onClick }) => {
  return (
    <Box
      onClick={() => onClick(index)}
      w={3}
      h={3}
      bg={active ? "teal" : "gray"}
      borderRadius={100}
      marginLeft={2}
      marginRight={2}
    ></Box>
  );
};

export default Dot;
