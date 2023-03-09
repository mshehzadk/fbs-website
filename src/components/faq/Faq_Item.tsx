import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

export const Faq_Items = ({ Questions, Answer }: any) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
          <Box as="span" flex="1" textAlign="left">
            {Questions}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>{Answer}</AccordionPanel>
    </AccordionItem>
  );
};
