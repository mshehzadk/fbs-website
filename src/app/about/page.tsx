// This is about page which displays the info about FBS.

"use client";
import Faq from "@/components/faq/Faq";
import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { Team_Card } from "./Team_Card";


const persons = [
  {
    key: 0,
    imageURL:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Humaid Ashraf",
    name: "Humaid Ashraf",
    desc: "President of Fast Blockchain Society. A very humble person, always eager to learn and network with like minded people.",
    role: "President",
    profileLink: "www.linkedin.com",
  },
  {
    key: 1,
    imageURL:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Humaid Ashraf",
    name: "Humaid Ashraf",
    desc: "President of Fast Blockchain Society. A very humble person, always eager to learn and network with like minded people.",
    role: "President",
    profileLink: "www.linkedin.com",
  },
  {
    key: 2,
    imageURL:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Humaid Ashraf",
    name: "Humaid Ashraf",
    desc: "President of Fast Blockchain Society. A very humble person, always eager to learn and network with like minded people.",
    role: "President",
    profileLink: "www.linkedin.com",
  },
  
];
export default function About() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Box>
        <Container maxW={{ md: 1200, base: 1000 }} mt={10}>
          <Center>
            {" "}
            <Heading fontWeight={"bold"}> About Us</Heading>
          </Center>

          <Heading as={"h2"} fontSize={25} fontWeight={"semibold"} my={5}>
            About Fast Blockchain Soceity
          </Heading>
          <Text fontSize={18}>
            Fast Blockchain Soceity is an entrepreneurial strive by a group of
            students and business experts. They have pledged themselves to
            explore all the opportunities related to new age modern technologies
            – AI and Blockchain. These technologies will slowly and gradually be
            used in every other field that touches the mankind and Blockchain
            Community is striving to tap these opportunities. They have chosen
            around 11 different domains to start with and are already running
            seven projects with investor’s money invested into them. They are
            slowly developing themselves to strive in this space and work
            towards the development of various projects in these eleven initial
            touchpoints. Some of the projects they are already running are -
            Blockchain and AI in Education, Blockchain and AI in Banking and
            Finance, Blockchain and AI in IT and e-commerce, Blockchain and AI
            in healthcare, Blockchain and AI in Hospitality and Blockchain and
            AI in Supply Chain.
          </Text>

          <Heading as={"h2"} fontSize={25} fontWeight={"semibold"} my={5}>
            Blockchain and AI as technologies
          </Heading>

          <Text fontSize={18}>
            Blockchain is a complex technology which have automated and
            decentralized the ledger like system which was used in banks to keep
            the person from double spending. Thus, it’s a very secure system
            that can be implemented in any field to keep the data secure and
            accurate and transparent amongst the peers. It helps in securing the
            different kind of transactions that are taking place in the network
            and promises to reduce the current bureaucratical inefficiencies
            caused by middlemen in this value chain. With AI in front there will
            be usage of this high volume of data available due to connected
            world for betterment of the society. With access to this huge amount
            of data, people can now access the data in general and see which way
            the population in general is trending and then governments could
            implement measures in the society to help people reduce the death
            rates and implement a much healthier society of people who are
            capable of living for longer durations.
          </Text>
        </Container>
        <Box>
          <Center>
            {" "}
            <Heading fontWeight={"bold"} mt={10}>
              {" "}
              Our Team
            </Heading>
          </Center>
          <Container maxW={{ md: 1200, base: 1000 }} my={10}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
              {persons.map((person) => (
                <Team_Card person={person} key={person.key}/>        
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
      <Faq/>
    </div>
  );
}
