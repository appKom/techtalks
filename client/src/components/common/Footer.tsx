import React, {FC} from 'react';
import {Container, Text, Link } from "@chakra-ui/react";
import {EmailIcon} from '@chakra-ui/icons';

const Footer: FC = () => (
  <Container marginTop="2rem" w="100%" display="block" textAlign="center">
    <Text>Tech Talks - et arrangement i regi av Ekskursjonskomiteen Online.</Text>
    <Text>Orgnr. 920 939 627</Text>
    <Text>
      <Link component="a" href="mailto: ekskom@online.ntnu.no">ekskom@online.ntnu.no <EmailIcon /></Link>
    </Text>
    <Text>
      <Link component="a" href="mailto: bedriftskontakt@online.ntnu.no">bedriftskontakt@online.ntnu.no <EmailIcon /></Link>
    </Text>
  </Container>
);

export default Footer;