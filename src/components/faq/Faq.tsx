"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Accordion } from "@chakra-ui/react";
import { Faq_Items } from "./Faq_Item";

const items = [
  {
    Question: "How does the Fast Blcokchain Society Work?",
    Answer:
      "Blockchain technology presents unique benefits of strong security encryptions, unchangeable data and a decentralized platform. With the onset of a pandemic, businesses must adapt to a secured and reliable technological system. This is where Blockchain Technology is seen as the most reliable technology to look forward to and rely upon. \n Fast Blcokchain Society is an local society of Fast that focuses on bringing Blockchain technology in traditional trust business. The community enables the business owners to interact with the tech-savvy blockchain enthusiast. This enables traditional businesses to get acquainted with, also equip themselves with the right technology for their business growth.",
  },
  {
    Question: "How can I join Fast Blockchain Society?",
    Answer:
      "Fast Blockchain community is group of blockchain enthusiats & borderless community in Pakistan. It provides a unique opportunity for Students and partners to interact and support each other. It allows all the individuals involved to make the maximum utilization of its close network comprising of technology-savvy experts and individuals with an entrepreneurial mindset. \n So, don't wait come and join us to make the world more trust worthy.",
  },
];
export default function Faq() {
  return (
    <Box>
      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Ask us
        </Text>
        <Heading fontWeight={"semibold"}>Frequently Asked Questions</Heading>
        <Text fontSize={"20"} py="3">
          Everything you need to know about the Fast Blockchain Society.
        </Text>
      </Box>
      <Container maxW={1200} my="16">
        <Flex flexDirection={{ base: "column", md: "row" }}>
          {/* right section */}
          <Box flex={3}>
            <Accordion allowToggle>
              <>
                {items.map((item) => (
                  <Faq_Items Questions={item.Question} Answer={item.Answer} />
                ))}
              </>
            </Accordion>
            {/* <Button display="block" m="auto" mt="5">
              Show more
            </Button> */}
          </Box>
          {/* right section ends above */}
        </Flex>
      </Container>
    </Box>
  );
}
