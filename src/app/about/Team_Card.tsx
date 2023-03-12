// This is Card component that displays the info of the team members.

import React from 'react'
import {
  Box,
  Card,

  CardBody,
  CardFooter,
  Center,

  Heading,
  Text,
  Stack,
  Divider,

  Button,
  Image,
  
} from "@chakra-ui/react";
import Link from 'next/link';
export const Team_Card = ({person}:any) => {
  return (
    <>
      <Card>
        <CardBody>
          <Center>
            <Image
              src={person.imageURL}
              alt={person.imgAlt}
              borderRadius="full"
              boxSize="150px"
            />
          </Center>
          <Stack mt="6" spacing="3">
            <Center>
              <Heading size="md">{person.name}</Heading>
            </Center>
            <Center>
              <Text>{person.desc}</Text>
            </Center>
            <Text color="blue.500" fontSize="l">
              {person.role}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button variant="solid" colorScheme="blue" m={"auto"}>
            <Link href={person.profileLink} target={"_blank"}>View Profile</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
