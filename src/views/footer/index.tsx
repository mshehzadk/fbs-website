"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Box bg="#0c0c0c">
      <Container maxW={1300}>
        <SimpleGrid
          textAlign={{ lg: "start", base: "center" }}
          spacing="30px"
          py="40px"
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        >
          <Box display={{ base: "none", md: "none", lg: "initial" }}>
            <Heading as="h4" pb="20px" color="white">
              About Us
            </Heading>
            <Image
              src="/logo.png"
              alt="Panaverse"
              width={100}
              height={100}
            ></Image>
            <Text pt="15px" pr={{ lg: "40px", base: "0" }} color="gray">
              Lets connect for the future of web.{" "}
            </Text>
          </Box>
          <Box>
            <Heading as="h4" color="white">
              Useful Links
            </Heading>
            <Grid pt="40px" color="gray">
              <Link href="/">Home</Link>
              <Link href="/">Roadmap</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </Grid>
          </Box>
          <Box>
            <Heading as="h4" color="white">
              Follow Us
            </Heading>
            <Grid pt="40px" color="gray">
              <Link href="/">Facebook</Link>
              <Link href="/">Linkedin</Link>
              <Link href="/">Instagram</Link>
            </Grid>
          </Box>
          <Box display={{ base: "none", md: "initial" }}>
            <Heading as="h4" color="white">
              Contact Us
            </Heading>
            <Grid pt="40px" color="gray">
              <Link href="/">+92 123 4567890</Link>
              <Link href="/">abcdefghi@gmail.com</Link>
              <Link href="/">Islamabad, Pakistan</Link>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
