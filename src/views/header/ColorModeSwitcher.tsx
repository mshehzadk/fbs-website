import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginRight="12"
      onClick={toggleColorMode}
      alignItems="center"
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
      alignSelf="flex-end"
      rounded={50}
      bgColor="gray.100"
      // mt="4"
    />
  );
};
