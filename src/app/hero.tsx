"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Square,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <Flex
      color="white"
      flexDirection={{ base: "column", md: "row" }}
      textColor={"black"}
    >
      <Box
        flex="1"
        minH={100}
        m={{ base: "20px", md: "30px" }}
        p={{ base: 8, md: 20 }}
        /*  bg="tomato" */
        flexDirection="column"
        display={"flex"}
        alignContent={"center"}
        justifyContent="center"
      >
        <Text fontSize={"20px"} fontWeight="medium">
          LET ALSO MAKE TOMORROW WITH
        </Text>
        <br />
        <Text fontSize={"40px"} fontWeight="semibold">
          FAST BLLOCKCHAIN SOCIETY
        </Text>
        <Button colorScheme="teal" size="lg" maxW={150} mt={8}>
          <Link href="/">Learn More</Link>
        </Button>
      </Box>
      <Center flex="2" minH={100} m={{ base: "20px", md: "30px" }}>
        <Image src={"/camera.gif"} alt="Gif" width={600} height={300}></Image>
      </Center>
    </Flex>
  );
}
