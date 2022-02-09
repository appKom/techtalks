import React, { FC, useState, useEffect } from "react";
import { Container, Image, HStack } from "@chakra-ui/react";
import Dot from "./Dots";

const Slideshow: FC = () => {
  const [images] = useState<string[]>([
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://picsum.photos/800/500?random=2",
  ]);
  const [currentImage, setCurrentImage] = useState(0);
  const [dots, setDots] = useState<JSX.Element[]>([]);

  const setImageIndex = (index: number) => {
    setCurrentImage(index);
  };
  /*
  setInterval(() => {
    if (currentImage === images.length - 1) setCurrentImage(0);
    else setImageIndex(currentImage + 1);
  }, 5000);
*/
  useEffect(() => {
    const dotsArray: JSX.Element[] = [];
    for (let i = 0; i < images.length; i++) {
      dotsArray.push(
        <Dot
          key={i}
          active={currentImage === i}
          index={i}
          onClick={setImageIndex}
        />
      );
    }
    setDots(dotsArray);
  }, [images, currentImage]);

  return (
    <Container w="100%" padding={2}>
      <Image w="100%" h="400px" src={images[currentImage]} />
      <HStack w="50%" justify="center" marginTop={2} ml="auto" mr="auto">
        {dots}
      </HStack>
    </Container>
  );
};

export default Slideshow;
