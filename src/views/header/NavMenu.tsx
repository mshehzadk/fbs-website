import { List,Stack, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function NavMenu({ horizontal = true }) {
  const { colorMode } = useColorMode();
  return (
    <>
      <List
        fontWeight={"bold"}
        color={colorMode == "light" ? "#4A5568" : "white"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "left", md: "center" }}
          spacing={20}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blogs</Link>
        </Stack>
      </List>
    </>
  );
}
