"use client";
import Image from "next/image";
import NextLink from "next/link";

import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  Button,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box as="nav" role={"presentation"}>
      <Flex
        bg="black"
        minH={"90px"}
        maxW={1500}
        px={{ base: 12 }}
        borderStyle={"solid"}
        borderColor={"gray.400"}
        align="center"
        fontSize={20}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "start", md: "start" }}
          color={"white"}
        >
          <Box>
            <Link as={NextLink} href="/">
              <Image
                src={"/logo.png"}
                alt="FBS"
                height={100}
                width={80}
              ></Image>
            </Link>
          </Box>
          <Box
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            justifyContent={"center"}
            flex={1}
            flexWrap="wrap"
          >
            <Link as={NextLink} href="" px={7}>
              Home
            </Link>
            <Link as={NextLink} href="" px={7}>
              Syllabus
            </Link>

            <Link as={NextLink} href="" px={7}>
              About
            </Link>
            <Link as={NextLink} href="" px={7}>
              Contact
            </Link>
          </Box>
          <Stack
            flex={{ base: 0 }}
            justify={"flex-end"}
            direction="row"
            spacing={6}
          >
            <Link
              as={NextLink}
              isExternal
              href={"https://github.com/MuhamamdShehzad"}
              margin="auto"
              display={{ base: "none", md: "inline-flex" }}
              textDecoration="none"
            >
              <Button
                colorScheme="white"
                variant="outline"
                size="md"
                width="100px"
                border="2px"
                borderRadius={"full"}
                borderColor="green.500"
                _hover={{ bg: "white", color: "black" }}
              >
                Apply
              </Button>
            </Link>
          </Stack>
        </Flex>
        <Box display={{ md: "none" }} flex={{ base: 0 }}>
          <Menu>
            <MenuButton
              float="right"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              colorScheme="green"
            />
            <MenuList color="black">
              <MenuItem bg={"white"} _hover={{ bg: "black", color: "white" }}>
                Home
              </MenuItem>
              <MenuItem bg={"white"} _hover={{ bg: "black", color: "white" }}>
                Syllabus
              </MenuItem>
              <MenuItem bg={"white"} _hover={{ bg: "black", color: "white" }}>
                Explore
              </MenuItem>
              <MenuItem bg={"white"} _hover={{ bg: "black", color: "white" }}>
                About
              </MenuItem>
              <MenuItem bg={"white"} _hover={{ bg: "black", color: "white" }}>
                Contact
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
