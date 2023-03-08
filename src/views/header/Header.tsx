"use client";

import {
  Box,
  Button,
  Flex,
  Hide,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";
import NavMenu from "./NavMenu";
import Burger from "./Burger";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export default function Header() {
  const { colorMode } = useColorMode();

  return (
    <Box as="header" position={"sticky"} top="0" zIndex={1}>
      {/* left area */}
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        bg={colorMode == "dark" ? "black" : "white"}
        py="5"
      >
        <Box>
          <HStack>
            <Image src="/images/logo.png" alt="logo" w={"24"} h={"14"} />
            <Hide below="md">
              {/* <List>
                <HStack
                  align={"center"}
                  spacing={10}
                  fontWeight="bold"
                  ml="40px"
                >
                  <ListItem>Home</ListItem>
                  <ListItem>About</ListItem>
                  <ListItem>Contact</ListItem>
                </HStack>
              </List> */}
              <HStack spacing={10} pl="10">
                <NavMenu />
              </HStack>
            </Hide>
          </HStack>
        </Box>
        {/* right area */}
        <HStack>
          <Box pl="15">
            <SearchIcon w="25" h="25" />
          </Box>
          {/* <Box pl="15">
            <MoonIcon w="25" h="25" />
          </Box> */}
          <ColorModeSwitcher />

          <Show below="md">
            <Burger />
          </Show>
          <Link href="http://piaic.org/" target={"_blank"}>
            <Button variant={"outline"}>Go to Piaic</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
